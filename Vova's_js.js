var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://supermarket-ab29.restdb.io/rest/products",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "675b1a9ae1db92568d971b0c",
      "cache-control": "no-cache"
    }
  }

var basketlist = [];
var products;
function addProducts(data) {
    products = data
}

$.ajax(settings).done((result) => {
    addProducts(result);
        $.each(result, (index, element) => {
            $(".container").append(
                `<div class="divchik">
                <h2>${element.name}</h2>
                <img src="${element.photo_url}">
                <p>${element.description}</p>
                <h3>${element.price} грн</h3>
                <button onClick="addProductToBasket('${element._id}')">BUY</button>
                </div>`
            )
        }) 
})

function addProductToBasket(id) {
    basketlist.push(
        products.find((product) => {
            return product._id == id;
        })
    )

    reDrawBasket();
}

function reDrawBasket() {
    $('.list').html('');
    let totalprice = 0;
    $.each(basketlist, (index, element) => {
        $(".list").append(`
            <p>${element.name} | ${element.price} </p>    
        `)
        totalprice += element.price;
    })

    $('.list').append(`
     <h2>До сплати: ${totalprice}</h2>
    `)
}