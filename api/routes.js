const express = require('express');
const router = express.Router();

const UserController = require('./controllers/userController')
// const ProductController = require('./controllers/productController')
// const SaleController = require('./controllers/saleController')
// const OrderController = require('./controllers/orderController')
// const MovimentationController = require('./controllers/movimentationController')

// user
router.post('/login', UserController.authUser);

// product
// client
// router.get('/clients', ClientsController.getClientsList);
// router.get('/clients/:id', ClientsController.getClientById);
// router.post('/clients', ClientsController.newCleint);
// router.put('/clients', ClientsController.updateClient);
// router.delete('/clients', ClientsController.deleteClient);

module.exports = router;