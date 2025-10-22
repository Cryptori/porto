// ===== PWA FUNCTIONALITY =====
class PWAHandler {
    constructor() {
        this.deferredPrompt = null;
        this.init();
    }

    async init() {
        this.registerServiceWorker();
        this.setupInstallPrompt();
        this.setupOfflineDetection();
        this.checkStandaloneMode();
    }

    // Register Service Worker
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('Service Worker registered: ', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('Service Worker update found!');
                    
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            this.showUpdateNotification();
                        }
                    });
                });
            } catch (error) {
                console.error('Service Worker registration failed: ', error);
            }
        }
    }

    // Handle install prompt
    setupInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallPrompt();
        });

        window.addEventListener('appinstalled', () => {
            console.log('PWA was installed');
            this.deferredPrompt = null;
            this.hideInstallPrompt();
            this.showInstallSuccess();
        });
    }

    // Show install prompt
    showInstallPrompt() {
        // Create install prompt UI
        const installPrompt = document.createElement('div');
        installPrompt.id = 'install-prompt';
        installPrompt.innerHTML = `
            <div class="install-prompt-content">
                <i class="fas fa-download"></i>
                <div class="install-text">
                    <h4>Install Portfolio App</h4>
                    <p>Install for faster access and offline functionality</p>
                </div>
                <div class="install-actions">
                    <button class="btn-outline" id="install-later">Later</button>
                    <button class="btn-primary" id="install-now">Install</button>
                </div>
            </div>
        `;

        // Add styles
        installPrompt.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: var(--bg-card);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 1rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideUp 0.3s ease;
        `;

        document.body.appendChild(installPrompt);

        // Add event listeners
        document.getElementById('install-now').addEventListener('click', () => {
            this.installApp();
        });

        document.getElementById('install-later').addEventListener('click', () => {
            this.hideInstallPrompt();
        });

        // Auto hide after 10 seconds
        setTimeout(() => {
            if (document.getElementById('install-prompt')) {
                this.hideInstallPrompt();
            }
        }, 10000);
    }

    hideInstallPrompt() {
        const prompt = document.getElementById('install-prompt');
        if (prompt) {
            prompt.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => prompt.remove(), 300);
        }
    }

    async installApp() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            
            this.deferredPrompt = null;
            this.hideInstallPrompt();
        }
    }

    showInstallSuccess() {
        this.showNotification('App installed successfully! 🎉', 'success');
    }

    showUpdateNotification() {
        this.showNotification('New version available! Refresh to update.', 'info');
        
        // Add refresh button to notification
        setTimeout(() => {
            const refreshBtn = document.createElement('button');
            refreshBtn.textContent = 'Refresh';
            refreshBtn.className = 'btn-primary';
            refreshBtn.style.marginLeft = '1rem';
            refreshBtn.onclick = () => location.reload();
            
            const notification = document.querySelector('.notification:last-child');
            if (notification) {
                notification.appendChild(refreshBtn);
            }
        }, 1000);
    }

    // Offline detection
    setupOfflineDetection() {
        window.addEventListener('online', () => {
            this.showNotification('Connection restored', 'success');
            document.body.classList.remove('offline');
        });

        window.addEventListener('offline', () => {
            this.showNotification('You are currently offline', 'warning');
            document.body.classList.add('offline');
        });

        // Initial check
        if (!navigator.onLine) {
            document.body.classList.add('offline');
        }
    }

    // Check if app is running in standalone mode
    checkStandaloneMode() {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            document.body.classList.add('standalone-mode');
            console.log('Running in standalone mode');
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

// Initialize PWA when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.pwaHandler = new PWAHandler();
});