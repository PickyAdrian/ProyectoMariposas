const express = require("express")
const app = express();
const morgan = require('morgan')
const mysql = require('mysql')
const path = require('path')
const myconnection = require('express-myconnection')

//importando rutas
const mRoutes = require('./routes/rutas')

app.listen(5500, () =>{
    console.log("Pagina en server 5500");
})

app.use('/', mRoutes );
 
app.use(express.static(path.join(__dirname + '/public')));

console.log(__dirname)

app.use(morgan("dev"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json);

app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'Rockolas5+',
    port: 3306,
    database: 'proyecto'
}, 'single'))
