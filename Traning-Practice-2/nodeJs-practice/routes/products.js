var express = require('express');
var router = express.Router();

/* GET users listing. */
var productController=require("../controllers/products");
router.get('/',productController.getProducts );
router.get('/:id',productController.getProduct );
router.post('/',productController.createProduct );
router.put('/:id',productController.updateProduct );
router.delete('/:id',productController.deleteProduct );

// router.get('/dummy', function(req, res, next) {
//     res.send('iam a product dummy');
//   });

module.exports = router;
