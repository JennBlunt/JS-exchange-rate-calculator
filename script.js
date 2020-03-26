const currencyElOne = document.getElementById('currency-one');
const amountElOne = document.getElementById('amount-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElTwo = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function caclulate() {
  const currency_one = currencyElOne.value;
  const currency_two = currencyElTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];

      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
}

// Event listeners
currencyElOne.addEventListener('change', caclulate);
amountElOne.addEventListener('input', caclulate);
currencyElTwo.addEventListener('change', caclulate);
amountElTwo.addEventListener('input', caclulate);

swap.addEventListener('click', () => {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;
  caclulate();
});

caclulate();
