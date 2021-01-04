const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Crear un producto
router.get('/', productoController.obtenerProductos);

// Obtener los productos
router.post('/', productoController.crearProducto);

// Actualizar un producto
router.put('/:id', productoController.actualizarProducto);

// Eliminar un producto
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;