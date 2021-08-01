const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loaderJs = document.getElementById('loader');


let apiQuotes = [];

//Show loading
//note hidden is used to hide any html element
function loading() {
    loaderJs.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    quoteContainer.hidden = false;
    loaderJs.hidden = true;
}


// Secondly we do -- show new quote

function newQuote() {
    loading();
    // pick random quote from apiQuotes array

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    complete();
    //if author is not there

    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = quote.author;
    }

}

//First we do - get quotes from API

async function getQuote() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }
    catch (error) {

    }
}


//Event listeners

newQuoteBtn.addEventListener('click', newQuote);

//on load
getQuote();
