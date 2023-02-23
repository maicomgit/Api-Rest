const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

function connect(){
     mongoose.connect('mongodb://localhost:27017/api-restful', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
     })    
     const db = mongoose.connection
     
     db.once('open',()=>{
          console.log('connect a database');
     })
     db.on('connected', () => {
          console.log('Conexão com o MongoDB estabelecida com sucesso!');
     });
     mongoose.set('strictQuery', false);

}

module.exports = {
     connect    
}
