const url = "https://my-json-server.typicode.com/DmitriyPanchoshnuy/testrepisitory"


$.ajax(url + "/products", {
    dataType: 'json', 
    success: (result) => {
        $.each(result, (index, element) => {
            $(".container").html(
                `${element.name}`
            )
        })       
    }, 
    error: (error) => {
        console.log(error.statusText)
    }
})