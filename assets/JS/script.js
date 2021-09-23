// var url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/latest/" + currencyCode;

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

    // var apiURL = "https://api.teleport.org/api/cities/?search=" + city +"&embed=/city:country";
    // var apiURL = "https://api.teleport.org/api/cities/?search=" + city +"_embedded_" +city + ":country";

    // this will give the country list
    // var apiURL = "https://api.teleport.org/api/countries/?search=" + city ;



    // this will give the currency code with console.log on line 150

    var apiURL = "https://api.teleport.org/api/countries/iso_alpha2:" + city + "/";

    


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
        console.log(data.currency_code);
        console.log(data.name);
    });
};
 var currencyCode = data.currency_code;
 var countryName = data.name;
 


var displayCityInfo = function(city, searchTerm){
    console.log(city);
    console.log(searchTerm);

    // clear old content
    cityContainerEl.textContent = "";
    citySearchTerm.textContent= searchTerm;



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

// All countries
// length 252
var countries = [
    {"name":"Afghanistan","currency":"AFN"},
    {"name":"Aland Islands","currency":"EUR"},
    {"name":"Albania","currency":"ALL"},
    {"name":"Algeria","currency":"DZD"},
    {"name":"American Samoa","currency":"USD"},
    {"name":"Andorra","currency":"EUR"},
    {"name":"Angola","currency":"AOA"},
    {"name":"Anguilla","currency":"XCD"},
    {"name":"Antarctica","currency":"AAD"},
    {"name":"Antigua and Barbuda","currency":"XCD"},
    {"name":"Argentina","currency":"ARS"},
    {"name":"Armenia","currency":"AMD"},
    {"name":"Aruba","currency":"AWG"},
    {"name":"Australia","currency":"AUD"},
    {"name":"Austria","currency":"EUR"},
    {"name":"Azerbaijan","currency":"AZN"},
    {"name":"Bahamas","currency":"BSD"},
    {"name":"Bahrain","currency":"BHD"},
    {"name":"Bangladesh","currency":"BDT"},
    {"name":"Barbados","currency":"BBD"},
    {"name":"Belarus","currency":"BYN"},
    {"name":"Belgium","currency":"EUR"},
    {"name":"Belize","currency":"BZD"},
    {"name":"Benin","currency":"XOF"},
    {"name":"Bermuda","currency":"BMD"},
    {"name":"Bhutan","currency":"BTN"},
    {"name":"Bolivia","currency":"BOB"},
    {"name":"Bonaire, Sint Eustatius and Saba","currency":"USD"},
    {"name":"Bosnia and Herzegovina","currency":"BAM"},
    {"name":"Botswana","currency":"BWP"},
    {"name":"Bouvet Island","currency":"NOK"},
    {"name":"Brazil","currency":"BRL"},
    {"name":"British Indian Ocean Territory","currency":"USD"},
    {"name":"Brunei Darussalam","currency":"BND"},
    {"name":"Bulgaria","currency":"BGN"},
    {"name":"Burkina Faso","currency":"XOF"},
    {"name":"Burundi","currency":"BIF"},
    {"name":"Cambodia","currency":"KHR"},
    {"name":"Cameroon","currency":"XAF"},
    {"name":"Canada","currency":"CAD"},
    {"name":"Cape Verde","currency":"CVE"},
    {"name":"Cayman Islands","currency":"KYD"},
    {"name":"Central African Republic","currency":"XAF"},
    {"name":"Chad","currency":"XAF"},
    {"name":"Chile","currency":"CLP"},
    {"name":"China","currency":"CNY"},
    {"name":"Christmas Island","currency":"AUD"},
    {"name":"Cocos (Keeling) Islands","currency":"AUD"},
    {"name":"Colombia","currency":"COP"},
    {"name":"Comoros","currency":"KMF"},
    {"name":"Congo","currency":"XAF"},
    {"name":"Congo, Democratic Republic of the Congo","currency":"CDF"},
    {"name":"Cook Islands","currency":"NZD"},
    {"name":"Costa Rica","currency":"CRC"},
    {"name":"Cote D'Ivoire","currency":"XOF"},
    {"name":"Croatia","currency":"HRK"},
    {"name":"Cuba","currency":"CUP"},
    {"name":"Curacao","currency":"ANG"},
    {"name":"Cyprus","currency":"EUR"},
    {"name":"Czech Republic","currency":"CZK"},
    {"name":"Denmark","currency":"DKK"},
    {"name":"Djibouti","currency":"DJF"},
    {"name":"Dominica","currency":"XCD"},
    {"name":"Dominican Republic","currency":"DOP"},
    {"name":"Ecuador","currency":"USD"},
    {"name":"Egypt","currency":"EGP"},
    {"name":"El Salvador","currency":"USD"},
    {"name":"Equatorial Guinea","currency":"XAF"},
    {"name":"Eritrea","currency":"ERN"},
    {"name":"Estonia","currency":"EUR"},
    {"name":"Ethiopia","currency":"ETB"},
    {"name":"Falkland Islands (Malvinas)","currency":"FKP"},
    {"name":"Faroe Islands","currency":"DKK"},
    {"name":"Fiji","currency":"FJD"},
    {"name":"Finland","currency":"EUR"},
    {"name":"France","currency":"EUR"},
    {"name":"French Guiana","currency":"EUR"},
    {"name":"French Polynesia","currency":"XPF"},
    {"name":"French Southern Territories","currency":"EUR"},
    {"name":"Gabon","currency":"XAF"},
    {"name":"Gambia","currency":"GMD"},
    {"name":"Georgia","currency":"GEL"},
    {"name":"Germany","currency":"EUR"},
    {"name":"Ghana","currency":"GHS"},
    {"name":"Gibraltar","currency":"GIP"},
    {"name":"Greece","currency":"EUR"},
    {"name":"Greenland","currency":"DKK"},
    {"name":"Grenada","currency":"XCD"},
    {"name":"Guadeloupe","currency":"EUR"},
    {"name":"Guam","currency":"USD"},
    {"name":"Guatemala","currency":"GTQ"},
    {"name":"Guernsey","currency":"GBP"},
    {"name":"Guinea","currency":"GNF"},
    {"name":"Guinea-Bissau","currency":"XOF"},
    {"name":"Guyana","currency":"GYD"},
    {"name":"Haiti","currency":"HTG"},
    {"name":"Heard Island and Mcdonald Islands","currency":"AUD"},
    {"name":"Holy See (Vatican City State)","currency":"EUR"},
    {"name":"Honduras","currency":"HNL"},
    {"name":"Hong Kong","currency":"HKD"},
    {"name":"Hungary","currency":"HUF"},
    {"name":"Iceland","currency":"ISK"},
    {"name":"India","currency":"INR"},
    {"name":"Indonesia","currency":"IDR"},
    {"name":"Iran, Islamic Republic of","currency":"IRR"},
    {"name":"Iraq","currency":"IQD"},
    {"name":"Ireland","currency":"EUR"},
    {"name":"Isle of Man","currency":"GBP"},
    {"name":"Israel","currency":"ILS"},
    {"name":"Italy","currency":"EUR"},
    {"name":"Jamaica","currency":"JMD"},
    {"name":"Japan","currency":"JPY"},
    {"name":"Jersey","currency":"GBP"},
    {"name":"Jordan","currency":"JOD"},
    {"name":"Kazakhstan","currency":"KZT"},
    {"name":"Kenya","currency":"KES"},
    {"name":"Kiribati","currency":"AUD"},
    {"name":"Korea, Democratic People's Republic of","currency":"KPW"},
    {"name":"Korea, Republic of","currency":"KRW"},
    {"name":"Kosovo","currency":"EUR"},
    {"name":"Kuwait","currency":"KWD"},
    {"name":"Kyrgyzstan","currency":"KGS"},
    {"name":"Lao People's Democratic Republic","currency":"LAK"},
    {"name":"Latvia","currency":"EUR"},
    {"name":"Lebanon","currency":"LBP"},
    {"name":"Lesotho","currency":"LSL"},
    {"name":"Liberia","currency":"LRD"},
    {"name":"Libyan Arab Jamahiriya","currency":"LYD"},
    {"name":"Liechtenstein","currency":"CHF"},
    {"name":"Lithuania","currency":"EUR"},
    {"name":"Luxembourg","currency":"EUR"},
    {"name":"Macao","currency":"MOP"},
    {"name":"Macedonia, the Former Yugoslav Republic of","currency":"MKD"},
    {"name":"Madagascar","currency":"MGA"},
    {"name":"Malawi","currency":"MWK"},
    {"name":"Malaysia","currency":"MYR"},
    {"name":"Maldives","currency":"MVR"},
    {"name":"Mali","currency":"XOF"},
    {"name":"Malta","currency":"EUR"},
    {"name":"Marshall Islands","currency":"USD"},
    {"name":"Martinique","currency":"EUR"},
    {"name":"Mauritania","currency":"MRO"},
    {"name":"Mauritius","currency":"MUR"},
    {"name":"Mayotte","currency":"EUR"},
    {"name":"Mexico","currency":"MXN"},
    {"name":"Micronesia, Federated States of","currency":"USD"},
    {"name":"Moldova, Republic of","currency":"MDL"},
    {"name":"Monaco","currency":"EUR"},
    {"name":"Mongolia","currency":"MNT"},
    {"name":"Montenegro","currency":"EUR"},
    {"name":"Montserrat","currency":"XCD"},
    {"name":"Morocco","currency":"MAD"},
    {"name":"Mozambique","currency":"MZN"},
    {"name":"Myanmar","currency":"MMK"},
    {"name":"Namibia","currency":"NAD"},
    {"name":"Nauru","currency":"AUD"},
    {"name":"Nepal","currency":"NPR"},
    {"name":"Netherlands","currency":"EUR"},
    {"name":"Netherlands Antilles","currency":"ANG"},
    {"name":"New Caledonia","currency":"XPF"},
    {"name":"New Zealand","currency":"NZD"},
    {"name":"Nicaragua","currency":"NIO"},
    {"name":"Niger","currency":"XOF"},
    {"name":"Nigeria","currency":"NGN"},
    {"name":"Niue","currency":"NZD"},
    {"name":"Norfolk Island","currency":"AUD"},
    {"name":"Northern Mariana Islands","currency":"USD"},
    {"name":"Norway","currency":"NOK"},
    {"name":"Oman","currency":"OMR"},
    {"name":"Pakistan","currency":"PKR"},
    {"name":"Palau","currency":"USD"},
    {"name":"Palestinian Territory, Occupied","currency":"ILS"},
    {"name":"Panama","currency":"PAB"},
    {"name":"Papua New Guinea","currency":"PGK"},
    {"name":"Paraguay","currency":"PYG"},
    {"name":"Peru","currency":"PEN"},
    {"name":"Philippines","currency":"PHP"},
    {"name":"Pitcairn","currency":"NZD"},
    {"name":"Poland","currency":"PLN"},
    {"name":"Portugal","currency":"EUR"},
    {"name":"Puerto Rico","currency":"USD"},
    {"name":"Qatar","currency":"QAR"},
    {"name":"Reunion","currency":"EUR"},
    {"name":"Romania","currency":"RON"},
    {"name":"Russian Federation","currency":"RUB"},
    {"name":"Rwanda","currency":"RWF"},
    {"name":"Saint Barthelemy","currency":"EUR"},
    {"name":"Saint Helena","currency":"SHP"},
    {"name":"Saint Kitts and Nevis","currency":"XCD"},
    {"name":"Saint Lucia","currency":"XCD"},
    {"name":"Saint Martin","currency":"EUR"},
    {"name":"Saint Pierre and Miquelon","currency":"EUR"},
    {"name":"Saint Vincent and the Grenadines","currency":"XCD"},
    {"name":"Samoa","currency":"WST"},
    {"name":"San Marino","currency":"EUR"},
    {"name":"Sao Tome and Principe","currency":"STD"},
    {"name":"Saudi Arabia","currency":"SAR"},
    {"name":"Senegal","currency":"XOF"},
    {"name":"Serbia","currency":"RSD"},
    {"name":"Serbia and Montenegro","currency":"RSD"},
    {"name":"Seychelles","currency":"SCR"},
    {"name":"Sierra Leone","currency":"SLL"},
    {"name":"Singapore","currency":"SGD"},
    {"name":"Sint Maarten","currency":"ANG"},
    {"name":"Slovakia","currency":"EUR"},
    {"name":"Slovenia","currency":"EUR"},
    {"name":"Solomon Islands","currency":"SBD"},
    {"name":"Somalia","currency":"SOS"},
    {"name":"South Africa","currency":"ZAR"},
    {"name":"South Georgia and the South Sandwich Islands","currency":"GBP"},
    {"name":"South Sudan","currency":"SSP"},
    {"name":"Spain","currency":"EUR"},
    {"name":"Sri Lanka","currency":"LKR"},
    {"name":"Sudan","currency":"SDG"},
    {"name":"Suriname","currency":"SRD"},
    {"name":"Svalbard and Jan Mayen","currency":"NOK"},
    {"name":"Swaziland","currency":"SZL"},
    {"name":"Sweden","currency":"SEK"},
    {"name":"Switzerland","currency":"CHF"},
    {"name":"Syrian Arab Republic","currency":"SYP"},
    {"name":"Taiwan, Province of China","currency":"TWD"},
    {"name":"Tajikistan","currency":"TJS"},
    {"name":"Tanzania, United Republic of","currency":"TZS"},
    {"name":"Thailand","currency":"THB"},
    {"name":"Timor-Leste","currency":"USD"},
    {"name":"Togo","currency":"XOF"},
    {"name":"Tokelau","currency":"NZD"},
    {"name":"Tonga","currency":"TOP"},
    {"name":"Trinidad and Tobago","currency":"TTD"},
    {"name":"Tunisia","currency":"TND"},
    {"name":"Turkey","currency":"TRY"},
    {"name":"Turkmenistan","currency":"TMT"},
    {"name":"Turks and Caicos Islands","currency":"USD"},
    {"name":"Tuvalu","currency":"AUD"},
    {"name":"Uganda","currency":"UGX"},
    {"name":"Ukraine","currency":"UAH"},
    {"name":"United Arab Emirates","currency":"AED"},
    {"name":"United Kingdom","currency":"GBP"},
    {"name":"United States","currency":"USD"},
    {"name":"United States Minor Outlying Islands","currency":"USD"},
    {"name":"Uruguay","currency":"UYU"},
    {"name":"Uzbekistan","currency":"UZS"},
    {"name":"Vanuatu","currency":"VUV"},
    {"name":"Venezuela","currency":"VEF"},
    {"name":"Viet Nam","currency":"VND"},
    {"name":"Virgin Islands, British","currency":"USD"},
    {"name":"Virgin Islands, U.s.","currency":"USD"},
    {"name":"Wallis and Futuna","currency":"XPF"},
    {"name":"Western Sahara","currency":"MAD"},
    {"name":"Yemen","currency":"YER"},
    {"name":"Zambia","currency":"ZMW"},
    {"name":"Zimbabwe","currency":"ZWL"}
];

// All countries with countries.name, countries.code, countries.currency code
// length 252
var countries = [
    {"name":"Afghanistan","code":"AF","currency":"AFN"},
    {"name":"Aland Islands","code":"AX","currency":"EUR"},
    {"name":"Albania","code":"AL","currency":"ALL"},
    {"name":"Algeria","code":"DZ","currency":"DZD"},
    {"name":"American Samoa","code":"AS","currency":"USD"},
    {"name":"Andorra","code":"AD","currency":"EUR"},
    {"name":"Angola","code":"AO","currency":"AOA"},
    {"name":"Anguilla","code":"AI","currency":"XCD"},
    {"name":"Antarctica","code":"AQ","currency":"AAD"},
    {"name":"Antigua and Barbuda","code":"AG","currency":"XCD"},
    {"name":"Argentina","code":"AR","currency":"ARS"},
    {"name":"Armenia","code":"AM","currency":"AMD"},
    {"name":"Aruba","code":"AW","currency":"AWG"},
    {"name":"Australia","code":"AU","currency":"AUD"},
    {"name":"Austria","code":"AT","currency":"EUR"},
    {"name":"Azerbaijan","code":"AZ","currency":"AZN"},
    {"name":"Bahamas","code":"BS","currency":"BSD"},
    {"name":"Bahrain","code":"BH","currency":"BHD"},
    {"name":"Bangladesh","code":"BD","currency":"BDT"},
    {"name":"Barbados","code":"BB","currency":"BBD"},
    {"name":"Belarus","code":"BY","currency":"BYN"},
    {"name":"Belgium","code":"BE","currency":"EUR"},
    {"name":"Belize","code":"BZ","currency":"BZD"},
    {"name":"Benin","code":"BJ","currency":"XOF"},
    {"name":"Bermuda","code":"BM","currency":"BMD"},
    {"name":"Bhutan","code":"BT","currency":"BTN"},
    {"name":"Bolivia","code":"BO","currency":"BOB"},
    {"name":"Bonaire, Sint Eustatius and Saba","code":"BQ","currency":"USD"},
    {"name":"Bosnia and Herzegovina","code":"BA","currency":"BAM"},
    {"name":"Botswana","code":"BW","currency":"BWP"},
    {"name":"Bouvet Island","code":"BV","currency":"NOK"},
    {"name":"Brazil","code":"BR","currency":"BRL"},
    {"name":"British Indian Ocean Territory","code":"IO","currency":"USD"},
    {"name":"Brunei Darussalam","code":"BN","currency":"BND"},
    {"name":"Bulgaria","code":"BG","currency":"BGN"},
    {"name":"Burkina Faso","code":"BF","currency":"XOF"},
    {"name":"Burundi","code":"BI","currency":"BIF"},
    {"name":"Cambodia","code":"KH","currency":"KHR"},
    {"name":"Cameroon","code":"CM","currency":"XAF"},
    {"name":"Canada","code":"CA","currency":"CAD"},
    {"name":"Cape Verde","code":"CV","currency":"CVE"},
    {"name":"Cayman Islands","code":"KY","currency":"KYD"},
    {"name":"Central African Republic","code":"CF","currency":"XAF"},
    {"name":"Chad","code":"TD","currency":"XAF"},
    {"name":"Chile","code":"CL","currency":"CLP"},
    {"name":"China","code":"CN","currency":"CNY"},
    {"name":"Christmas Island","code":"CX","currency":"AUD"},
    {"name":"Cocos (Keeling) Islands","code":"CC","currency":"AUD"},
    {"name":"Colombia","code":"CO","currency":"COP"},
    {"name":"Comoros","code":"KM","currency":"KMF"},
    {"name":"Congo","code":"CG","currency":"XAF"},
    {"name":"Congo, Democratic Republic of the Congo","code":"CD","currency":"CDF"},
    {"name":"Cook Islands","code":"CK","currency":"NZD"},
    {"name":"Costa Rica","code":"CR","currency":"CRC"},
    {"name":"Cote D'Ivoire","code":"CI","currency":"XOF"},
    {"name":"Croatia","code":"HR","currency":"HRK"},
    {"name":"Cuba","code":"CU","currency":"CUP"},
    {"name":"Curacao","code":"CW","currency":"ANG"},
    {"name":"Cyprus","code":"CY","currency":"EUR"},
    {"name":"Czech Republic","code":"CZ","currency":"CZK"},
    {"name":"Denmark","code":"DK","currency":"DKK"},
    {"name":"Djibouti","code":"DJ","currency":"DJF"},
    {"name":"Dominica","code":"DM","currency":"XCD"},
    {"name":"Dominican Republic","code":"DO","currency":"DOP"},
    {"name":"Ecuador","code":"EC","currency":"USD"},
    {"name":"Egypt","code":"EG","currency":"EGP"},
    {"name":"El Salvador","code":"SV","currency":"USD"},
    {"name":"Equatorial Guinea","code":"GQ","currency":"XAF"},
    {"name":"Eritrea","code":"ER","currency":"ERN"},
    {"name":"Estonia","code":"EE","currency":"EUR"},
    {"name":"Ethiopia","code":"ET","currency":"ETB"},
    {"name":"Falkland Islands (Malvinas)","code":"FK","currency":"FKP"},
    {"name":"Faroe Islands","code":"FO","currency":"DKK"},
    {"name":"Fiji","code":"FJ","currency":"FJD"},
    {"name":"Finland","code":"FI","currency":"EUR"},
    {"name":"France","code":"FR","currency":"EUR"},
    {"name":"French Guiana","code":"GF","currency":"EUR"},
    {"name":"French Polynesia","code":"PF","currency":"XPF"},
    {"name":"French Southern Territories","code":"TF","currency":"EUR"},
    {"name":"Gabon","code":"GA","currency":"XAF"},
    {"name":"Gambia","code":"GM","currency":"GMD"},
    {"name":"Georgia","code":"GE","currency":"GEL"},
    {"name":"Germany","code":"DE","currency":"EUR"},
    {"name":"Ghana","code":"GH","currency":"GHS"},
    {"name":"Gibraltar","code":"GI","currency":"GIP"},
    {"name":"Greece","code":"GR","currency":"EUR"},
    {"name":"Greenland","code":"GL","currency":"DKK"},
    {"name":"Grenada","code":"GD","currency":"XCD"},
    {"name":"Guadeloupe","code":"GP","currency":"EUR"},
    {"name":"Guam","code":"GU","currency":"USD"},
    {"name":"Guatemala","code":"GT","currency":"GTQ"},
    {"name":"Guernsey","code":"GG","currency":"GBP"},
    {"name":"Guinea","code":"GN","currency":"GNF"},
    {"name":"Guinea-Bissau","code":"GW","currency":"XOF"},
    {"name":"Guyana","code":"GY","currency":"GYD"},
    {"name":"Haiti","code":"HT","currency":"HTG"},
    {"name":"Heard Island and Mcdonald Islands","code":"HM","currency":"AUD"},
    {"name":"Holy See (Vatican City State)","code":"VA","currency":"EUR"},
    {"name":"Honduras","code":"HN","currency":"HNL"},
    {"name":"Hong Kong","code":"HK","currency":"HKD"},
    {"name":"Hungary","code":"HU","currency":"HUF"},
    {"name":"Iceland","code":"IS","currency":"ISK"},
    {"name":"India","code":"IN","currency":"INR"},
    {"name":"Indonesia","code":"ID","currency":"IDR"},
    {"name":"Iran, Islamic Republic of","code":"IR","currency":"IRR"},
    {"name":"Iraq","code":"IQ","currency":"IQD"},
    {"name":"Ireland","code":"IE","currency":"EUR"},
    {"name":"Isle of Man","code":"IM","currency":"GBP"},
    {"name":"Israel","code":"IL","currency":"ILS"},
    {"name":"Italy","code":"IT","currency":"EUR"},
    {"name":"Jamaica","code":"JM","currency":"JMD"},
    {"name":"Japan","code":"JP","currency":"JPY"},
    {"name":"Jersey","code":"JE","currency":"GBP"},
    {"name":"Jordan","code":"JO","currency":"JOD"},
    {"name":"Kazakhstan","code":"KZ","currency":"KZT"},
    {"name":"Kenya","code":"KE","currency":"KES"},
    {"name":"Kiribati","code":"KI","currency":"AUD"},
    {"name":"Korea, Democratic People's Republic of","code":"KP","currency":"KPW"},
    {"name":"Korea, Republic of","code":"KR","currency":"KRW"},
    {"name":"Kosovo","code":"XK","currency":"EUR"},
    {"name":"Kuwait","code":"KW","currency":"KWD"},
    {"name":"Kyrgyzstan","code":"KG","currency":"KGS"},
    {"name":"Lao People's Democratic Republic","code":"LA","currency":"LAK"},
    {"name":"Latvia","code":"LV","currency":"EUR"},
    {"name":"Lebanon","code":"LB","currency":"LBP"},
    {"name":"Lesotho","code":"LS","currency":"LSL"},
    {"name":"Liberia","code":"LR","currency":"LRD"},
    {"name":"Libyan Arab Jamahiriya","code":"LY","currency":"LYD"},
    {"name":"Liechtenstein","code":"LI","currency":"CHF"},
    {"name":"Lithuania","code":"LT","currency":"EUR"},
    {"name":"Luxembourg","code":"LU","currency":"EUR"},
    {"name":"Macao","code":"MO","currency":"MOP"},
    {"name":"Macedonia, the Former Yugoslav Republic of","code":"MK","currency":"MKD"},
    {"name":"Madagascar","code":"MG","currency":"MGA"},
    {"name":"Malawi","code":"MW","currency":"MWK"},
    {"name":"Malaysia","code":"MY","currency":"MYR"},
    {"name":"Maldives","code":"MV","currency":"MVR"},
    {"name":"Mali","code":"ML","currency":"XOF"},
    {"name":"Malta","code":"MT","currency":"EUR"},
    {"name":"Marshall Islands","code":"MH","currency":"USD"},
    {"name":"Martinique","code":"MQ","currency":"EUR"},
    {"name":"Mauritania","code":"MR","currency":"MRO"},
    {"name":"Mauritius","code":"MU","currency":"MUR"},
    {"name":"Mayotte","code":"YT","currency":"EUR"},
    {"name":"Mexico","code":"MX","currency":"MXN"},
    {"name":"Micronesia, Federated States of","code":"FM","currency":"USD"},
    {"name":"Moldova, Republic of","code":"MD","currency":"MDL"},
    {"name":"Monaco","code":"MC","currency":"EUR"},
    {"name":"Mongolia","code":"MN","currency":"MNT"},
    {"name":"Montenegro","code":"ME","currency":"EUR"},
    {"name":"Montserrat","code":"MS","currency":"XCD"},
    {"name":"Morocco","code":"MA","currency":"MAD"},
    {"name":"Mozambique","code":"MZ","currency":"MZN"},
    {"name":"Myanmar","code":"MM","currency":"MMK"},
    {"name":"Namibia","code":"NA","currency":"NAD"},
    {"name":"Nauru","code":"NR","currency":"AUD"},
    {"name":"Nepal","code":"NP","currency":"NPR"},
    {"name":"Netherlands","code":"NL","currency":"EUR"},
    {"name":"Netherlands Antilles","code":"AN","currency":"ANG"},
    {"name":"New Caledonia","code":"NC","currency":"XPF"},
    {"name":"New Zealand","code":"NZ","currency":"NZD"},
    {"name":"Nicaragua","code":"NI","currency":"NIO"},
    {"name":"Niger","code":"NE","currency":"XOF"},
    {"name":"Nigeria","code":"NG","currency":"NGN"},
    {"name":"Niue","code":"NU","currency":"NZD"},
    {"name":"Norfolk Island","code":"NF","currency":"AUD"},
    {"name":"Northern Mariana Islands","code":"MP","currency":"USD"},
    {"name":"Norway","code":"NO","currency":"NOK"},
    {"name":"Oman","code":"OM","currency":"OMR"},
    {"name":"Pakistan","code":"PK","currency":"PKR"},
    {"name":"Palau","code":"PW","currency":"USD"},
    {"name":"Palestinian Territory, Occupied","code":"PS","currency":"ILS"},
    {"name":"Panama","code":"PA","currency":"PAB"},
    {"name":"Papua New Guinea","code":"PG","currency":"PGK"},
    {"name":"Paraguay","code":"PY","currency":"PYG"},
    {"name":"Peru","code":"PE","currency":"PEN"},
    {"name":"Philippines","code":"PH","currency":"PHP"},
    {"name":"Pitcairn","code":"PN","currency":"NZD"},
    {"name":"Poland","code":"PL","currency":"PLN"},
    {"name":"Portugal","code":"PT","currency":"EUR"},
    {"name":"Puerto Rico","code":"PR","currency":"USD"},
    {"name":"Qatar","code":"QA","currency":"QAR"},
    {"name":"Reunion","code":"RE","currency":"EUR"},
    {"name":"Romania","code":"RO","currency":"RON"},
    {"name":"Russian Federation","code":"RU","currency":"RUB"},
    {"name":"Rwanda","code":"RW","currency":"RWF"},
    {"name":"Saint Barthelemy","code":"BL","currency":"EUR"},
    {"name":"Saint Helena","code":"SH","currency":"SHP"},
    {"name":"Saint Kitts and Nevis","code":"KN","currency":"XCD"},
    {"name":"Saint Lucia","code":"LC","currency":"XCD"},
    {"name":"Saint Martin","code":"MF","currency":"EUR"},
    {"name":"Saint Pierre and Miquelon","code":"PM","currency":"EUR"},
    {"name":"Saint Vincent and the Grenadines","code":"VC","currency":"XCD"},
    {"name":"Samoa","code":"WS","currency":"WST"},
    {"name":"San Marino","code":"SM","currency":"EUR"},
    {"name":"Sao Tome and Principe","code":"ST","currency":"STD"},
    {"name":"Saudi Arabia","code":"SA","currency":"SAR"},
    {"name":"Senegal","code":"SN","currency":"XOF"},
    {"name":"Serbia","code":"RS","currency":"RSD"},
    {"name":"Serbia and Montenegro","code":"CS","currency":"RSD"},
    {"name":"Seychelles","code":"SC","currency":"SCR"},
    {"name":"Sierra Leone","code":"SL","currency":"SLL"},
    {"name":"Singapore","code":"SG","currency":"SGD"},
    {"name":"Sint Maarten","code":"SX","currency":"ANG"},
    {"name":"Slovakia","code":"SK","currency":"EUR"},
    {"name":"Slovenia","code":"SI","currency":"EUR"},
    {"name":"Solomon Islands","code":"SB","currency":"SBD"},
    {"name":"Somalia","code":"SO","currency":"SOS"},
    {"name":"South Africa","code":"ZA","currency":"ZAR"},
    {"name":"South Georgia and the South Sandwich Islands","code":"GS","currency":"GBP"},
    {"name":"South Sudan","code":"SS","currency":"SSP"},
    {"name":"Spain","code":"ES","currency":"EUR"},
    {"name":"Sri Lanka","code":"LK","currency":"LKR"},
    {"name":"Sudan","code":"SD","currency":"SDG"},
    {"name":"Suriname","code":"SR","currency":"SRD"},
    {"name":"Svalbard and Jan Mayen","code":"SJ","currency":"NOK"},
    {"name":"Swaziland","code":"SZ","currency":"SZL"},
    {"name":"Sweden","code":"SE","currency":"SEK"},
    {"name":"Switzerland","code":"CH","currency":"CHF"},
    {"name":"Syrian Arab Republic","code":"SY","currency":"SYP"},
    {"name":"Taiwan, Province of China","code":"TW","currency":"TWD"},
    {"name":"Tajikistan","code":"TJ","currency":"TJS"},
    {"name":"Tanzania, United Republic of","code":"TZ","currency":"TZS"},
    {"name":"Thailand","code":"TH","currency":"THB"},
    {"name":"Timor-Leste","code":"TL","currency":"USD"},
    {"name":"Togo","code":"TG","currency":"XOF"},
    {"name":"Tokelau","code":"TK","currency":"NZD"},
    {"name":"Tonga","code":"TO","currency":"TOP"},
    {"name":"Trinidad and Tobago","code":"TT","currency":"TTD"},
    {"name":"Tunisia","code":"TN","currency":"TND"},
    {"name":"Turkey","code":"TR","currency":"TRY"},
    {"name":"Turkmenistan","code":"TM","currency":"TMT"},
    {"name":"Turks and Caicos Islands","code":"TC","currency":"USD"},
    {"name":"Tuvalu","code":"TV","currency":"AUD"},
    {"name":"Uganda","code":"UG","currency":"UGX"},
    {"name":"Ukraine","code":"UA","currency":"UAH"},
    {"name":"United Arab Emirates","code":"AE","currency":"AED"},
    {"name":"United Kingdom","code":"GB","currency":"GBP"},
    {"name":"United States","code":"US","currency":"USD"},
    {"name":"United States Minor Outlying Islands","code":"UM","currency":"USD"},
    {"name":"Uruguay","code":"UY","currency":"UYU"},
    {"name":"Uzbekistan","code":"UZ","currency":"UZS"},
    {"name":"Vanuatu","code":"VU","currency":"VUV"},
    {"name":"Venezuela","code":"VE","currency":"VEF"},
    {"name":"Viet Nam","code":"VN","currency":"VND"},
    {"name":"Virgin Islands, British","code":"VG","currency":"USD"},
    {"name":"Virgin Islands, U.s.","code":"VI","currency":"USD"},
    {"name":"Wallis and Futuna","code":"WF","currency":"XPF"},
    {"name":"Western Sahara","code":"EH","currency":"MAD"},
    {"name":"Yemen","code":"YE","currency":"YER"},
    {"name":"Zambia","code":"ZM","currency":"ZMW"},
    {"name":"Zimbabwe","code":"ZW","currency":"ZWL"}
];
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