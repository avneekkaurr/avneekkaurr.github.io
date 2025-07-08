var quoteList =
  [
  "I was born with hearing loss, I wear hearing aids!", 
  "There's a picture of me on the computer when I was a baby, so I jokingly use it to show people why I love coding.", 
  "I have always wanted to have a baking business, but I'm not sure how to go about it.", 
]; 

var myButton = document.getElementById("myButton"); // Create a button variable that calls the HTML button named "myButton"

var quote = document.getElementById("quote"); // Create a button variable that calls the HTML id named "quote"

var counter = 0; // Assign counter variable to start at 0 to prevent any errors

myButton.addEventListener("click", displayQuote); // When myButton is clicked, the displayQuote function will be displayed

function displayQuote()
  {
    quote.innerHTML = quoteList[counter]; // Gets "quote" id from deep inside the HTML and assigns it to the quoteList and its index (location)

    counter++; // Increment counter to go to the next quote when button is clicked

    if (counter == quoteList.length)
    {
      counter = 0; // If there are no more quotes left in the array (list) of quotes, the count will reset (start at the first quote again). Otherwise, it would give us "undefined".
    }
  }


function showOverlay(){

  document.getElementById('overlay').style.display="block";
}
window.addEventListener("load",showOverlay);

// Add event listener to proceed by closing the overlay when clicked
var proceed = document.getElementById("proceed");
proceed.addEventListener("click",closeOverlay);


// Closes the overlay
function closeOverlay(){
  document.getElementById("overlay").style.display="none";
}
