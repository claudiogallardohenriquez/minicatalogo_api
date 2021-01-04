const Producto = require('../models/Producto');


exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json({ productos });
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocurrio un error al obtener los productos');
    }
};

exports.crearProducto = async (req, res) => {
    console.log( req.body );
    const {} = req.body;

    try {
        let producto;

        //guardar el nuevo producto
        producto = new Producto(req.body);

        //guardar producto
        await producto.save();

        res.status(200).json(producto);


    } catch (error) {
        console.error(error);
        res.status(500).send('Ocurrio un error al crear el producto');
    }
};

//Actualiza un producto
exports.actualizarProducto = async (req, res) => {
    try {
        //Extraer el proyecto y comprobar si existe
        const { 
            nombre_producto, 
            descripcion_producto, 
            descripcion_producto_detalle, 
            imagen, 
            precio, 
            marca, 
            codigo, 
            stock } = req.body;

        //Revisar si la tarea existe o no
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ mgs: `No existe el producto ${req.params.id}` });
        }

        //Crear un objeto con la nueva informacion
        const nuevaProducto = {};
        nuevaProducto.nombre_producto = nombre_producto;
        nuevaProducto.descripcion_producto = descripcion_producto;
        nuevaProducto.descripcion_producto_detalle = descripcion_producto_detalle;
        nuevaProducto.imagen = imagen;
        nuevaProducto.precio = precio;
        nuevaProducto.marca = marca;
        nuevaProducto.codigo = codigo;
        nuevaProducto.stock = stock;

        //Guardar el producto
        producto = await Producto.findOneAndUpdate(
            { _id: req.params.id },
            nuevaProducto,
            { new: true }
        );

        res.json({ producto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
};

// elimina un producto por su id
exports.eliminarProducto = async (req, res) => {
    try {
        //Revisar el id
        let producto = await Producto.findById(req.params.id);

        //Revisar si existe el proyecto o no
        if (!producto) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }

        await Producto.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Proyecto eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Error en el servidor' });
    }
};