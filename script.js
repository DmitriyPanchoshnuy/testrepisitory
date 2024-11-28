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
        </div>
        `
      )

    })

  },

  error: (error) => {
    console.log(error.statusText);
  }
})