var express = require('express');
const mysql = require("mysql");
var router = express.Router();

router.post('/login', function(req, res, next) {
    console.log(req.body)
    usuario_usuario =  req.body.usuario_usuario;
    clave_usuario   = req.body.clave_usuario;
    console.log(usuario_usuario + " - " + clave_usuario)
    const conexion = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "colegio1"
      });
      new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM usuarios 
                        WHERE usuario_usuario = ? AND clave_usuario = ? `,
                        [usuario_usuario, clave_usuario],
            (err, resultados) => {
                conexion.end();
                console.log({resultados});
                if (err) {
                    return res.status(404).send({ error: 'Error en el servidor'});
                } else {
                    return res.status(200).send(resultados);
                }               
            });
    });

});

router.get('/', function(req, res, next) {
    const conexion = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database:"colegio1"
      });
      new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM usuarios`,
            (err, resultados) => {
                conexion.end();
                console.log({resultados});
                if (err) {
                    return res.status(404).send({ error: 'Error en el servidor'});
                } else {
                    return res.status(200).send(resultados);
                }               
            });
    });

});

router.post('/', function(req, res, next) {
    console.log(req.body)
    nombre_usuario =  req.body.nombre_usuario;
    usuario_usuario =  req.body.usuario_usuario;
    clave_usuario   = req.body.clave_usuario;
    console.log(nombre_usuario + " - " + usuario_usuario + " - " + clave_usuario)
    const conexion = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database:"colegio1"
      });
      new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO usuarios(nombre_usuario, usuario_usuario, clave_usuario)
                        VALUES(?, ?, ?)`,
                        [nombre_usuario, usuario_usuario, clave_usuario],
            (err, resultados) => {
                //conexion.commit();
                conexion.end();
                console.log({resultados});
                if (err) {
                    return res.status(404).send({ error: 'Error en el servidor'});
                } else {
                    return res.status(200).send(resultados);
                }               
            });
    });

});

module.exports = router;