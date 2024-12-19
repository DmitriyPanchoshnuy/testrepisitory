var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://marketplace-0cab.restdb.io/rest/products",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "675b1a8be1db920a18971b08",
    "cache-control": "no-cache"
  }
}

var basketlist = []

var products;
function addProducts(data) {
  products = data;
}

$.ajax(settings).done((result) => {  
    addProducts(result)
    console.log(products)
    $.each(result, (index, element) => {
      $(".container").append(`
        <div class="product">
          <img src="${element.photo_url}">
          <div class="detail">
            ${element.name}
          </div>
          <div class="price">
            Price: ${element.price}
          </div>
          <button class='buy' onclick="addProductToBasket('${element._id}')">
            Buy
          </button>
        </div>
        `
      )
    })
  })

function addProductToBasket(id) {
  basketlist.push(
    products.find((product) => {
      return product._id == id;
    })
  )

  reDrawBasket()
}

function reDrawBasket() {
  $('.list').html('')
  let totalprice = 0;
  $.each(basketlist, (index, element) => {
    $(".list").append(`
      <p> ${element.name} | ${element.price} </p>
    `)
    totalprice += element.price;
  })

  $('.list').append(`
    <h2>До сплати: ${totalprice}</h2>
  `)
}