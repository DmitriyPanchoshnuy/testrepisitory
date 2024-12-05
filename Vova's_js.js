const url = "https://my-json-server.typicode.com/DmitriyPanchoshnuy/testrepisitory"

var basketlist = [];
var products;
function addProducts(data) {
    products = data
}

$.ajax(url + "/products", {
    dataType: 'json', 
    success: (result) => {
        addProducts(result);
        $.each(result, (index, element) => {
            $(".container").append(
                `<div class="divchik">
                <h2>${element.name}</h2>
                <img src="${element.photo_url}">
                <p>${element.description}</p>
                <h3>${element.price} грн</h3>
                <button onClick="addProductToBasket(${element.id})">BUY</button>
                </div>`
            )
        })       
    }, 
    error: (error) => {
        console.log(error.statusText)
    }
})

function addProductToBasket(id) {
    basketlist.push(
        products.find((product) => {
            return product.id == id;
        })
    )

    reDrawBasket();
}

function reDrawBasket() {
    
}