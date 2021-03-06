//global variables
var homeCountry = document.getElementById("select-country");
var destCountry = document.getElementById("destination-country");
var homeMsg = document.getElementById("home-msg");
var destMsg = document.getElementById("dest-msg");
var userFormEl = document.querySelector("#user-form");
var homeInfo = document.getElementById("home-data");
var destInfo = document.getElementById("dest-data");
var homeCurrency;
var destCurrency;
var convertRate;
var amountCurrency = document.getElementById("currency-amount");
var currencyContainerEl = document.getElementById("currency-container");
var currencyEntry = document.getElementById("entry-container");
var savedResults = document.getElementById("saved-country");
var saveCountries = [];
var countries = [
  { "name": "Afghanistan", "code": "AF", "currency": "AFN" },
  { "name": "Aland Islands", "code": "AX", "currency": "EUR" },
  { "name": "Albania", "code": "AL", "currency": "ALL" },
  { "name": "Algeria", "code": "DZ", "currency": "DZD" },
  { "name": "American Samoa", "code": "AS", "currency": "USD" },
  { "name": "Andorra", "code": "AD", "currency": "EUR" },
  { "name": "Angola", "code": "AO", "currency": "AOA" },
  { "name": "Anguilla", "code": "AI", "currency": "XCD" },
  { "name": "Antarctica", "code": "AQ", "currency": "AAD" },
  { "name": "Antigua and Barbuda", "code": "AG", "currency": "XCD" },
  { "name": "Argentina", "code": "AR", "currency": "ARS" },
  { "name": "Armenia", "code": "AM", "currency": "AMD" },
  { "name": "Aruba", "code": "AW", "currency": "AWG" },
  { "name": "Australia", "code": "AU", "currency": "AUD" },
  { "name": "Austria", "code": "AT", "currency": "EUR" },
  { "name": "Azerbaijan", "code": "AZ", "currency": "AZN" },
  { "name": "Bahamas", "code": "BS", "currency": "BSD" },
  { "name": "Bahrain", "code": "BH", "currency": "BHD" },
  { "name": "Bangladesh", "code": "BD", "currency": "BDT" },
  { "name": "Barbados", "code": "BB", "currency": "BBD" },
  { "name": "Belarus", "code": "BY", "currency": "BYN" },
  { "name": "Belgium", "code": "BE", "currency": "EUR" },
  { "name": "Belize", "code": "BZ", "currency": "BZD" },
  { "name": "Benin", "code": "BJ", "currency": "XOF" },
  { "name": "Bermuda", "code": "BM", "currency": "BMD" },
  { "name": "Bhutan", "code": "BT", "currency": "BTN" },
  { "name": "Bolivia", "code": "BO", "currency": "BOB" },
  { "name": "Bonaire, Sint Eustatius and Saba", "code": "BQ", "currency": "USD" },
  { "name": "Bosnia and Herzegovina", "code": "BA", "currency": "BAM" },
  { "name": "Botswana", "code": "BW", "currency": "BWP" },
  { "name": "Bouvet Island", "code": "BV", "currency": "NOK" },
  { "name": "Brazil", "code": "BR", "currency": "BRL" },
  { "name": "British Indian Ocean Territory", "code": "IO", "currency": "USD" },
  { "name": "Brunei Darussalam", "code": "BN", "currency": "BND" },
  { "name": "Bulgaria", "code": "BG", "currency": "BGN" },
  { "name": "Burkina Faso", "code": "BF", "currency": "XOF" },
  { "name": "Burundi", "code": "BI", "currency": "BIF" },
  { "name": "Cambodia", "code": "KH", "currency": "KHR" },
  { "name": "Cameroon", "code": "CM", "currency": "XAF" },
  { "name": "Canada", "code": "CA", "currency": "CAD" },
  { "name": "Cape Verde", "code": "CV", "currency": "CVE" },
  { "name": "Cayman Islands", "code": "KY", "currency": "KYD" },
  { "name": "Central African Republic", "code": "CF", "currency": "XAF" },
  { "name": "Chad", "code": "TD", "currency": "XAF" },
  { "name": "Chile", "code": "CL", "currency": "CLP" },
  { "name": "China", "code": "CN", "currency": "CNY" },
  { "name": "Christmas Island", "code": "CX", "currency": "AUD" },
  { "name": "Cocos (Keeling) Islands", "code": "CC", "currency": "AUD" },
  { "name": "Colombia", "code": "CO", "currency": "COP" },
  { "name": "Comoros", "code": "KM", "currency": "KMF" },
  { "name": "Congo", "code": "CG", "currency": "XAF" },
  { "name": "Congo, Democratic Republic of the Congo", "code": "CD", "currency": "CDF" },
  { "name": "Cook Islands", "code": "CK", "currency": "NZD" },
  { "name": "Costa Rica", "code": "CR", "currency": "CRC" },
  { "name": "Cote D'Ivoire", "code": "CI", "currency": "XOF" },
  { "name": "Croatia", "code": "HR", "currency": "HRK" },
  { "name": "Cuba", "code": "CU", "currency": "CUP" },
  { "name": "Curacao", "code": "CW", "currency": "ANG" },
  { "name": "Cyprus", "code": "CY", "currency": "EUR" },
  { "name": "Czech Republic", "code": "CZ", "currency": "CZK" },
  { "name": "Denmark", "code": "DK", "currency": "DKK" },
  { "name": "Djibouti", "code": "DJ", "currency": "DJF" },
  { "name": "Dominica", "code": "DM", "currency": "XCD" },
  { "name": "Dominican Republic", "code": "DO", "currency": "DOP" },
  { "name": "Ecuador", "code": "EC", "currency": "USD" },
  { "name": "Egypt", "code": "EG", "currency": "EGP" },
  { "name": "El Salvador", "code": "SV", "currency": "USD" },
  { "name": "Equatorial Guinea", "code": "GQ", "currency": "XAF" },
  { "name": "Eritrea", "code": "ER", "currency": "ERN" },
  { "name": "Estonia", "code": "EE", "currency": "EUR" },
  { "name": "Ethiopia", "code": "ET", "currency": "ETB" },
  { "name": "Falkland Islands (Malvinas)", "code": "FK", "currency": "FKP" },
  { "name": "Faroe Islands", "code": "FO", "currency": "DKK" },
  { "name": "Fiji", "code": "FJ", "currency": "FJD" },
  { "name": "Finland", "code": "FI", "currency": "EUR" },
  { "name": "France", "code": "FR", "currency": "EUR" },
  { "name": "French Guiana", "code": "GF", "currency": "EUR" },
  { "name": "French Polynesia", "code": "PF", "currency": "XPF" },
  { "name": "French Southern Territories", "code": "TF", "currency": "EUR" },
  { "name": "Gabon", "code": "GA", "currency": "XAF" },
  { "name": "Gambia", "code": "GM", "currency": "GMD" },
  { "name": "Georgia", "code": "GE", "currency": "GEL" },
  { "name": "Germany", "code": "DE", "currency": "EUR" },
  { "name": "Ghana", "code": "GH", "currency": "GHS" },
  { "name": "Gibraltar", "code": "GI", "currency": "GIP" },
  { "name": "Greece", "code": "GR", "currency": "EUR" },
  { "name": "Greenland", "code": "GL", "currency": "DKK" },
  { "name": "Grenada", "code": "GD", "currency": "XCD" },
  { "name": "Guadeloupe", "code": "GP", "currency": "EUR" },
  { "name": "Guam", "code": "GU", "currency": "USD" },
  { "name": "Guatemala", "code": "GT", "currency": "GTQ" },
  { "name": "Guernsey", "code": "GG", "currency": "GBP" },
  { "name": "Guinea", "code": "GN", "currency": "GNF" },
  { "name": "Guinea-Bissau", "code": "GW", "currency": "XOF" },
  { "name": "Guyana", "code": "GY", "currency": "GYD" },
  { "name": "Haiti", "code": "HT", "currency": "HTG" },
  { "name": "Heard Island and Mcdonald Islands", "code": "HM", "currency": "AUD" },
  { "name": "Holy See (Vatican City State)", "code": "VA", "currency": "EUR" },
  { "name": "Honduras", "code": "HN", "currency": "HNL" },
  { "name": "Hong Kong", "code": "HK", "currency": "HKD" },
  { "name": "Hungary", "code": "HU", "currency": "HUF" },
  { "name": "Iceland", "code": "IS", "currency": "ISK" },
  { "name": "India", "code": "IN", "currency": "INR" },
  { "name": "Indonesia", "code": "ID", "currency": "IDR" },
  { "name": "Iran, Islamic Republic of", "code": "IR", "currency": "IRR" },
  { "name": "Iraq", "code": "IQ", "currency": "IQD" },
  { "name": "Ireland", "code": "IE", "currency": "EUR" },
  { "name": "Isle of Man", "code": "IM", "currency": "GBP" },
  { "name": "Israel", "code": "IL", "currency": "ILS" },
  { "name": "Italy", "code": "IT", "currency": "EUR" },
  { "name": "Jamaica", "code": "JM", "currency": "JMD" },
  { "name": "Japan", "code": "JP", "currency": "JPY" },
  { "name": "Jersey", "code": "JE", "currency": "GBP" },
  { "name": "Jordan", "code": "JO", "currency": "JOD" },
  { "name": "Kazakhstan", "code": "KZ", "currency": "KZT" },
  { "name": "Kenya", "code": "KE", "currency": "KES" },
  { "name": "Kiribati", "code": "KI", "currency": "AUD" },
  { "name": "Korea, Democratic People's Republic of", "code": "KP", "currency": "KPW" },
  { "name": "Korea, Republic of", "code": "KR", "currency": "KRW" },
  { "name": "Kosovo", "code": "XK", "currency": "EUR" },
  { "name": "Kuwait", "code": "KW", "currency": "KWD" },
  { "name": "Kyrgyzstan", "code": "KG", "currency": "KGS" },
  { "name": "Lao People's Democratic Republic", "code": "LA", "currency": "LAK" },
  { "name": "Latvia", "code": "LV", "currency": "EUR" },
  { "name": "Lebanon", "code": "LB", "currency": "LBP" },
  { "name": "Lesotho", "code": "LS", "currency": "LSL" },
  { "name": "Liberia", "code": "LR", "currency": "LRD" },
  { "name": "Libyan Arab Jamahiriya", "code": "LY", "currency": "LYD" },
  { "name": "Liechtenstein", "code": "LI", "currency": "CHF" },
  { "name": "Lithuania", "code": "LT", "currency": "EUR" },
  { "name": "Luxembourg", "code": "LU", "currency": "EUR" },
  { "name": "Macao", "code": "MO", "currency": "MOP" },
  { "name": "Macedonia, the Former Yugoslav Republic of", "code": "MK", "currency": "MKD" },
  { "name": "Madagascar", "code": "MG", "currency": "MGA" },
  { "name": "Malawi", "code": "MW", "currency": "MWK" },
  { "name": "Malaysia", "code": "MY", "currency": "MYR" },
  { "name": "Maldives", "code": "MV", "currency": "MVR" },
  { "name": "Mali", "code": "ML", "currency": "XOF" },
  { "name": "Malta", "code": "MT", "currency": "EUR" },
  { "name": "Marshall Islands", "code": "MH", "currency": "USD" },
  { "name": "Martinique", "code": "MQ", "currency": "EUR" },
  { "name": "Mauritania", "code": "MR", "currency": "MRO" },
  { "name": "Mauritius", "code": "MU", "currency": "MUR" },
  { "name": "Mayotte", "code": "YT", "currency": "EUR" },
  { "name": "Mexico", "code": "MX", "currency": "MXN" },
  { "name": "Micronesia, Federated States of", "code": "FM", "currency": "USD" },
  { "name": "Moldova, Republic of", "code": "MD", "currency": "MDL" },
  { "name": "Monaco", "code": "MC", "currency": "EUR" },
  { "name": "Mongolia", "code": "MN", "currency": "MNT" },
  { "name": "Montenegro", "code": "ME", "currency": "EUR" },
  { "name": "Montserrat", "code": "MS", "currency": "XCD" },
  { "name": "Morocco", "code": "MA", "currency": "MAD" },
  { "name": "Mozambique", "code": "MZ", "currency": "MZN" },
  { "name": "Myanmar", "code": "MM", "currency": "MMK" },
  { "name": "Namibia", "code": "NA", "currency": "NAD" },
  { "name": "Nauru", "code": "NR", "currency": "AUD" },
  { "name": "Nepal", "code": "NP", "currency": "NPR" },
  { "name": "Netherlands", "code": "NL", "currency": "EUR" },
  { "name": "Netherlands Antilles", "code": "AN", "currency": "ANG" },
  { "name": "New Caledonia", "code": "NC", "currency": "XPF" },
  { "name": "New Zealand", "code": "NZ", "currency": "NZD" },
  { "name": "Nicaragua", "code": "NI", "currency": "NIO" },
  { "name": "Niger", "code": "NE", "currency": "XOF" },
  { "name": "Nigeria", "code": "NG", "currency": "NGN" },
  { "name": "Niue", "code": "NU", "currency": "NZD" },
  { "name": "Norfolk Island", "code": "NF", "currency": "AUD" },
  { "name": "Northern Mariana Islands", "code": "MP", "currency": "USD" },
  { "name": "Norway", "code": "NO", "currency": "NOK" },
  { "name": "Oman", "code": "OM", "currency": "OMR" },
  { "name": "Pakistan", "code": "PK", "currency": "PKR" },
  { "name": "Palau", "code": "PW", "currency": "USD" },
  { "name": "Palestinian Territory, Occupied", "code": "PS", "currency": "ILS" },
  { "name": "Panama", "code": "PA", "currency": "PAB" },
  { "name": "Papua New Guinea", "code": "PG", "currency": "PGK" },
  { "name": "Paraguay", "code": "PY", "currency": "PYG" },
  { "name": "Peru", "code": "PE", "currency": "PEN" },
  { "name": "Philippines", "code": "PH", "currency": "PHP" },
  { "name": "Pitcairn", "code": "PN", "currency": "NZD" },
  { "name": "Poland", "code": "PL", "currency": "PLN" },
  { "name": "Portugal", "code": "PT", "currency": "EUR" },
  { "name": "Puerto Rico", "code": "PR", "currency": "USD" },
  { "name": "Qatar", "code": "QA", "currency": "QAR" },
  { "name": "Reunion", "code": "RE", "currency": "EUR" },
  { "name": "Romania", "code": "RO", "currency": "RON" },
  { "name": "Russian Federation", "code": "RU", "currency": "RUB" },
  { "name": "Rwanda", "code": "RW", "currency": "RWF" },
  { "name": "Saint Barthelemy", "code": "BL", "currency": "EUR" },
  { "name": "Saint Helena", "code": "SH", "currency": "SHP" },
  { "name": "Saint Kitts and Nevis", "code": "KN", "currency": "XCD" },
  { "name": "Saint Lucia", "code": "LC", "currency": "XCD" },
  { "name": "Saint Martin", "code": "MF", "currency": "EUR" },
  { "name": "Saint Pierre and Miquelon", "code": "PM", "currency": "EUR" },
  { "name": "Saint Vincent and the Grenadines", "code": "VC", "currency": "XCD" },
  { "name": "Samoa", "code": "WS", "currency": "WST" },
  { "name": "San Marino", "code": "SM", "currency": "EUR" },
  { "name": "Sao Tome and Principe", "code": "ST", "currency": "STD" },
  { "name": "Saudi Arabia", "code": "SA", "currency": "SAR" },
  { "name": "Senegal", "code": "SN", "currency": "XOF" },
  { "name": "Serbia", "code": "RS", "currency": "RSD" },
  { "name": "Serbia and Montenegro", "code": "CS", "currency": "RSD" },
  { "name": "Seychelles", "code": "SC", "currency": "SCR" },
  { "name": "Sierra Leone", "code": "SL", "currency": "SLL" },
  { "name": "Singapore", "code": "SG", "currency": "SGD" },
  { "name": "Sint Maarten", "code": "SX", "currency": "ANG" },
  { "name": "Slovakia", "code": "SK", "currency": "EUR" },
  { "name": "Slovenia", "code": "SI", "currency": "EUR" },
  { "name": "Solomon Islands", "code": "SB", "currency": "SBD" },
  { "name": "Somalia", "code": "SO", "currency": "SOS" },
  { "name": "South Africa", "code": "ZA", "currency": "ZAR" },
  { "name": "South Georgia and the South Sandwich Islands", "code": "GS", "currency": "GBP" },
  { "name": "South Sudan", "code": "SS", "currency": "SSP" },
  { "name": "Spain", "code": "ES", "currency": "EUR" },
  { "name": "Sri Lanka", "code": "LK", "currency": "LKR" },
  { "name": "Sudan", "code": "SD", "currency": "SDG" },
  { "name": "Suriname", "code": "SR", "currency": "SRD" },
  { "name": "Svalbard and Jan Mayen", "code": "SJ", "currency": "NOK" },
  { "name": "Swaziland", "code": "SZ", "currency": "SZL" },
  { "name": "Sweden", "code": "SE", "currency": "SEK" },
  { "name": "Switzerland", "code": "CH", "currency": "CHF" },
  { "name": "Syrian Arab Republic", "code": "SY", "currency": "SYP" },
  { "name": "Taiwan, Province of China", "code": "TW", "currency": "TWD" },
  { "name": "Tajikistan", "code": "TJ", "currency": "TJS" },
  { "name": "Tanzania, United Republic of", "code": "TZ", "currency": "TZS" },
  { "name": "Thailand", "code": "TH", "currency": "THB" },
  { "name": "Timor-Leste", "code": "TL", "currency": "USD" },
  { "name": "Togo", "code": "TG", "currency": "XOF" },
  { "name": "Tokelau", "code": "TK", "currency": "NZD" },
  { "name": "Tonga", "code": "TO", "currency": "TOP" },
  { "name": "Trinidad and Tobago", "code": "TT", "currency": "TTD" },
  { "name": "Tunisia", "code": "TN", "currency": "TND" },
  { "name": "Turkey", "code": "TR", "currency": "TRY" },
  { "name": "Turkmenistan", "code": "TM", "currency": "TMT" },
  { "name": "Turks and Caicos Islands", "code": "TC", "currency": "USD" },
  { "name": "Tuvalu", "code": "TV", "currency": "AUD" },
  { "name": "Uganda", "code": "UG", "currency": "UGX" },
  { "name": "Ukraine", "code": "UA", "currency": "UAH" },
  { "name": "United Arab Emirates", "code": "AE", "currency": "AED" },
  { "name": "United Kingdom", "code": "GB", "currency": "GBP" },
  { "name": "United States", "code": "US", "currency": "USD" },
  { "name": "United States Minor Outlying Islands", "code": "UM", "currency": "USD" },
  { "name": "Uruguay", "code": "UY", "currency": "UYU" },
  { "name": "Uzbekistan", "code": "UZ", "currency": "UZS" },
  { "name": "Vanuatu", "code": "VU", "currency": "VUV" },
  { "name": "Venezuela", "code": "VE", "currency": "VEF" },
  { "name": "Viet Nam", "code": "VN", "currency": "VND" },
  { "name": "Virgin Islands, British", "code": "VG", "currency": "USD" },
  { "name": "Virgin Islands, U.s.", "code": "VI", "currency": "USD" },
  { "name": "Wallis and Futuna", "code": "WF", "currency": "XPF" },
  { "name": "Western Sahara", "code": "EH", "currency": "MAD" },
  { "name": "Yemen", "code": "YE", "currency": "YER" },
  { "name": "Zambia", "code": "ZM", "currency": "ZMW" },
  { "name": "Zimbabwe", "code": "ZW", "currency": "ZWL" }
];

