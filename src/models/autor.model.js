// Funciones con las queries que lanzamos contra la tabla autores
const selectAll = () => {
    return db.query('select * from autores');
}

const selectById = (autor_id) => {
    return db.query('select * from autores  where id = ?', [autor_id]);
}

const insert = ({ nombre, email, imagen }) => {
    return db.query(`
        insert into autores (nombre, email, imagen) values 
        values (?, ?, ?)`, 
        [nombre, email, imagen]);
}

const updateById = (autor_id, { nombre, email, imagen }) => {
    return db.query(
        `update autores 
        set nombre = ?, email = ?, imagen = ?
        where id = ?`,
        [nombre, email, imagen, autor_id]
    );
}

module.exports = {
    selectAll, selectById, insert, updateById
}