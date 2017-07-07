//All variables are defined (1-9)
var quoteToPrint;
var sourceToPrint;
var citationToPrint;
var yearToPrint;
var categoryToPrint;
var counter = 0;
var backgroundColor;
var intervalID;

// event listener to respond to "Show another quote" button clicks
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create timer function that calls printQuote every 8 seconds (14-17)
function timer() {
	intervalID = setInterval(printQuote, 8000 );
	};

//Create function to reset timer (20-22)
function stopTimer() {
	clearInterval(intervalID);
};
//Calls timer on page load
timer();

//Define getRandomQuote
function getRandomQuote(){
	//Random number 0-4 to select array value
	var number = Math.floor(Math.random() * 5)
	//Checks if quote has been used since last reset, else passes data to global scope, then to printQuote() (31-60)
	if (quotes[number].used == true){
		getRandomQuote()
	}
	else {
		quoteToPrint = quotes[number].quote;
		sourceToPrint = quotes[number].srce;
		citationToPrint = quotes[number].citation;
		yearToPrint = quotes[number].year;
		categoryToPrint = quotes[number].category;
		//Generates  "rgb(---, ---, ---) color"
		backgroundColor = "rgb(" + Math.floor(Math.random()*256).toString() + ", " + Math.floor(Math.random()*256).toString() + ", " + Math.floor(Math.random()*256).toString() + ")"

		//Gets quote ID and logs to console to check for no repeat
		quoteID = quotes[number].quote_id;
		console.log(quoteID);

		//Sets data pair with key "used" to true, so that we don't use it again
		quotes[number].used = true;

		//Increases counter by 1
		counter += 1;

		//Once all quotes have been displayed, reset "used" to false, reset counter to 0
		if (counter == 5) {
			for (i = 0; i < 5; i+=1) {
				quotes[i].used = false;
				counter = 0;
			}
		}
	}
}

function printQuote() {
	//Stop timer
	stopTimer();
	getRandomQuote();
	//Modify index.html to change quote (68-70)
	var outputQuote = document.getElementById('quote-box');
	outputQuote.innerHTML = '<p class="quote">' + quoteToPrint + '</p>' + '<p class="source">' + sourceToPrint + '<span class="citation">' + citationToPrint + '</span><span class="year">' + yearToPrint + '</span><span class="year">' + categoryToPrint + '</span></p>';
	document.getElementById('body_quote').style.backgroundColor = backgroundColor;
	//Start timer again once quote has changed
	timer();
}
//Array of quotes (75-81)
var quotes = [
	{quote: 'Don’t Cry Because It’s Over; Smile Because It Happened', srce: 'Ludwig Jacobowski', citation:'The best-known poem', year: '1988', category: 'Happiness', used: false, quote_id: 1},
	{quote: 'Be yourself; everyone else is already taken', srce: 'Oscar Wilde', citation: 'The Wit & Wisdom of Oscar Wilde', year: 1996, category: 'Honesty', used: false, quote_id: 2},
	{quote: 'So many books, so little time', srce: 'Frank Zappa', citation: 'So many books, so little time', year: 2003, category: 'Learning', used: false, quote_id: 3},
	{quote: 'If you tell the truth, you don\'t have to remember anything', srce: 'Mark Twain', citation: 'Mark Twain\'s notebook', year: 1894, category: 'Honesty', used: false, quote_id: 4},
	{quote: 'Always forgive your enemies; nothing annoys them so much', srce: 'Oscar Wilde', citation: 'The Wit & Wisdom of Oscar Wilde', year: 1996, category: 'Forgivness', used: false, quote_id: 5}
];
//Null
