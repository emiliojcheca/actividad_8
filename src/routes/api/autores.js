const router = require('express').Router();

const { getAll, getAutorById, createAutor, updateAutor } = require('../../controllers/autores.controller');

router.get('/', getAll);
router.get('/:autor_id', getAutorById);
router.post('/', createAutor);
router.put('/:autor_id', updateAutor);


module.exports = router;