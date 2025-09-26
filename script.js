let amountInput = document.getElementById("amount");
let from = document.getElementById("fromCurrency");
let to = document.getElementById("toCurrency");
let resultdiv = document.getElementById("result");
let convertBtn = document.getElementById("convertBtn");
let refreshBtn = document.getElementById("RefreshBTN");
const rates = {
    "USD": 1,
    "EGP": 50,
    "EUR": 0.9,
    "GBP": 0.78,
    "SAR": 3.75
};

function convertCurrency() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        resultdiv.classList.remove("d-none", "alart-success");
        resultdiv.classList.add("alert-danger");
        resultdiv.innerText = "⚠️ Please enter a valid amount!";
        return;
    }

    if (from.value === to.value) {
        resultdiv.classList.remove("d-none", "alert-danger");
        resultdiv.classList.add("alart-success");
        resultdiv.innerText = `Same Currency: ${amount} ${to.value}`;
        return;
    }

    let inUSD = amount / rates[from.value];
    let convertedAmount = (inUSD * rates[to.value]).toFixed(2);

    resultdiv.classList.remove("d-none", "alert-danger");
    resultdiv.classList.add("alart-success");
    resultdiv.innerText = `${amount} ${from.value} = ${convertedAmount} ${to.value}`;
}

convertBtn.addEventListener("click", convertCurrency);
refreshBtn.addEventListener("click", () => {
    location.reload();
}); 