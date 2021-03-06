
const button = document.getElementById("generate-btn");
const viewQuote = document.querySelector('h3');
const viewAuthor = document.querySelector('h5');

var quotesArray = [
    {id: 101,
    Quote: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    Author: "Walt Disney"},

    {id: 102,
        Quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        Author: "Winston Churchill"},

    {id: 103,
        Quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
        Author: "Will Rogers"},

    {id: 104,
        Quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
        Author: "Unknown"},

    {id: 105,
        Quote: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
        Author: "Vince Lombardi"},
        
];


function generateQuote() {
    console.log("It's working");


    //generate a random number
    let pos = Math.floor(Math.random() * quotesArray.length);

    console.log(pos);

    let quote = quotesArray[pos].Quote;
    console.log(quote);

    let author = quotesArray[pos].Author;
    console.log(author)

    viewQuote.innerHTML = quote;
    viewAuthor.innerHTML = author;
    
}

window.onload = function() {
    if (button) {
        button.addEventListener('click', generateQuote);
    }else{
        console.log("Something is wrong!");
    }
}

