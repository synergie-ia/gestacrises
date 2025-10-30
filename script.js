// Gestion du menu déroulant Formateur
document.addEventListener('DOMContentLoaded', function() {
    const formateur = document.getElementById('card-formateur');
    const submenu = document.getElementById('submenu-formateur');
    
    if (formateur && submenu) {
        formateur.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle le sous-menu
            submenu.classList.toggle('active');
            
            // Toggle la classe active sur la carte formateur
            formateur.classList.toggle('active');
        });
    }
    
    // Empêcher la propagation des clics sur les cartes du sous-menu
    const subCards = document.querySelectorAll('.card-small');
    subCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});
