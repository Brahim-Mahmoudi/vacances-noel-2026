# Carnet de Noël

Une page personnelle pour imaginer et préparer les prochaines vacances de Noël. Le site est en HTML, CSS et JavaScript, sans dépendances ni compilation.

## Ouvrir la page

Ouvrir `index.html` dans un navigateur. Pour un aperçu avec serveur local :

```bash
python3 -m http.server 8000
```

Puis visiter `http://localhost:8000`.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub et y envoyer les fichiers de ce dossier à la racine.
2. Dans **Settings → Pages**, choisir **Deploy from a branch**.
3. Sélectionner la branche principale et le dossier **/(root)**, puis enregistrer.

La page utilise uniquement des chemins relatifs et fonctionne aussi dans un dépôt de projet (`nom-utilisateur.github.io/nom-du-depot/`). Les notes et la liste sont enregistrées dans le navigateur de chaque visiteur via `localStorage` : elles ne sont pas synchronisées entre appareils et ne sont pas visibles par les autres visiteurs.

## Personnaliser

- Textes, sections et idées de voyage : `index.html`
- Couleurs et mise en page : `styles.css`
- Liste initiale et comportement de sauvegarde : `app.js`
