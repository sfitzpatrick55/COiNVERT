// console.log("Can you believe this is working?");

const resultsContainer = document.querySelector("resultsContainer");

const logo = document.getElementById("cryptoLogo");
const button = document.getElementById("convertButton");

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD";


button.addEventListener("click", fetchCoins);

let bitcoin;
let ethereum;
let usdCoin;
let dogeCoin;

async function fetchCoins() {
    const response = await fetch(baseURL);
        // console.log(response);
    console.log(response.status);

    if (response.status === 200) {
        const json = await response.json();
        // console.log(json);
        searchCoins(json);
        console.log(bitcoin, ethereum, usdCoin, dogecoin);
        return json;
    } else {
        console.log("Error");
    }
    // console.log(json);
}

function searchCoins(coinJSON) {
    console.log(coinJSON, "Hey this is coming from line 30");
    
    bitcoin = coinJSON.find(({ symbol }) => symbol === "btc");
    ethereum = coinJSON.find(({ symbol }) => symbol === "eth");
    usdCoin = coinJSON.find(({ symbol }) => symbol === "usdc");
    dogecoin = coinJSON.find(({ symbol }) => symbol === "doge" )
}




// fetch(baseURL);
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// function displayCoins() {
//     console.log();

    // let BTC = document.createElement("p");
    // BTC.id = "BTC";
    // BTC.innerHTML =

