/******************
 * YOUR CODE HERE *
 ******************/
function onlyOdds(nums) {
  const odds = [];

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 1){
          odds.push(nums[i]);
      }
  }
  return odds;
}

function onlyEvens(nums) {
  const evens = [];

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0){
          evens.push(nums[i]);
      }
  }
  return evens;
}

function shortNamesOnly(names) {
  const shortNames = [];
    
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < 7){
      shortNames.push(names[i])
    }
  }
  return shortNames;
}

function sNames(names) {
  const namesWithAnS = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'S'){
    namesWithAnS.push(names[i]) 
    }
  }
  return namesWithAnS;
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
}
