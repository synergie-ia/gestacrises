// Gestion du sous-menu Formateur
document.addEventListener('DOMContentLoaded', function() {
    const formateurCard = document.getElementById('card-formateur');
    const submenu = document.getElementById('submenu-formateur');
    
    if (formateurCard && submenu) {
        formateurCard.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle du sous-menu
            submenu.classList.toggle('active');
            formateurCard.classList.toggle('active');
            
            // Scroll smooth vers le sous-menu si on l'ouvre
            if (submenu.classList.contains('active')) {
                setTimeout(() => {
                    submenu.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 100);
            }
        });
    }
    
    // Fermer le sous-menu si on clique en dehors
    document.addEventListener('click', function(e) {
        if (!formateurCard.contains(e.target) && !submenu.contains(e.target)) {
            if (submenu.classList.contains('active')) {
                submenu.classList.remove('active');
                formateurCard.classList.remove('active');
            }
        }
    });
});
