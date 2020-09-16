// Se requiere el paquete de express
const express = require('express')
var usuariosRouter = require('./routes/usuarios');

// Se crea la variable u objeto de express
const app = express()


// Variables de la aplicacion
app.set('appName','Colegio Nacional Gral. Elizardo Aquino')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('static'))

// para poder usar json en la peticiones del cliente para que el servidor lo reconozca
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//Ruta nuestra historia

app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})

//Ruta Academico

app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | Academico"
    res.render('academico.ejs', {title: title} )
})

//Ruta Especialidades

app.get('/especialidades', (req, res) => {
    var title = app.get('appName')+" | Especialidades"
    res.render('especialidades.ejs', {title: title} )
})

//Ruta Actividades Destacadas

app.get('/actividadesdestacadas', (req, res) => {
    var title = app.get('appName')+" | Actividades Destacadas"
    res.render('actividadesdestacadas.ejs', {title: title} )
})


//Ruta contacto
app.get('/contacto', (req, res) => {
    var title = app.get('appName')+" | Contacto"
    res.render('contacto.ejs', {title: title} )
})
// admin
app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | Admin"
    res.render('admin.ejs', {title: title} )
})

// servidor (api)
app.use('/api/usuarios', usuariosRouter);

// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
