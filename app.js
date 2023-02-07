// app.js

'use strict';

// declare some variables

// let gridContainer = document.getElementById('grid-container');

let clickBox = document.getElementById('click-box');
let resultsButton = document.getElementById('results-button');

let roundsText = document.getElementById('rounds');
let instructionsText = document.getElementById('instructions');

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

let roundsComplete = 0;
let roundsAllowed = 15;


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.likes = 0;
}

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

let ARRAY_OF_PRODUCTS = [
  bag,
  banana,
  bathroom,
  boots,
  breakfast,
  bubblegum,
  chair,
  cthulhu,
  dogDuck,
  dragon,
  pen,
  petSweep,
  scissors,
  shark,
  sweep,
  tauntaun,
  unicorn,
  waterCan,
  wineGlass
];

console.log(ARRAY_OF_PRODUCTS);

// generate random number for array index
function selectRandomProduct() {
  return Math.floor(Math.random() * ARRAY_OF_PRODUCTS.length);
}

// empty array to hold products currently shown on screen

function renderProducts() {
  let DISPLAYED_IMAGE_ARRAY = [];

  // generate 1st random product
  // add it to the array
  let leftProduct = ARRAY_OF_PRODUCTS[selectRandomProduct()];
  DISPLAYED_IMAGE_ARRAY.push(leftProduct);

  // generate 2nd random product
  // check if it matches a product already in the array
  // if it does, generate a new product
  // if not, add it to the array
  let middleProduct = ARRAY_OF_PRODUCTS[selectRandomProduct()];
  while (DISPLAYED_IMAGE_ARRAY.includes(middleProduct)) {
    middleProduct = ARRAY_OF_PRODUCTS[selectRandomProduct()];
  }
  DISPLAYED_IMAGE_ARRAY.push(middleProduct);

  // generate 3rd random product
  // check if it matches a product already in the array
  // if it does, generate a new product
  // if not, add it to the array
  let rightProduct = ARRAY_OF_PRODUCTS[selectRandomProduct()];
  while (DISPLAYED_IMAGE_ARRAY.includes(rightProduct)) {
    rightProduct = ARRAY_OF_PRODUCTS[selectRandomProduct()];
  }
  DISPLAYED_IMAGE_ARRAY.push(rightProduct);

  console.log(DISPLAYED_IMAGE_ARRAY);

  // display all 3 products from the array
  image1.src = `${leftProduct.src}`;
  image1.alt = `${leftProduct.name}`;
  leftProduct.views++;
  console.log(leftProduct.views);
  image2.src = `${middleProduct.src}`;
  image2.alt = `${middleProduct.name}`;
  middleProduct.views++;
  console.log(middleProduct.views);
  image3.src = `${rightProduct.src}`;
  image3.alt = `${rightProduct.name}`;
  rightProduct.views++;
  console.log(rightProduct.views);
  roundsComplete++;
  console.log(roundsComplete);
}

// invoke function to display 1st set of products on initial page load
renderProducts();

// event handler for clicks
function handleProductClick(event) {
  console.log(event.target);
  console.log(event.target.alt);
  let productClicked = event.target.alt;
  for (let i = 0; i < ARRAY_OF_PRODUCTS.length; i++) {
    if (ARRAY_OF_PRODUCTS[i].name === productClicked) {
      ARRAY_OF_PRODUCTS[i].likes++;
    }
  }
  if (roundsComplete < roundsAllowed) {
    renderProducts();
  } else {
    clickBox.removeEventListener('click', handleProductClick);
    instructionsText.textContent = ('Rounds complete! Click the button to the left to see the results.');
    roundsText.remove();
    resultsButton.addEventListener('click', renderResults);
  }
}

clickBox.addEventListener('click', handleProductClick);

function renderResults() {
  let results = document.querySelector('ul');
  for (let i = 0; i < ARRAY_OF_PRODUCTS.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${ARRAY_OF_PRODUCTS[i].name} was viewed ${ARRAY_OF_PRODUCTS[i].views} times and received ${ARRAY_OF_PRODUCTS[i].likes} likes`;
    results.appendChild(li);
  }
  resultsButton.removeEventListener('click', renderResults);
}
