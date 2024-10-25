import './style.css';

const url = 'https://qapi.vercel.app/api/random';
const text = document.getElementById('quote');
const setter = (quote) => {
  text.textContent = quote;
}

const quoteGetter = () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setter(data.quote)
    })
}

setter(quoteGetter(url));
