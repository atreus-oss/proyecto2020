// Se requiere el paquete de express
var express = require('express');
var app = express();


//Variables de aplicación
app.set('appName','COLEGIO NACIONAL GRAL JOSE ELIZARDO AQUINO');
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');

// Configurara la carpeta de static
app.use(express.static('public'));


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName');
    res.render('index.ejs', {title: title} );
});

//nuevas rutas
app.get('/noticias', (req, res) => {
    var title = app.get('appName')+" | Noticias";
    res.render('noticias.ejs', {title: title} );
});


// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//Ruta a Nuestra Historia
app.get('/historia', (req, res) => {
    var title = app.get('appName')+" |Nuestra Historia";
    res.render('historia.ejs', {title: title} );
});

//Ruta Academico
app.get('/academico', (req, res) => {
    var title = app.get('appName')+" |Academico";
    res.render('academico.ejs', {title: title} );
});

//Ruta Especialidades
app.get('/especialidades', (req, res) => {
    var title = app.get('appName')+" |Espeicalidades";
    res.render('especailidades.ejs', {title: title} );
});

//Ruta Actividades Destacadas
app.get('/actividadesdestacadas', (req, res) => {
    var title = app.get('appName')+" |Actividades destacadas";
    res.render('actividadesdestacadas.ejs', {title: title} );
});

//Ruta Contactos
app.get('/contactos', (req, res) => {
    var title = app.get('appName')+" |Contactos";
    res.render('contactos.ejs', {title: title} );
});