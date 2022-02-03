for(let i = 1; i <= 50; i++) {                                          //nb of product

fetch(`https://makeup-api.herokuapp.com/api/v1/products/${i}.json`)     // incrementation 
.then(function(response) { return response.json(); })
.then(function(product){
    let price = product['price'];
    let name = product['name'];
    let image = product['image_link'];
    let body = document.getElementById('a');

    body.innerHTML += 
    `<div class="container"> 
    <span></span>
    <p>${name}</p>
    <img src=${image}>
    <p>prix : ${price}$</p>
    </div>`

})

}