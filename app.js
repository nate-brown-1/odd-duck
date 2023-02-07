// app.js

'use strict';

// declare some variables

let gridContainer = document.getElementById('grid-container');

let clickBoxes = document.getElementById('click-box');

let image1 = document.getElementById('image-1-box');
let image2 = document.getElementById('image-2-box');
let image3 = document.getElementById('image-3-box');

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

function selectRandomProduct() {
  return Math.floor(Math.random * ARRAY_OF_PRODUCTS.length);
}

selectRandomProduct();

console.log(ARRAY_OF_PRODUCTS.length);
