const express = require('express');
const app = express();
//const db = require('./database');
const routes = require('./routes/routes');
//const path = require('path');



//app.set('views', path.join(__dirname,'views'));

//app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


//app.get('/api',routes)

app.use('/api', routes)

const port = process.env.PORT || 8000
app.listen(port, console.log("Listem in port " + port));