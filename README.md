# Portfolio Akakanu

Site portfolio personnel d'Akakanu Leukeu Mboombhi (analyste-programmeur), importé et implémenté depuis le projet Claude Design [`GitHub, LinkedIn et repos`](https://claude.ai/design/p/d107dd88-a370-4159-9019-8af94e7b47ef?file=Portfolio+Akakanu.dc.html) (fichier `Portfolio Akakanu.dc.html`).

Le format source `.dc.html` est propriétaire à l'outil Claude Design (templating `{{ }}`, `sc-for`, `sc-if`, runtime `support.js`). Ce dossier contient la version convertie en HTML/CSS/JS standard, sans dépendance à ce runtime, prête à être déployée sur n'importe quel hébergeur statique.

## Structure

- `index.html` — structure de la page, contenu bilingue FR/EN (`data-fr` / `data-en`)
- `styles.css` — système de design "Organic" (tokens, composants boutons/cartes/tags)
- `script.js` — bascule de langue et animation de révélation au scroll
- `assets/Akakanu_CV.pdf` — CV téléchargeable depuis le bouton du hero

## Aperçu local

Ouvrir `index.html` directement dans un navigateur, ou servir le dossier avec un serveur statique local, par exemple :

```
python -m http.server 8000
```

## À faire avant mise en ligne

- Remplacer les liens "Code" des projets (actuellement vers le profil GitHub) par les repos dédiés une fois publiés
- Vérifier/mettre à jour le CV en `assets/` si une version plus récente existe
