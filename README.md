# Carnet de Noël 2026

Un carnet de voyage statique, raconté à la première personne, sur une seule page HTML. Les six étapes suivent l’ordre du voyage :

1. Montréal → Paris, arrivée le 14 décembre au matin ;
2. pause à Paris, puis train de 16 h vers Nancy ;
3. quelques jours à Nancy du 15 au 17 décembre ;
4. randonnée prévue dans les Vosges le 17 ;
5. nuit possible chez Karim, près d’Épinal ;
6. journée à Metz le 18, compétition d’athlétisme de Jade et nuit sur place.

La page à ouvrir et à publier est `index.html`. Les anciens fichiers `voyage.html`, `nancy.html` et `metz.html` redirigent vers l’étape correspondante pour préserver les anciens liens.

La photo du lac des Corbeaux vue depuis la Roche du Lac est de [Cham](https://commons.wikimedia.org/wiki/File:Lac_des_Corbeaux_2.jpg), sous licence [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Elle a été prise en été et est conservée sans modification dans `assets/lac-des-corbeaux-roche-du-lac.jpg`. L’[office de tourisme de La Bresse](https://www.labresse.net/fiches/776000667-lac-des-corbeaux/) indique que la route du lac ferme en hiver et que le sentier vers le belvédère n’est pas praticable à cette saison ; l’accès doit être revérifié avant le voyage.

Le Café A est une idée de halte, sans réservation. Les horaires, lieux précis et hébergements restent à confirmer.

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

Tous les liens et assets utilisent des chemins relatifs, ce qui permet une publication dans un dépôt de projet (`nom-utilisateur.github.io/nom-du-depot/`).
