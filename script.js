var cards = document.getElementsByClassName("card");

var myFunction = function() {
    document.getElementById("slide-animation")("slide-animate-active");
};

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', myFunction, false);
}