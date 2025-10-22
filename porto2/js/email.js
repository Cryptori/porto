// ===== EMAILJS INTEGRATION =====
class EmailService {
    constructor() {
        this.initEmailJS();
    }

    initEmailJS() {
        // Initialize EmailJS with your Public Key
        emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Ganti dengan Public Key kamu
        
        this.bindFormSubmission();
    }

    bindFormSubmission() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.sendEmail(contactForm);
            });
        }
    }

    async sendEmail(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Send email using EmailJS
            const response = await emailjs.sendForm(
                'YOUR_SERVICE_ID',    // Ganti dengan Service ID
                'YOUR_TEMPLATE_ID',   // Ganti dengan Template ID  
                form
            );

            // Success
            this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
        } catch (error) {
            // Error handling
            console.error('Email sending failed:', error);
            this.showNotification('Failed to send message. Please try again or contact me directly.', 'error');
        } finally {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.emailService = new EmailService();
});