// Configuration des liens (à modifier selon vos besoins)
const LINKS = {
    video: '', // Lien YouTube à ajouter
    demo: '', // Lien GPT à ajouter
    principes: '', // Lien Jupiter à ajouter
    comprendre: '', // Lien Jupiter à ajouter
    choisir: '', // Lien Jupiter à ajouter
    agir: '', // Lien Jupiter à ajouter
    pcsAvec: '', // Lien à ajouter
    pcsSans: '' // Lien à ajouter
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initFormateurCard();
    initCardLinks();
});

// Gestion de la carte Formateur et son sous-menu
function initFormateurCard() {
    const cardFormateur = document.getElementById('card-formateur');
    const submenu = document.getElementById('submenu-formateur');

    cardFormateur.addEventListener('click', function() {
        // Toggle du sous-menu (afficher/cacher)
        submenu.classList.toggle('active');
        cardFormateur.classList.toggle('active');
    });
}

// Configuration des liens des cartes
function initCardLinks() {
    // Carte Vidéo
    const cardVideo = document.getElementById('card-video');
    if (LINKS.video) {
        cardVideo.href = LINKS.video;
        cardVideo.target = '_blank';
    } else {
        cardVideo.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Le lien YouTube sera ajouté prochainement.');
        });
    }

    // Carte Démonstrateur
    const cardDemo = document.getElementById('card-demo');
    if (LINKS.demo) {
        cardDemo.href = LINKS.demo;
        cardDemo.target = '_blank';
    } else {
        cardDemo.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Le lien vers le GPT sera ajouté prochainement.');
        });
    }

    // Cartes du sous-menu Formateur
    setupSubmenuCard('card-principes', LINKS.principes, 'Principes généraux');
    setupSubmenuCard('card-comprendre', LINKS.comprendre, 'Comprendre');
    setupSubmenuCard('card-choisir', LINKS.choisir, 'Choisir');
    setupSubmenuCard('card-agir', LINKS.agir, 'Agir');

    // Carte PCS avec
    const cardPcsAvec = document.getElementById('card-pcs-avec');
    if (LINKS.pcsAvec) {
        cardPcsAvec.href = LINKS.pcsAvec;
    } else {
        cardPcsAvec.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Fonctionnalité "GestaCrises avec PCS" à venir.');
        });
    }

    // Carte PCS sans
    const cardPcsSans = document.getElementById('card-pcs-sans');
    if (LINKS.pcsSans) {
        cardPcsSans.href = LINKS.pcsSans;
    } else {
        cardPcsSans.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Fonctionnalité "GestaCrises sans PCS" à venir.');
        });
    }
}

// Fonction pour configurer les cartes du sous-menu
function setupSubmenuCard(cardId, link, title) {
    const card = document.getElementById(cardId);
    if (link) {
        card.href = link;
        card.target = '_blank';
    } else {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`Le lien vers "${title}" sera ajouté prochainement.`);
        });
    }
}

// Fonction utilitaire pour mettre à jour un lien plus tard
function updateLink(cardId, url, openInNewTab = true) {
    const card = document.getElementById(cardId);
    if (card) {
        card.href = url;
        if (openInNewTab) {
            card.target = '_blank';
        }
    }
}

// Exemples d'utilisation pour ajouter vos liens plus tard :
// updateLink('card-video', 'https://youtube.com/votre-video');
// updateLink('card-demo', 'https://chat.openai.com/g/votre-gpt');
// updateLink('card-principes', 'https://jupyter.org/votre-notebook');
