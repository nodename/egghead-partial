const plus = (x, y) => x + y;
const lessThan = (x, y) => x < y;

const arrayMap = (f, array) => array.map(f);
const arrayFilter = (f, array) => array.filter(f);
const arrayForEach = (f, array) => array.forEach(f);

const plus1 = y => plus(1, y);

console.log(plus1(13));

const twoIsLessThan = y => lessThan(2, y);

const tester = array => arrayFilter(twoIsLessThan, array);

console.log(arrayMap(twoIsLessThan, [1, 3]));
console.log(tester([1, 3]));

const printer = x => console.log("value = " + x);

arrayForEach(printer, [1, 2, 3]);
