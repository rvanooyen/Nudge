// var url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/" + currencyCode;

var clearCurrency = function() {
    var currencyContainerEl = document.getElementById("currency-container");
    currencyContainerEl.innerHTML = "";
}

var exchangeRate = function(baseCurrency, currencyCode) {
    var apiKey = "6d29c9cf5737b60b45473240";
    var url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/pair/" + baseCurrency + "/" + currencyCode;
    fetch(url)
        .then(function(response) {
            if (response.ok) {                
                return response.json();
            } else {
                alert("Error: " + response.statusText);
            }                       
        })
        .then(function(response) {
            clearCurrency();
            console.log(response);
            var amountCurrency = document.getElementById("currency-amount").value;
            console.log(amountCurrency);
            var amount = amountCurrency * response.conversion_rate;
            console.log(amount);

            // creates currency elements
            var pElConversionRate = document.createElement("p");
            var pElTotalAmt = document.createElement("P");
            // var todayForecastEl = document.createElement("div");
            // var cityEl = document.createElement("p");
            // var imgEl = document.createElement("img");
            // var tempEl = document.createElement("p");
            // var windEl = document.createElement("p");
            // var humidityEl = document.createElement("p");
            // var uvIndexEl = document.createElement("P");
            // var fiveDayEl = document.createElement("div");
            // var fiveDayTitleEl = document.createElement("h3");
            // var cardDivEl = document.createElement("div");                                

            // sets currency properties
            pElConversionRate.setAttribute("id", "conversion-rate");
            pElConversionRate.textContent = "one " + baseCurrency + " = " + response.conversion_rate + " " + currencyCode;
            pElTotalAmt.setAttribute("id", "total-amount");
            pElTotalAmt.textContent = "You have " + amount + currencyCode;
            // todayForecastEl.setAttribute("id", "today-forecast");
            // cityEl.setAttribute("id", "city-element");
            // cityEl.setAttribute("class", "city-element");
            // cityEl.textContent = city + "(" + moment().format("l") + ")";
            // imgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + ".png");                                                
            
            // // appends current currency to HTML
            $("#currency-container").append(pElConversionRate);
            $("#currency-container").append(pElTotalAmt);                       
        });
}

$("#currency-btn").on("click", function(event) {
    // Resets the form

    // Prevents default behaviour
    event.preventDefault();
    
    // get values from text fields
    var baseCurrency = document.getElementById("currency-base").value;    
    var currencyCode = document.getElementById("currency-convert").value;    
        
    exchangeRate(baseCurrency, currencyCode);   
});

