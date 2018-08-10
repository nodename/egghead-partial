const plus = (x, y) => x + y;
const lessThan = (x, y) => x < y;

// specializing by using a fixed first argument:

const plus1 = y => plus(1, y);
const twoIsLessThan = y => lessThan(2, y);

const makePlusX = x => y => plus(x, y);
/* old style:

function makePlusX(x) {
  return function(y) {
    return plus(x, y);
  };
}
*/

const plus2 = makePlusX(2);
console.log(plus2(5));
console.log(makePlusX(2)(5));

const makeXIsLessThan = x => y => lessThan(x, y);
const fourIsLessThan = makeXIsLessThan(4);
console.log(fourIsLessThan(2));
console.log(fourIsLessThan(5));