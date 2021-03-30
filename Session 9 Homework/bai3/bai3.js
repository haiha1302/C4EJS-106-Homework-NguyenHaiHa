let reloadBtn = document.getElementById('reload-btn')
let quoteText = document.getElementById('quote-text')
let quoteAuthor = document.getElementById('quote-author')

reloadBtn.addEventListener('click', reload)

function reload() {
    let quote = randomQuote[Math.floor(Math.random() * randomQuote.length)]
    quoteText.innerHTML = quote.quoteText
    quoteAuthor.innerHTML = quote.quoteAuthor
    console.log(quoteText);
}