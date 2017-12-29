var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var product = require('./product');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

app.post('/', function(request, response){
  console.log(request.body.json);      // your JSON
  response.send(request.body.json);    // echo the result back
});


mongoose.connect('mongodb://imhikarucat:12345abcde@ds157444.mlab.com:57444/a2-webpro-s3-2017');

// Middle Route 

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});

//SERVER SIDE ROUTING
app.use('/', router);

//PRODUCTS CRUD
//Create
router.route('/products').post(function (req, res) {
    console.log("in add");
    var p = new product();
    p.id = req.body.id;
    p.name = req.body.name;
    p.price = req.body.price;
    p.description = req.body.description;
    p.brand = req.body.brand;
    p.producer = req.body.producer;
    p.inventory = req.body.inventory;
    p.imageurl = req.body.imageurl;
    
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Product Created !' })
    })
});

//Read - Get all
router.route('/products').get(function (req, res) {
    product.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });
});

//Read - Get by ID
router.route('/products/:product_id').get(function (req, res) {


    product.findById(req.params.product_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/products/:product_id').put(function (req, res) {

    product.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.name = req.body.name;
        prod.price = req.body.price;
        prod.description = req.body.description;
        prod.brand = req.body.brand;
        prod.producer = req.body.producer;
        prod.inventory = req.body.inventory;
        prod.imageurl = req.body.imageurl;
        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product updated!' });
        });

    });
});

//Delete
router.route('/products/:product_id').delete(function (req, res) {

    product.remove({ _id: req.param.product_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//END OF PRODUCTS

//CATEGORIES CRUD
//Create
router.route('/categories').post(function (req, res) {
    console.log("in add");
    var p = new category();
    p.id = req.body.id;
    p.name = req.body.name;
    
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Category Created !' })
    })
});

//Read - Get all
router.route('/categories').get(function (req, res) {
    product.find(function (err, categories) {
        if (err) {
            res.send(err);
        }
        res.send(categories);
    });
});

//Read - Get by ID
router.route('/categories/:category_id').get(function (req, res) {


    product.findById(req.params.category_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/categories/:category_id').put(function (req, res) {

    product.findById(req.params.category_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.name = req.body.name;
        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Category updated!' });
        });

    });
});

//Delete
router.route('/categories/:category_id').delete(function (req, res) {

    product.remove({ _id: req.param.category_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//End of CATEGORIES


//SHOPPINGCARTS CRUD
//Create
router.route('/shoppingcarts').post(function (req, res) {
    console.log("in add");
    var p = new shoppingcarts();
    p.id = req.body.id;
    p.name = req.body.name;
    
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Shoppingcart Created !' })
    })
});

//Read - Get all
router.route('/shoppingcarts').get(function (req, res) {
    product.find(function (err, shoppingcarts) {
        if (err) {
            res.send(err);
        }
        res.send(shoppingcarts);
    });
});

//Read - Get by ID
router.route('/shoppingcarts/:shoppingcart_id').get(function (req, res) {


    product.findById(req.params.shoppingcarts_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/shoppingcarts/:shoppincart_id').put(function (req, res) {

    product.findById(req.params.shoppingcart_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.name = req.body.name;
        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Shoppingcart updated!' });
        });

    });
});

//Delete
router.route('/shoppingcarts/:shoppingcart_id').delete(function (req, res) {

    product.remove({ _id: req.param.shoppingcart_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//End of SHOPPINGCARTS


//ORDERS CRUD
//Create
router.route('/orders').post(function (req, res) {
    console.log("in add");
    var p = new order();
    p.id = req.body.id;
    p.name = req.body.name;
    
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Order Created !' })
    })
});

//Read - Get all
router.route('/orders').get(function (req, res) {
    product.find(function (err, orders) {
        if (err) {
            res.send(err);
        }
        res.send(orders);
    });
});

//Read - Get by ID
router.route('/orders/:order_id').get(function (req, res) {


    product.findById(req.params.order_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/orders/:order_id').put(function (req, res) {

    product.findById(req.params.order_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.name = req.body.name;
        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Order updated!' });
        });

    });
});

//Delete
router.route('/orders/:order_id').delete(function (req, res) {

    product.remove({ _id: req.param.order_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//End of ORDERS

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);
