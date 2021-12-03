//Function makeClickHandler

// Document elements we work on
const incrementButton = document.querySelector("#increment-button");
const decrementButton = document.querySelector("#decrement-button");
const counter = document.querySelector("#counter-display");

// Application state
let numberOfClicks = 0;

// Screen update logic
function updateCounterDisplay() {
	counter.textContent = numberOfClicks;
}			

// Click handler generator
function makeClickHandler(delta) {
	// it returns new function which can be used as click handler
	return function () {
		numberOfClicks += delta;
		numberOfClicks = Math.min(numberOfClicks, 9);
		numberOfClicks = Math.max(numberOfClicks, 0);
		updateCounterDisplay();
	};
}

	// Click handlers (created using click handler generator)
	const handleIncrementClick = makeClickHandler(+1);
const handleDecrementClick = makeClickHandler(-1);

// Register click handlers to listen for 'click' event
incrementButton.addEventListener("click", handleIncrementClick);
decrementButton.addEventListener("click", handleDecrementClick);


//Function 
const cart = document.querySelector(".cart")
const basket = document.querySelector('.basket')
const bastitle = document.querySelector('.bastitle')
const bastext = document.querySelector('.bastext')

cart.addEventListener('click', ()  => {
	cart.classList.toggle("newCart");
	basket.classList.toggle("newBasket");
	bastitle.classList.toggle("newBastitle");
	bastext.classList.toggle("newBastext");
});
