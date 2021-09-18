var apiKey = "6d29c9cf5737b60b45473240";
var url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/USD";

var exchangeRate = function() {
    fetch(url)
        .then(function(response) {
            if (response.ok) {                
                return response.json();
            } else {
                alert("Error: " + response.statusText);
            }                       
        })
        .then(function(response) {
            console.log(response);           
        });
}

exchangeRate();

