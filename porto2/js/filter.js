// ===== PROJECT FILTER SYSTEM =====
class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.activeFilter = 'all';
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.applyFilter('all');
    }

    bindEvents() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.setActiveFilter(button);
                this.applyFilter(filter);
            });
        });
    }

    setActiveFilter(activeButton) {
        this.filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    applyFilter(filter) {
        this.activeFilter = filter;
        
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            // Add hiding class first for animation
            card.classList.add('hidden');
            
            setTimeout(() => {
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.remove('visible');
                }
            }, 200);
        });

        // Re-initialize AOS for new visible elements
        setTimeout(() => {
            AOS.refresh();
        }, 400);
    }

    // Method to shuffle projects (optional feature)
    shuffleProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        const projects = Array.from(this.projectCards);
        
        // Fisher-Yates shuffle algorithm
        for (let i = projects.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            projectsGrid.appendChild(projects[j]);
        }
        
        // Reapply current filter after shuffle
        setTimeout(() => {
            this.applyFilter(this.activeFilter);
        }, 100);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.projectFilter = new ProjectFilter();
    
    // Optional: Add shuffle button functionality
    const shuffleBtn = document.createElement('button');
    shuffleBtn.className = 'btn-outline';
    shuffleBtn.innerHTML = '<i class="fas fa-random"></i> Shuffle';
    shuffleBtn.style.marginLeft = '1rem';
    
    shuffleBtn.addEventListener('click', () => {
        window.projectFilter.shuffleProjects();
    });
    
    // Add shuffle button to filters
    const filtersContainer = document.querySelector('.project-filters');
    if (filtersContainer) {
        filtersContainer.appendChild(shuffleBtn);
    }
});