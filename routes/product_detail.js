const express = require('express');
const router = express.Router(); 


router.get('/product-detail', async (req, res) => {
    res.send({
        // 'product_picture' : ###
        'product_id' : '1234',
        'product_name' : 'Testartikel',
        'product_price' : 299.99,
        'product_description' : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        'product_characteristics' : ['Something', 'which', 'will', 'be', 'really', 'great',] 
    })
    console.log('GET REQ - Element Details - Successful');
})

module.exports = router;