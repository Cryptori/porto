// ===== MULTI-LANGUAGE SYSTEM =====
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = this.getTranslations();
        this.init();
    }

    getTranslations() {
        return {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.skills': 'Skills',
                'nav.projects': 'Projects',
                'nav.contact': 'Contact',
                'nav.hire': 'Hire Me',
                
                // Hero Section
                'hero.available': 'Available for freelance work',
                'hero.title': 'Hi, I\'m',
                'hero.subtitle': 'Full Stack Developer & Mobile Specialist',
                'hero.description': 'I build scalable web applications and cross-platform mobile apps that deliver exceptional user experiences. Let\'s turn your ideas into reality.',
                'hero.startProject': 'Start Project',
                'hero.viewWork': 'View Work',
                'hero.projects': 'Projects',
                'hero.years': 'Years',
                'hero.satisfaction': 'Satisfaction',
                
                // Services
                'services.title': 'My Services',
                'services.subtitle': 'Comprehensive solutions for your digital needs',
                'services.web.title': 'Web Development',
                'services.web.desc': 'Custom websites and web applications built with modern technologies like React, Vue, and Node.js.',
                'services.mobile.title': 'Mobile Development',
                'services.mobile.desc': 'Cross-platform mobile apps for iOS and Android using React Native and Flutter.',
                'services.backend.title': 'Backend Development',
                'services.backend.desc': 'Robust server-side solutions with REST APIs, databases, and cloud deployment.',
                'services.feature.responsive': 'Responsive Design',
                'services.feature.seo': 'SEO Optimized',
                'services.feature.performance': 'Fast Performance',
                'services.feature.crossplatform': 'Cross-Platform',
                'services.feature.native': 'Native Performance',
                'services.feature.appstore': 'App Store Ready',
                'services.feature.api': 'REST API',
                'services.feature.database': 'Database Design',
                'services.feature.cloud': 'Cloud Deployment',
                
                // Skills
                'skills.title': 'Technical Skills',
                'skills.subtitle': 'Technologies and tools I use to bring ideas to life',
                'skills.frontend': 'Frontend',
                'skills.backend': 'Backend',
                'skills.mobile': 'Mobile',
                
                // Projects
                'projects.title': 'Featured Projects',
                'projects.subtitle': 'A selection of my recent work',
                'projects.ecommerce.title': 'E-Commerce Platform',
                'projects.ecommerce.desc': 'Full-stack e-commerce solution with payment integration and admin dashboard.',
                'projects.fitness.title': 'Fitness Mobile App',
                'projects.fitness.desc': 'Cross-platform fitness application with workout tracking and social features.',
                'projects.analytics.title': 'Analytics Dashboard',
                'projects.analytics.desc': 'Real-time business intelligence dashboard with data visualization.',
                'projects.viewAll': 'View All Projects',
                'projects.liveDemo': 'Live Demo',
                'projects.details': 'Details',
                'projects.appStore': 'App Store',
                
                // Contact
                'contact.title': 'Let\'s Work Together',
                'contact.subtitle': 'Have a project in mind? I\'m available for freelance work and would love to hear about your ideas.',
                'contact.email': 'Email',
                'contact.whatsapp': 'WhatsApp',
                'contact.linkedin': 'LinkedIn',
                'contact.response': 'Response within 24 hours',
                'contact.fastResponse': 'Fast response',
                'contact.professional': 'Professional network',
                'contact.form.name': 'Full Name',
                'contact.form.email': 'Email Address',
                'contact.form.project': 'Project Type',
                'contact.form.select': 'Select project type',
                'contact.form.web': 'Web Development',
                'contact.form.mobile': 'Mobile App',
                'contact.form.backend': 'Backend Development',
                'contact.form.consultation': 'Consultation',
                'contact.form.message': 'Project Details',
                'contact.form.placeholder': 'Tell me about your project...',
                'contact.form.send': 'Send Message',
                
                // Footer
                'footer.tagline': 'Building digital experiences that make a difference.',
                'footer.navigation': 'Navigation',
                'footer.services': 'Services',
                'footer.rights': 'All rights reserved.',
                'footer.built': 'Built with passion and too much coffee.'
            },
            id: {
                // Navigation
                'nav.home': 'Beranda',
                'nav.services': 'Layanan',
                'nav.skills': 'Keahlian',
                'nav.projects': 'Proyek',
                'nav.contact': 'Kontak',
                'nav.hire': 'Hubungi Saya',
                
                // Hero Section
                'hero.available': 'Tersedia untuk proyek freelance',
                'hero.title': 'Hai, saya',
                'hero.subtitle': 'Full Stack Developer & Spesialis Mobile',
                'hero.description': 'Saya membangun aplikasi web yang scalable dan aplikasi mobile cross-platform yang memberikan pengalaman pengguna terbaik. Mari wujudkan ide Anda menjadi kenyataan.',
                'hero.startProject': 'Mulai Proyek',
                'hero.viewWork': 'Lihat Karya',
                'hero.projects': 'Proyek',
                'hero.years': 'Tahun',
                'hero.satisfaction': 'Kepuasan',
                
                // Services
                'services.title': 'Layanan Saya',
                'services.subtitle': 'Solusi komprehensif untuk kebutuhan digital Anda',
                'services.web.title': 'Pengembangan Web',
                'services.web.desc': 'Website dan aplikasi web custom yang dibangun dengan teknologi modern seperti React, Vue, dan Node.js.',
                'services.mobile.title': 'Pengembangan Mobile',
                'services.mobile.desc': 'Aplikasi mobile cross-platform untuk iOS dan Android menggunakan React Native dan Flutter.',
                'services.backend.title': 'Pengembangan Backend',
                'services.backend.desc': 'Solusi server-side yang robust dengan REST API, database, dan cloud deployment.',
                'services.feature.responsive': 'Desain Responsif',
                'services.feature.seo': 'Optimasi SEO',
                'services.feature.performance': 'Performansi Cepat',
                'services.feature.crossplatform': 'Cross-Platform',
                'services.feature.native': 'Performansi Native',
                'services.feature.appstore': 'Siap App Store',
                'services.feature.api': 'REST API',
                'services.feature.database': 'Desain Database',
                'services.feature.cloud': 'Cloud Deployment',
                
                // Skills
                'skills.title': 'Keahlian Teknis',
                'skills.subtitle': 'Teknologi dan tools yang saya gunakan untuk mewujudkan ide',
                'skills.frontend': 'Frontend',
                'skills.backend': 'Backend',
                'skills.mobile': 'Mobile',
                
                // Projects
                'projects.title': 'Proyek Unggulan',
                'projects.subtitle': 'Beberapa karya terbaru saya',
                'projects.ecommerce.title': 'Platform E-Commerce',
                'projects.ecommerce.desc': 'Solusi e-commerce full-stack dengan integrasi pembayaran dan dashboard admin.',
                'projects.fitness.title': 'Aplikasi Fitness Mobile',
                'projects.fitness.desc': 'Aplikasi fitness cross-platform dengan pelacakan workout dan fitur sosial.',
                'projects.analytics.title': 'Dashboard Analytics',
                'projects.analytics.desc': 'Dashboard business intelligence real-time dengan visualisasi data.',
                'projects.viewAll': 'Lihat Semua Proyek',
                'projects.liveDemo': 'Demo Live',
                'projects.details': 'Detail',
                'projects.appStore': 'App Store',
                
                // Contact
                'contact.title': 'Mari Bekerja Sama',
                'contact.subtitle': 'Punya proyek dalam pikiran? Saya tersedia untuk pekerjaan freelance dan akan senang mendengar ide Anda.',
                'contact.email': 'Email',
                'contact.whatsapp': 'WhatsApp',
                'contact.linkedin': 'LinkedIn',
                'contact.response': 'Respon dalam 24 jam',
                'contact.fastResponse': 'Respon cepat',
                'contact.professional': 'Jaringan profesional',
                'contact.form.name': 'Nama Lengkap',
                'contact.form.email': 'Alamat Email',
                'contact.form.project': 'Jenis Proyek',
                'contact.form.select': 'Pilih jenis proyek',
                'contact.form.web': 'Pengembangan Web',
                'contact.form.mobile': 'Aplikasi Mobile',
                'contact.form.backend': 'Pengembangan Backend',
                'contact.form.consultation': 'Konsultasi',
                'contact.form.message': 'Detail Proyek',
                'contact.form.placeholder': 'Ceritakan tentang proyek Anda...',
                'contact.form.send': 'Kirim Pesan',
                
                // Footer
                'footer.tagline': 'Membangun pengalaman digital yang membuat perbedaan.',
                'footer.navigation': 'Navigasi',
                'footer.services': 'Layanan',
                'footer.rights': 'Hak cipta dilindungi.',
                'footer.built': 'Dibangun dengan passion dan terlalu banyak kopi.'
            }
        };
    }

    init() {
        this.setLanguage(this.currentLang);
        this.bindEvents();
    }

    setLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.setAttribute('data-language', lang);
        localStorage.setItem('language', lang);
        
        this.updateToggleButton();
        this.updateContent();
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            const span = toggleBtn.querySelector('span');
            span.textContent = this.currentLang.toUpperCase();
        }
    }

    updateContent() {
        const translations = this.translations[this.currentLang];
        
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[key]) {
                element.setAttribute('placeholder', translations[key]);
            }
        });

        // Update select options
        document.querySelectorAll('[data-i18n-option]').forEach(element => {
            const key = element.getAttribute('data-i18n-option');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }

    bindEvents() {
        const toggleBtn = document.getElementById('languageToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const newLang = this.currentLang === 'en' ? 'id' : 'en';
                this.setLanguage(newLang);
            });
        }
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});