//checking for local storage
if (JSON.parse(window.localStorage.getItem('countryList'))) {
  saveCountries = JSON.parse(window.localStorage.getItem('countryList'));
}
else {
  saveCountries = [];
}

//display saved destinations
displayCountries();

var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var homeSearch = homeCountryList.options[homeCountryList.selectedIndex].value;
  var homeText = homeCountryList.options[homeCountryList.selectedIndex].text;
  var destSearch = destCountryList.options[destCountryList.selectedIndex].value;
  var destText = destCountryList.options[destCountryList.selectedIndex].text;

  // get value from input element
  if (homeSearch) {
    console.log(homeSearch);
    getHomeCountry(homeSearch);
  }

  else {;
    // Get the modal
    var modal = document.getElementById("modal");

    // Get the button that opens the modal
    var btn = document.getElementById("select-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close");

    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  // get value from input element
  if (destSearch) {
    getDestCountry(destSearch);
    console.log(destSearch);

  }
  else {
    var modal = document.getElementById("modal");

    // Get the button that opens the modal
    var btn = document.getElementById("select-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close");

    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  //get destinations store data
  if (destSearch) {
    getDestCountry(destSearch);
    console.log(destSearch);
//store search results
  }
  if (homeSearch && destSearch) {
    storeCountries(homeSearch, destSearch, homeText, destText);
    displayAmountEntry();
  }
};

//create and append home country select list
var homeCountryList = document.createElement("select");
homeCountryList.id = "homecountry";
homeCountryList.className = "dropdown";
homeCountry.appendChild(homeCountryList);
var selectHome = document.createElement("option");
selectHome.value = "";
selectHome.text = "Please select";
homeCountryList.appendChild(selectHome);
homeCountry.appendChild(homeCountryList);

//create and append the options for home country selection
for (var i = 0; i < countries.length; i++) {
  var option = document.createElement("option");
  option.value = countries[i].code;
  option.text = countries[i].name;
  homeCountryList.appendChild(option);
}

//create and append destination country select list
var destCountryList = document.createElement("select");
destCountryList.id = "destcountry";
destCountryList.className = "dropdown";
destCountry.appendChild(destCountryList);
var selectDestination = document.createElement("option");
selectDestination.value = "";
selectDestination.text = "Please select";
destCountryList.appendChild(selectDestination);
destCountry.appendChild(destCountryList);

//create and append the options for destination country selection
for (var i = 0; i < countries.length; i++) {
  var option = document.createElement("option");
  option.value = countries[i].code;
  option.text = countries[i].name;
  destCountryList.appendChild(option);
}

// retrieve home country results from API call
var getHomeCountry = function (homeCountryCode) {
  var apiCountryUrl = "https://api.teleport.org/api/countries/iso_alpha2:" + homeCountryCode + "/";

  // make a get request to url for country
  fetch(apiCountryUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function (homeCountryData) {
          console.log(homeCountryData);
          displayHomeCountry(homeCountryData);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect");
    });
};
// retrieve destination country results from API call
var getDestCountry = function (destCountryCode) {

  var apiCountryUrl = "https://api.teleport.org/api/countries/iso_alpha2:" + destCountryCode + "/";

  // make a fetch request to API
  fetch(apiCountryUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function (destCountryData) {
          console.log(destCountryData);
          displayDestCountry(destCountryData);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect");
    });
};

// Display home country data
var displayHomeCountry = function (homeCountryData) {
  homeInfo.innerHTML = "<p>" + homeCountryData.name + ", Currency: " + homeCountryData.currency_code + "</p>";
  homeInfo.className = "home-country";
  homeCurrency = homeCountryData.currency_code;


}

// Display destination country data
var displayDestCountry = function (destCountryData) {
  destInfo.innerHTML = "<p>" + destCountryData.name + ", Currency: " + destCountryData.currency_code + "</p>";
  destInfo.className = "dest-country";
  destCurrency = destCountryData.currency_code;


}
// Make display amount empty

function displayAmountEntry() {
  currencyEntry.className = "";
}

//converet data
function convertRate() {
  exchangeRate(homeCurrency, destCurrency);
  console.log(homeCurrency);
  console.log(destCurrency);


}
//clear the button
var clearCurrency = function () {
  var currencyContainerEl = document.getElementById("currency-container");
  currencyContainerEl.innerHTML = "";

}

//fetch exchancge API
var exchangeRate = function (baseCurrency, currencyCode) {
  var apiKey = "6d29c9cf5737b60b45473240";
  var url = "https://v6.exchangerate-api.com/v6/" + apiKey + "/pair/" + baseCurrency + "/" + currencyCode;
  fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .then(function (response) {
      clearCurrency();
      console.log(response);
      amountCurrency = document.getElementById("currency-amount").value;
      console.log(amountCurrency);
      var amount = amountCurrency * response.conversion_rate;
      amount = Math.round(amount);
      console.log(amount);

      // creates currency elements
      var pElConversionRate = document.createElement("p");
      var pElTotalAmt = document.createElement("P");

      // sets currency properties
      pElConversionRate.setAttribute("id", "conversion-rate");
      pElConversionRate.textContent = "One " + baseCurrency + " = " + response.conversion_rate + " " + currencyCode;
      pElTotalAmt.setAttribute("id", "total-amount");
      pElTotalAmt.textContent = "You have " + amount + " " + currencyCode;

      // appends current currency to HTML
      currencyContainerEl.append(pElConversionRate);
      currencyContainerEl.append(pElTotalAmt);

    });
};


// function to store country searches
function storeCountries(homeSearch, destSearch, homeText, destText) {
  const countryDataObj = {
    home: homeSearch,
    homeName: homeText,
    destination: destSearch,
    destName: destText

  }
//display countries
  saveCountries.push(countryDataObj);
  console.log(saveCountries);
  window.localStorage.setItem('countryList', JSON.stringify(saveCountries));
  window.localStorage.getItem('countryList');
  JSON.parse(window.localStorage.getItem('countryList'));

  displayCountries();

}

//checking for duplicates in stored array (code from stack overflow)
function unique(arr, keyProps) {
  const kvArray = arr.map(entry => {
    const key = keyProps.map(k => entry[k]).join('|');
    return [key, entry];
  });
  const map = new Map(kvArray);
  return Array.from(map.values());
}

// function to display stored country searches
function displayCountries() {

  console.log(unique(saveCountries, ['home', 'destName', 'homeName', 'destination']));

  var uniqueResults = unique(saveCountries, ['home', 'destName', 'homeName', 'destination']);

  var text = '';
  for (var i = 0; i < uniqueResults.length; i++) {

    var options = text += "<button  id=" + uniqueResults[i].destination + " class = 'pure-button rounded' onclick='searchCountry(" + JSON.stringify(uniqueResults[i].home) + "," + JSON.stringify(uniqueResults[i].destination) + " )'>" + uniqueResults[i].homeName + " - " + uniqueResults[i].destName + "</button> <br>";
    savedResults.innerHTML = options;
  }

}
// retrieve stored country searches
function searchCountry(home, destination) {

  getHomeCountry(home);
  getDestCountry(destination);
  displayAmountEntry();

}
// add event listeners to forms
userFormEl.addEventListener("submit", formSubmitHandler);




