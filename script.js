const url = "https://my-json-server.typicode.com/DmitriyPanchoshnuy/testrepisitory"

$.ajax(url + "/products", {

  dataType: 'json',

  success: (result) => {
    console.log(result)
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
          <button class='buy'>
            Buy
          </button>
        </div>
        `
      )

    })

  },

  error: (error) => {
    console.log(error.statusText);
  }
})