const { post } = require("../app");

// Funciones con las queries que lanzamos contra la tabla posts
const selectAll = () => {
    return db.query(
        `select p.*, a.nombre, a.email, a.imagen 
        from posts p 
        inner join autores a on p.autor_id = a.id`);
}

const selectAllByAutor = (autor_id) => {
    return db.query(
        `select p.*, a.nombre, a.email, a.imagen 
        from posts p 
        inner join autores a on p.autor_id = a.id 
        where p.autor_id = ?`,
        [autor_id]);
}

const selectById = (post_id) => {
    return db.query(
        `select p.*, a.nombre, a.email, a.imagen 
        from posts p 
        inner join autores a on p.autor_id = a.id 
        where p.id = ?`, 
        [post_id])
}

const insert = ({ titulo, descripcion, fecha, categoria, autor_id }) => {
    return db.query(`
        insert into posts (titulo, descripcion, fecha, categoria, autor_id) 
        values (?, ?, ?, ?, ?)`, 
        [titulo, descripcion, fecha, categoria, autor_id]);
}

const updateById = (post_id, { titulo, descripcion, fecha, categoria, autor_id }) => {
    return db.query(
        `update posts 
        set titulo = ?, descripcion = ?, fecha = ?, categoria = ?, autor_id = ?
        where id = ?`,
        [titulo, descripcion, fecha, categoria, autor_id, post_id]
    );
}

const deleteById = (post_id) => {
    return db.query('delete from posts where id = ?', [post_id]);
}

module.exports = {
    selectAll, selectAllByAutor, selectById, insert, updateById, deleteById
}