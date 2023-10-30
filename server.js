const express = require('express');
const path = require('path');
const app = express();

// Configuración de rutas estáticas para los archivos de tu aplicación React (build)
app.use(express.static(path.join(__dirname, 'build')));

// Redirige todas las demás solicitudes a tu aplicación de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
