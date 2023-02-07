// app.js

'use strict';

// declare some variables

let gridContainer = document.getElementById('grid-container');

let clickBoxes = document.getElementById('click-box');

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

const ARRAY_OF_PRODUCTS = [];

// constructor function to generate Product objects
// name, picture, views counter, likes counter
// push to array of products

function Product (name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.likes = 0;
  ARRAY_OF_PRODUCTS.push(this);
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

console.log(ARRAY_OF_PRODUCTS);

// generate random number for array index
function selectRandomProduct() {
  return Math.floor(Math.random() * ARRAY_OF_PRODUCTS.length);
}

// empty array to hold products currently shown on screen
const DISPLAYED_IMAGE_ARRAY = [];

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
image1.src = `${DISPLAYED_IMAGE_ARRAY[0].src}`;
image2.src = `${DISPLAYED_IMAGE_ARRAY[1].src}`;
image3.src = `${DISPLAYED_IMAGE_ARRAY[2].src}`;

