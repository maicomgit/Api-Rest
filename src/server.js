const express = require('express');
const app = express();
const db = require('./database/db');
const routes = require('./routes/routes');
const cors = require('cors')

//const path = require('path');

db.connect()

//habilita cors


const allowedOrigins = [
     'http://127.0.0.2:5500',
     'http://127.0.0.2:5556'
     ]

     app.use(cors({
     origin: function(origin, callback) {
     let allowed = true;

     if (!origin) allowed = true;
     if (!allowedOrigins.includes(origin)) allowed = false;

     callback(null, allowed)
     }
}))


//app.set('views', path.join(__dirname,'views'));

//app.use(express.static(path.join(__dirname,'public')));

// HABILITA PRA RECEBER OS DADOS VIA POST

//app.use(express.urlencoded({extended:true}));


// HABILITA PRA RECEBER OS DADOS VIA json
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8000
app.listen(port, console.log("Listem in port " + port));


