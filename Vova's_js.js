const url = "https://my-json-server.typicode.com/DmitriyPanchoshnuy/testrepisitory"


$.ajax(url + "/products", {
    dataType: 'json', 
    success: (result) => {
        $.each(result, (index, element) => {
            $(".container").append(
                `<div class="divchik">
                <h2>${element.name}</h2>
                <img src="${element.photo_url}">
                <p>${element.description}</p>
                <h3>${element.price} грн</h3>
                <button>BUY</button>
                </div>`
            )
        })       
    }, 
    error: (error) => {
        console.log(error.statusText)
    }
})