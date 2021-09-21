// // var url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/" + currencyCode;

// var clearCurrency = function() {
//     var currencyContainerEl = document.getElementById("currency-container");
//     currencyContainerEl.innerHTML = "";
// }

// var exchangeRate = function(baseCurrency, currencyCode) {
//     var apiKey = "6d29c9cf5737b60b45473240";
//     var url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/pair/" + baseCurrency + "/" + currencyCode;
//     fetch(url)
//         .then(function(response) {
//             if (response.ok) {                
//                 return response.json();
//             } else {
//                 alert("Error: " + response.statusText);
//             }                       
//         })
//         .then(function(response) {
//             clearCurrency();
//             console.log(response);
//             var amountCurrency = document.getElementById("currency-amount").value;
//             console.log(amountCurrency);
//             var amount = amountCurrency * response.conversion_rate;
//             console.log(amount);

//             // creates currency elements
//             var pElConversionRate = document.createElement("p");
//             var pElTotalAmt = document.createElement("P");
//             // var todayForecastEl = document.createElement("div");
//             // var cityEl = document.createElement("p");
//             // var imgEl = document.createElement("img");
//             // var tempEl = document.createElement("p");
//             // var windEl = document.createElement("p");
//             // var humidityEl = document.createElement("p");
//             // var uvIndexEl = document.createElement("P");
//             // var fiveDayEl = document.createElement("div");
//             // var fiveDayTitleEl = document.createElement("h3");
//             // var cardDivEl = document.createElement("div");                                

//             // sets currency properties
//             pElConversionRate.setAttribute("id", "conversion-rate");
//             pElConversionRate.textContent = "one " + baseCurrency + " = " + response.conversion_rate + " " + currencyCode;
//             pElTotalAmt.setAttribute("id", "total-amount");
//             pElTotalAmt.textContent = "You have " + amount + currencyCode;
//             // todayForecastEl.setAttribute("id", "today-forecast");
//             // cityEl.setAttribute("id", "city-element");
//             // cityEl.setAttribute("class", "city-element");
//             // cityEl.textContent = city + "(" + moment().format("l") + ")";
//             // imgEl.setAttribute("src", "http://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + ".png");                                                
            
//             // // appends current currency to HTML
//             $("#currency-container").append(pElConversionRate);
//             $("#currency-container").append(pElTotalAmt);                       
//         });
// }

// $("#currency-btn").on("click", function(event) {
//     // Resets the form

//     // Prevents default behaviour
//     event.preventDefault();
    
//     // get values from text fields
//     var baseCurrency = document.getElementById("currency-base").value;    
//     var currencyCode = document.getElementById("currency-convert").value;    
        
//     exchangeRate(baseCurrency, currencyCode);   
// });


//************************************************************

// var response = fetch("https://api.teleport.org/api/cities/?search=Austin");
// console.log(response);



// var getTeleportCity = function (){
//     fetch("https://api.teleport.org/api/cities/?search=Austin").then(function(response){
//         response.json().then(function(data){
//             console.log(data);
//         })
       
//     });

// };

// getTeleportCity();




var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city-name");

var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");

// var fidgetContainerEl = document.querySelector("#fidget-container");


var formSubmitHandler = function(event) {

    // prevent page from refreshing
    event.preventDefault();

    // get value from input element

    var city = nameInputEl.value.trim();

    if (city) {
        getTeleportCity(city);
        nameInputEl.value = "";
    } else {
        alert ("Invalid City Name. Please try it again.")
    }
    console.log(event);
};

var getTeleportCity = function (city){

    //original city list

    var apiURL = "https://api.teleport.org/api/cities/?search=" + city +"&embed=/city:country";

    // this will give the country list
    // var apiURL = "https://api.teleport.org/api/countries/?search=" + city ;


    fetch(apiURL)
    .then(function(response){
        if (response.ok) {
            return response.json();

        }else {
            alert("Error: " + response.statusText);
        }
    })

    .then(function(data){
        displayCityInfo(data,city);
    });
};



var displayCityInfo = function(city, searchTerm){
    console.log(city);
    console.log(searchTerm);

    // clear old content
    cityContainerEl.textContent = "";
    citySearchTerm.textContent = searchTerm;



    var cityName = "";
    

    //create a container 

    var cityEl = document.createElement("div");
    cityEl.classList="";

    // create a span element to hold city title
    var cityTitleEl = document.createElement("span");
    cityTitleEl.textContent = cityName

     // append to container
     cityEl.appendChild(cityTitleEl);

     // append container to the dom
 
     cityContainerEl.appendChild(cityEl);








};

// event listeners will go here 

cityFormEl.addEventListener("submit", formSubmitHandler);
