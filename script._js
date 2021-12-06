const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = words.filter((word) => word.length > 3);
// const result = words.map(word => word.length>6 );

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// keydown > keypress > input > keyup
// Pressing down a key triggers the keydown event.
// Pressing down a printable key triggers the keypress event.
// Releasing a key triggers the keyup event.

document.addEventListener('keydown', function (e) {
  this.body.style.backgroundColor = 'yellow';
  console.log(
    '\nkeydown ----- yellow',
    'keyCode numeric: ',
    e.keyCode,
    'charCode ASCII: ',
    e.charCode,
    'key value: ',
    e.key,
    'which num or charCode: ',
    e.which,
    'keyIdentifier string: ',
    e.keyIdentifier,
    'code: ',
    e.code
  );
});
document.addEventListener('keypress', function (e) {
  this.body.style.backgroundColor = 'gold';
  console.log(
    '\nkeypress ----- gold',
    'keyCode numeric: ',
    e.keyCode,
    'charCode ASCII: ',
    e.charCode,
    'key value: ',
    e.key,
    'which num or charCode: ',
    e.which,
    'keyIdentifier string: ',
    e.keyIdentifier,
    'code: ',
    e.code
  );
});
document.addEventListener('keyup', function (e) {
  // this.body.style.backgroundColor = 'orange';
  this.body.style.backgroundColor = 'white';
  console.log(
    '\nkeyup ----- orange',
    'keyCode numeric: ',
    e.keyCode,
    'charCode ASCII: ',
    e.charCode,
    'key value: ',
    e.key,
    'which num or charCode: ',
    e.which,
    'keyIdentifier string: ',
    e.keyIdentifier,
    'code: ',
    e.code
  );
});

// Touch
// document.addEventListener('touchstart', function (e) {
//   this.body.style.backgroundColor = 'tamato';
// });

document.addEventListener('touchstart', function () {
  this.body.style.backgroundColor = 'red';
});
document.addEventListener('touchend', function () {
  this.body.style.backgroundColor = 'pink';
});
document.addEventListener('touchmove', function () {
  this.body.style.backgroundColor = 'hotpink';
});
document.addEventListener('touchcancel', function () {
  this.body.style.backgroundColor = 'white';
});
