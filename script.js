const convertBotton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currencySelect");
const currencySelectToConvert = document.querySelector(".currencySelectToConvert");
const currencyImageToConvert = document.querySelector(".currencyImgToConvert");
const currencyToConvert = document.querySelector(".currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");

convertBotton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert);

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input").value;

    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 4.81;
    const euroToday = 5.27;
    const libraToday = 6.15;
    const bitcoinToday = 122551.82;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency", //moeda
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelectToConvert.value == "real" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BRL"
        }).format(inputCurrencyValue);

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //moeda
        currency: "BRL"
    }).format(inputCurrencyValue)

    // Convertendo valores com o seletor de cima

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency", //moeda
            currency: "EUR"
        }).format(inputCurrencyValue * 0.912);

    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", //moeda
            currency: "BRL"
        }).format(inputCurrencyValue * 4.82);
    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.78);
    }

    if (currencySelectToConvert.value == "dolar" && currencySelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //moeda
            currency: "USD"
        }).format(inputCurrencyValue);

        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.000038)
    }

    //continuar a converter as outra moedas pelo euro, e depois pela libra, e depois pelo bitcoin




}

const currencyConverted = document.querySelector(".currency-converted");
const currencyImage = document.querySelector(".currency-img");

function changeCurrency() {

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyConverted.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyConverted.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/brasil.png"
    }

    convertValues();
}

function changeCurrencyToConvert() {

    if (currencySelectToConvert.value == "euro") {
        currencyToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro.png"
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/dolar.png"
    }

    if (currencySelectToConvert.value == "real") {
        currencyToConvert.innerHTML = "Real Brasileiro"
        currencyImageToConvert.src = "./assets/brasil.png"
    }

    if (currencySelectToConvert.value == "libra") {
        currencyToConvert.innerHTML = "Libra"
        currencyImageToConvert.src = "./assets/libra.png"
    }

    if (currencySelectToConvert.value == "bitcoin") {
        currencyToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = "./assets/bitcoin.png"
    }

    convertValues()
}






