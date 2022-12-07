# Server_DEV Routes
 
 - Get Request für Produkt-Array
axios.get('http://127.0.0.1:8081/product/product')

- Get Request für Topseller-Produkte (Array)
axios.get('http://127.0.0.1:8081/product/topseller')

- Get Request für alle User
axios.get('http://127.0.0.1:8081/owner/getUser')

- Get Request für Items im Shoppingcart
axios.get('http://127.0.0.1:8081/bag/items')

- Get Request für Preis und Item-Summe
axios.get('http://127.0.0.1:8081/product/total')






- Post Request zum erstellen eines Users 
axios.post('http://127.0.0.1:8081/usercreate/createuser')

- Post Request zum erstellen eines neuen Artikels
axios.post('http://127.0.0.1:8081/product/product-create')

- Post Request zum hinzufügen eines artikels zum Warenkorb
axios.post('http://127.0.0.1:8081/bag/shoppingbag')