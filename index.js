// console.log("Can you believe this is working?");

const resultsContainer = document.querySelector("resultsContainer");

const logo = document.getElementById("cryptoLogo");
const input = document.getElementById("dollarAmount");
const button = document.getElementById("convertButton");

const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD";

console.log(input);
input.addEventListener("keyup", function(event) {
    console.log(event.target.value);
});
button.addEventListener("click", fetchCoins);

let bitcoin;
let ethereum;
let usdCoin;
let dogeCoin;

// SOME STYLING
document.getElementById("coinHeader").style.textAlign = "center";

document.getElementById("cryptoLogo").style.textAlign = "center";

document.getElementById("form").style.textAlign = "center";

document.getElementById("coinFooter").style.textAlign = "center";

// FETCH API AND RETURNING AS JSON
async function fetchCoins() {
    const response = await fetch(baseURL);
        // console.log(response);
    console.log(response.status);

    if (response.status === 200) {
        const json = await response.json();
        // console.log(json);
        searchCoins(json);
        // console.log(bitcoin, ethereum, usdCoin, dogecoin);
        return json;
    } else {
        console.log("Error");
    }
    // console.log(json);
}
console.log(input);
let userDollars = document.querySelector("dollarAmount").value;

// SEARCHING THE JSON DATA FOR SPECIFIC COINS
function searchCoins(coinJSON) {
    // console.log(coinJSON, "Hey this is coming from line 30");
    
    // grabUserDollars()
    
    bitcoin = coinJSON.find(({ symbol }) => symbol === "btc");
    ethereum = coinJSON.find(({ symbol }) => symbol === "eth");
    usdCoin = coinJSON.find(({ symbol }) => symbol === "usdc");
    dogecoin = coinJSON.find(({ symbol }) => symbol === "doge");
    

    let btcCalc = userDollars / bitcoin.current_price;
    let ethCalc = userDollars / ethereum.current_price;
    let usdcCalc = userDollars / usdCoin.current_price;
    let dogeCalc = userDollars / dogecoin.current_price;

    document.getElementById("BTC").innerHTML = `You could purchase <strong>${btcCalc}</strong> ${bitcoin.name} (${bitcoin.symbol})<br /> Current price per coin: $${bitcoin.current_price}`;
    
    document.getElementById("ETH").innerHTML = `You could purchase <strong>${ethCalc}</strong> ${ethereum.name} (${ethereum.symbol})<br /> Current Price per Coin: $${ethereum.current_price}`;

    document.getElementById("USDC").innerHTML = `You could purchase <strong>${usdcCalc}</strong> ${usdCoin.name} (${usdCoin.symbol})<br /> Current Price per Coin: $${usdCoin.current_price}`;

    document.getElementById("DOGE").innerHTML = `You could purchase <strong>${dogeCalc}</strong> ${dogecoin.name} (${dogecoin.symbol})<br /> Current Price per Coin: $${dogecoin.current_price}`;
}