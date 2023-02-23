const router = require('express').Router();
const ProductController = require('../controllers/products')


/// VERBOS HTTP (4 TIPOS )

// GET    -  OBTER DADOS     
// POST   -  ENVIAR/RECEBER DADOS 
// PUT    -  ATUALIZAR DADOS 
// DELETE -  DELETAR DADOS 

router.get('/produtos/:id?', ProductController.get)
//router.post('/produtos', ProductController.post)
//router.put('/produtos/:id', ProductController.put)
//router.delete('/produtos/:id', ProductController.delete)




module.exports = router