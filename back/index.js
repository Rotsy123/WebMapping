const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir les fichiers statiques dans "public"
app.use(express.static('public'));

// Servir les fichiers GeoJSON
app.get('/geojson/:id', (req, res) => {
  const filePath = path.join(__dirname, 'data', `${req.params.id}.geojson`);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(404).send("Fichier non trouvé.");
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`🌍 Serveur démarré : http://localhost:${PORT}`);
});
