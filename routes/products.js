const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    // Must return all products in a json file
    res.send({
        'art1' : 'Artikel 1',
        'art2' : 'Artikel 2',
        'art3' : 'Artikel 3',
        'art4' : 'Artikel 4',
        'art5' : 'Artikel 5',
        'art6' : 'Artikel 6',
        'art7' : 'Artikel 7',
        'art8' : 'Artikel 8',
        'art9' : 'Artikel 9',
        'art10' : 'Artikel 10',
        'art11' : 'Artikel 11',
        'art12' : 'Artikel 12',
        'art13' : 'Artikel 13',

        'id1' : 'test1',
        'id2' : 'test2',
        'id3' : 'test3',
        'id4' : 'test4',
        'id5' : 'test5',
        'id6' : 'test6',
        'id7' : 'test7',
        'id8' : 'test8',
        'id9' : 'test9',
        'id10' : 'test10',
        'id11' : 'test11',
        'id12' : 'test12',
        'id13' : 'test13',
    });
    console.log('GET REQ - All Products - Successful');
})

module.exports = router;