const Autor = require('../models/autor.model');

const getAll = async (req, res, next) => {
    try {
        const [result] = await Autor.selectAll();
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const getAutorById = async (req, res, next) => {
    try {
        const [result] = await Autor.selectById(req.params.autor_id);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Autor no encontrado' });
        }
        res.json(result[0]);
    } catch (err) {
        next(err);
    }
}

const createAutor = async (req, res, next) => {
    try {
        const [result] = await Autor.insert(req.body);
        // Como respuesta devolvemos el nuevo autor creado
        const [[paciente]] = await Paciente.selectById(result.insertId);
        res.json(paciente);
    } catch (err) {
        next(err);
    }
}

const updateAutor = async (req, res, next) => {
    // req.body: { nombre, email, imagen }
    // req.params: { autor_id }
    try {
        const { autor_id } = req.params;

        const [result] = await Autor.updateById(autor_id, req.body);
        if (result.changedRows === 1) {
            const [[autor]] = await Autor.selectById(autor_id);
            res.json(autor);
        } else {
            res.status(400).json({ error: 'Se ha producido un error al actualizar el autor' });
        }
    } catch (err) {
        next(err);
    }
}


module.exports = {
    getAll, getAutorById, createAutor, updateAutor
}