# 💱 Currency Converter

A simple and interactive Currency Converter web application built using **HTML, CSS, and JavaScript**.

This project allows users to convert amounts between different currencies instantly using predefined exchange rates.

---

## 🚀 Live Demo

👉 Add your GitHub Pages link here (if deployed)

Example:
https://your-username.github.io/-Currency-Converter/

---

## 📌 Project Overview

This application allows users to:

- Enter an amount
- Select a source currency
- Select a target currency
- Convert instantly
- Reset the form

The conversion logic is handled using JavaScript and a predefined exchange rate object.

---

## 🛠 Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)

---

## ✨ Features

✅ Convert between multiple currencies  
✅ Input validation for invalid amounts  
✅ Handles same-currency conversion  
✅ Reset button to reload the app  
✅ Clean and modern UI design  

---

## 💰 Supported Currencies

The app currently supports:

- USD (US Dollar)
- EGP (Egyptian Pound)
- EUR (Euro)
- GBP (British Pound)
- SAR (Saudi Riyal)

---

## ⚙️ How It Works

Exchange rates are stored inside a JavaScript object:

```javascript
const rates = {
    "USD": 1,
    "EGP": 50,
    "EUR": 0.9,
    "GBP": 0.78,
    "SAR": 3.75
};
````

### Conversion Logic

1. Convert the selected currency to USD.
2. Convert USD to the target currency.

```javascript
let inUSD = amount / rates[from.value];
let convertedAmount = (inUSD * rates[to.value]).toFixed(2);
```

---

## 📂 Project Structure

```
-Currency-Converter
│
├── index.html
├── script.js
└── docs (screenshots folder)
```

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](docs/Screenshot%202026-02-15%20080407.png)

### 💱 Conversion Result
![Conversion Result](docs/Screenshot%202026-02-15%20080444.png)

---

## 🧪 Testing Scenarios

You can test the project by:

* Entering a valid amount
* Trying invalid input (like text or negative numbers)
* Converting between different currencies
* Selecting the same currency for both fields
* Clicking reset

---

## ⚠️ Limitations

* Exchange rates are static (hardcoded).
* Not connected to a live currency API.

---

## 🚀 Future Enhancements

* Connect to a real-time currency API
* Add more currencies
* Add currency flags
* Add animations
* Improve UI responsiveness

---

## 👩‍💻 Author

**Kholoud Diaa**
