# Carnet de Noël 2026

Un portfolio de voyage statique racontant le trajet Montréal → Paris → Nancy, avec une arrivée à Paris le 14 décembre 2026 au matin et un train à 16 h. Le projet utilise uniquement HTML et CSS. Aucun outil de compilation ni compte n'est nécessaire pour le consulter.

## Pages

- `index.html` : couverture et résumé du trajet.
- `voyage.html` : premier chapitre, avec le vol, une pause à Paris et le train de 16 h vers Nancy.

Les textes et les illustrations sont conçus pour être complétés au fil du voyage. Le Café A est une suggestion de halte, sans réservation associée. La gare Paris-Est est celle indiquée pour le trajet Paris–Nancy par [SNCF Connect](https://www.sncf-connect.com/train/trajet/paris/nancy). Les informations sur le [Café A](https://www.cafea.fr/) doivent être revérifiées avant le départ.

## Voir le site en local

Ouvrir `index.html` dans un navigateur. Pour un aperçu avec serveur local :

```bash
python3 -m http.server 8000
```

Puis visiter `http://localhost:8000`.

## Publier sur GitHub Pages

1. Créer un dépôt GitHub et y envoyer les fichiers de ce dossier à la racine.
2. Dans **Settings → Pages**, choisir **Deploy from a branch**.
3. Sélectionner la branche principale et le dossier **/(root)**, puis enregistrer.

Tous les liens entre fichiers sont relatifs, ce qui permet une publication dans un dépôt de projet (`nom-utilisateur.github.io/nom-du-depot/`). Voir aussi la [documentation officielle GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
