var footer = document.getElementsByTagName("footer")[0];
var hamburger = document.getElementsByClassName("navbar-toggler")[0];
var cards = document.getElementsByClassName("card");
var editCardOne = document.getElementsByClassName("btn-sm btn-outline-secondary")[0];
var editCardTwo = document.getElementsByClassName("btn-sm btn-outline-secondary")[1];
var navBar = document.getElementsByTagName("header")[0];
var leftJumbotron = document.getElementsByClassName("jumbotron")[0].getElementsByClassName("btn-secondary")[0];
var rightJumbotron = document.getElementsByClassName("jumbotron")[0].getElementsByClassName("btn-primary")[0];
var rowCard = document.getElementsByClassName("row");
var colCards = document.getElementsByClassName("col-md-4");
var logo = document.getElementsByClassName("navbar-brand")[0];

var clickCounter = 0;
var onFooterClick = function () {
  console.log("clique");
  clickCounter += 1;
  console.log(clickCounter);
};

var onHamburgerClick = function () {
  document.getElementById("navbarHeader").classList.toggle("collapse");
}

var onEditCardOne = function () {
  editCardOne.style.color = "red";
}

var onEditCardTwo = function () {
  if (editCardTwo.style.color == "green") {
    editCardTwo.style.color = "";
  } else {
    editCardTwo.style.color = "green";
  }
}

var doubleClickOnNavbar = function() {
  let link = document.querySelector("link")
  console.log(link.href)
  if (link.href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
    link.href = "";
  } else {
    link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
};

var overCards = function(index) {
  console.log("Test")
  console.log(index)
  cards[index].getElementsByTagName("img")[0].style = "width: 20%";
  cards[index].getElementsByClassName("card-text")[0].classList.add("collapse");
}

var outCards = function(index) {
  cards[index].getElementsByClassName("card-text")[0].classList.remove("collapse");
  cards[index].getElementsByTagName("img")[0].style = "";
}

var nextCard = function() {
  colCards[0].parentNode.insertBefore(colCards[colCards.length - 1], colCards[0])
}

var previousCard = function(){
  colCards[0].parentNode.insertBefore(colCards[0], colCards[colCards.length - 1].nextSibling)
}

footer.addEventListener('click', onFooterClick);
hamburger.addEventListener("click", onHamburgerClick);
editCardOne.addEventListener("click", onEditCardOne);
editCardTwo.addEventListener("click", onEditCardTwo);
navBar.addEventListener("dblclick", doubleClickOnNavbar);
for (let index = 0; index < cards.length; index++) {
  cards[index].getElementsByClassName("btn-success")[0].addEventListener("mouseover", function (){
    overCards(index);
  });
  cards[index].getElementsByClassName("btn-success")[0].addEventListener("mouseout", function (){
    outCards(index);
  });
}
leftJumbotron.addEventListener("click", nextCard);
rightJumbotron.addEventListener("click", function(event) {
  event.preventDefault();
});
rightJumbotron.addEventListener("click", previousCard );