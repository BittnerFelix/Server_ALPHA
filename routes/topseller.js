const express = require('express');
const router = express.Router();

router.get('/topseller-products', async (req, res) => {
    // sortTopseller();
    res.send({
        'topseller_id_one' : sortTopseller()[0], 
        'topseller_id_two' : sortTopseller()[1],
        'topseller_id_three' : sortTopseller()[2], 
        'topseller_id_four' : sortTopseller()[3], 
        'topseller_id_five' : sortTopseller()[4], 
    })
    console.log('GET REQ - Topseller - Successful')
})

module.exports = router;

function sortTopseller() {
    /* get all products from database and
    *  return the products woth bool topseller 
    *  true
    */
    let topseller = ['id_topseller_one', 'id_topseller_two', 'id_topseller_three', 'id_topseller_four', 'id_topseller_five']
   
    // database get count of all products : i.e. 13
    // for (let i=0; i<13; i++) {
    //     if (product[i].topseller_boolean) {
    //         topseller.pop(product[i])
    //     } 
    // }
    
    

    return topseller;
};