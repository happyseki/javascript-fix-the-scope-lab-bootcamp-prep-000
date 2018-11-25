var animal = 'dog';

function myAnimal() {
  return animal;
}
myAnimal();

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal;
}
yourAnimal();

function add2() {
  const n = Math.floor(Math.random() * 1000);
   const two = 2;
  return n + two;

  // Feel free to move things around!

}
add2();

function funkyFunction () {
  
  return function() {
    return "FUNKY!";
  };
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();
theFunk();
