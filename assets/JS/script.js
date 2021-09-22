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

            // sets currency properties
            pElConversionRate.setAttribute("id", "conversion-rate");
            pElConversionRate.textContent = "one " + baseCurrency + " = " + response.conversion_rate + " " + currencyCode;
            pElTotalAmt.setAttribute("id", "total-amount");
            pElTotalAmt.textContent = "You have " + amount + currencyCode;     
            
            // appends current currency to HTML
            $("#currency-container").append(pElConversionRate);
            $("#currency-container").append(pElTotalAmt);                       
        });
};

var saveBucketList = function(country) {
    localStorage.setItem("country", country);
};

$("#currency-btn").on("click", function(event) {
    // Resets the form

    // Prevents default behaviour
    event.preventDefault();
    
    // get values from text fields
    var baseCurrency = document.getElementById("currency-base").value;    
    var currencyCode = document.getElementById("currency-convert").value;    
        
    exchangeRate(baseCurrency, currencyCode);   
});

var loadBucketList = function() {
    var savedLocales = localStorage.getItem("country");
    // if there are no tasks, set tasks to an empty array and return out of the function
    if (!savedTasks) {
      return false;
    }
    console.log("Saved tasks found!");
     
    // parse into array of objects
    savedLocales = JSON.parse(savedLocales);
  
    // loop through savedLocales array
    for (var i = 0; i < savedLocales.length; i++) {
        var countrylistEl = document.createElement("ul");
        var countryEl = document.createElement("li");
        countrylistEl.setAttribute("id", "countries-list");        
        countryEl.textContent = country;
        countrylistEl.append(countryEl);
    }
  };

