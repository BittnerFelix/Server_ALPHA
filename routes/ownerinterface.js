const express = require('express');
const router = express.Router(); 


// GET REQUEST - Ownerinterface General Shop Data
router.get('/get-shop-data', (req, res) => {
    res.send({
        'weeklyvisits' : 1025,
        'favproducts' : 579,
        'newcostumers' : 7,
        'soldproducts' : 3062,
        'weeklystorno' : 5, 
        'supportrequests' : 18,
    });
    console.log('GET REQ - OwnerInterface General Data - Successful');
})

// GET REQUEST - Ownerinterface Table Products
router.get('/get-table-products', (req, res) => {
    res.send({
        'product_name' : 'Testprodukt',
        'product_origin' : 'von BEISPIEL',
        'price' : 29.99,
        'sold_count' : 10,
    })
})

// GET REQUEST - Ownerinterface Table Costumers
router.get('/get-table-costumers', (req, res) => {
    res.send({
        'costumer_name' : 'Test Person',
        'costumer_mail' : 'test@email.de',
        'password' : 'einTestPasswort',
        'signin_date' : '10.01.2020',
        'costumer_order' : 3,
    })
})

// GET REQUEST - Ownerinterface Table Orders
router.get('/get-data-orders', (req, res) => {
    res.send({
        'order_id' : '2020/10/10-03',
        'order_amount' : 29.99,
        'product_count' : 1,
        'costumer_name' : 'Test Person',
        'status' : 'abgeschlossen', 
    })
})

module.exports = router;