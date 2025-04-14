const messageElement = document.getElementById('message');
fetch('http://localhost:5000/api/message').then(res => res.json()).then(data => {
    messageElement.innerText = data.message
})

const productElement = document.getElementById('productList');
fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(product=> {
            const li = document.createElement('li');
            li.textContent = `${product.id} : ${product.name}`;
            productElement.appendChild(li)
    } )
})
//html e id diye find kore ana hoche
// fetch kora hoche backend k   oi api diye ja backend e likha hoise app.get......
// ei fetch korle ta json akare response diche
// ei json data k set kora hoche frontend e 