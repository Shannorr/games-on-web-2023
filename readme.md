Premier dl : 
npm i

Lancer le jeu : 
npm run build
npm run start

Toujours faire un git pull avant de commecner une nouvelle feature !!!!!

Pour les branches : (ne pas push sur le master si possible)
-> Master
  	-> 0.0.1
      -> feature/nomDeVotreFeature

Pour créer votre feature : 
git checkout 0.0.1
git checkout -b feature/nomDeVotreFeature

Supprimer un branche en local : 
git branch -D nomDeLaBranche

Pour mettre à jour votre branch : 
git add nomFichier (faire avec l'outil git sur vscode)
git commit -m "message de votre feature"
git push