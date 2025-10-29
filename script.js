// Configuration des liens
const LINKS = {
    video: 'https://m.youtube.com/watch?v=ag6JMz6sivs',
    demo: 'https://chatgpt.com/g/g-68de4b559fac8191a5d02c44d8a5e2c4-demonstrateur-gestacrises',
    principes: 'https://chatgpt.com/g/g-6900ea42ecd481918c904db9b1b15c74-formateur-gestacrises-c-principes-generaux',
    comprendre: 'https://chatgpt.com/g/g-68f74df88b1c8191859b07c37ba5f654-formateur-gestacrises-c-comprendre',
    choisir: 'https://chatgpt.com/g/g-6900a82e347081919b91195a2d48fe11-formateur-gestacrises-choisir',
    agir: 'https://chatgpt.com/g/g-6900b01a5ed08191ae8a00f0669bc03e-formateur-gestacrises-c-agir',
    pcsAvec: 'https://chatgpt.com/g/g-67cc3a13b45081918ac554dd3980c483-gestacrises-c-avec-pcs',
    pcsSans: 'https://chatgpt.com/g/g-6901dcd49ef88191b97eeaed5949cb35-gestacrises-c-sans-pcs'
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

    if (cardFormateur && submenu) {
        cardFormateur.addEventListener('click', function() {
            // Toggle du sous-menu
            submenu.classList.toggle('active');
            cardFormateur.classList.toggle('active');
        });
    }
}

// Configuration des liens des cartes
function initCardLinks() {
    // Carte Vidéo
    const cardVideo = document.getElementById('card-video');
    if (cardVideo) {
        if (LINKS.video) {
            cardVideo.href = LINKS.video;
            cardVideo.target = '_blank';
        } else {
            cardVideo.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Le lien YouTube sera ajouté prochainement.');
            });
        }
    }

    // Carte Démonstrateur
    const cardDemo = document.getElementById('card-demo');
    if (cardDemo) {
        if (LINKS.demo) {
            cardDemo.href = LINKS.demo;
            cardDemo.target = '_blank';
        } else {
            cardDemo.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Le lien vers le GPT sera ajouté prochainement.');
            });
        }
    }

    // Cartes du sous-menu Formateur
    setupSubmenuCard('card-principes', LINKS.principes, 'Principes généraux');
    setupSubmenuCard('card-comprendre', LINKS.comprendre, 'Comprendre');
    setupSubmenuCard('card-choisir', LINKS.choisir, 'Choisir');
    setupSubmenuCard('card-agir', LINKS.agir, 'Agir');

    // Carte PCS avec
    const cardPcsAvec = document.getElementById('card-pcs-avec');
    if (cardPcsAvec) {
        if (LINKS.pcsAvec) {
            cardPcsAvec.href = LINKS.pcsAvec;
            cardPcsAvec.target = '_blank';
        } else {
            cardPcsAvec.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Fonctionnalité "GestaCrises avec PCS" à venir.');
            });
        }
    }

    // Carte PCS sans
    const cardPcsSans = document.getElementById('card-pcs-sans');
    if (cardPcsSans) {
        if (LINKS.pcsSans) {
            cardPcsSans.href = LINKS.pcsSans;
            cardPcsSans.target = '_blank';
        } else {
            cardPcsSans.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Fonctionnalité "GestaCrises sans PCS" à venir.');
            });
        }
    }
}

// Fonction pour configurer les cartes du sous-menu
function setupSubmenuCard(cardId, link, title) {
    const card = document.getElementById(cardId);
    if (card) {
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
}
