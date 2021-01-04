const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre_producto: {
        type: String,
        required: true,
        trim: true
    },
    descripcion_producto: {
        type: String,
        required: true,
        trim: true
    },
    descripcion_producto_detalle: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    marca: {
        type: String,
        required: true,
        trim: true
    },
    codigo: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    },
    colores: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);