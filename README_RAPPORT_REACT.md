# Rapport TP React

Julien SIRE 13/03/2022

## Description de l'application

Mon application React est basée sur l'API publique Disney (https://disneyapi.dev). Elle permet de consulter les différents personnages Disney et possède une page proposant un personnage aléatoire.
J'aurai aimé proposé une fonction de recherche par nom mais l'API ne fournit les personnages que par 50 et il aurait fallu un traitement supplémentaire pour créer cette fonction. Par manque de temps et d'expérience en React j'ai dû limiter les fonctionnalités de l'application.

## Schéma de l'application

![schéma application](/schema_application.png)

La barre de titre et la Navbar sont toujours visibles et le react router permet d'afficher différentes pages javascript.
La page "Home" est fixe. Dans le cas d'un vrai site elle serait plus élaborée pour donner confiance au visiteur.
La page "Character Browser" appelle l'API disney pour afficher les personnages 50 par 50. Elle possède en bas de page des boutonspour changer de page. Un clique sur la "carte" d'un personnage renvoie vers le détail du personnage.
La page "Random Character" génère un id aléatoire et affiche la carte du personnage correspondant. Un bouton permet d'obtenir un nouveau personnage aléatoire.

## Détail Technique

L'application React a été créée grâce à la commande "npx create-react-app mon-app". Elle utilise les librairies react, react-dom (pour la gestion du domaine react)et react-router-dom (pour la gestion des liens au sein de l'application).
Pour la mise en forme je me suis servi d'une feuille de style css globale car l'application est assez restreinte mais j'aurais également pu utiliser des modules css.
J'ai créé 3 composants react: la navbar, le composant carte de personnage et un composant conteneur de cartes pour mettre en forme plusieurs cartes de personnages dans une page.
Pour le reste j'ai créé 3 pages (Home, Character Browser et Random Character) qui s'affiche sous la barre de titre et la navbar.
La logique à état de react m'a servi pour gérer les personnages que je voulais afficher dans le browser et dans la page "personnage aléatoire" et pour gérer le changement de page de personnages.
Enfin j'ai créé un service javascript pour regrouper dans un seul fichier mes différentes requêtes à l'API. Ce service contient 2 fonctions renvoyant soit une page de personnages (50) soit les infos d'un seul personnage

