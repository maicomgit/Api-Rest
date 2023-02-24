const express = require('express');
const app = express();
const db = require('./database/db');
const routes = require('./routes/routes');


//const path = require('path');

db.connect()

//app.set('views', path.join(__dirname,'views'));

//app.use(express.static(path.join(__dirname,'public')));

// HABILITA PRA RECEBER OS DADOS VIA POST

//app.use(express.urlencoded({extended:true}));


// HABILITA PRA RECEBER OS DADOS VIA json
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8000
app.listen(port, console.log("Listem in port " + port));


