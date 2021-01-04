const express = require('express');
const conectar = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

// conectar a la base de datos
conectar();

// habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }))

// Puerto de la app
const port = process.env.port || 4000;

//Importar las rutas
app.use('/api/productos', require('./routes/productos'));

//Definir la página principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.listen(port, '0.0.0.0/0', () => {
    console.log(`El servidor esta funcionando el puerto ${port}`);
});