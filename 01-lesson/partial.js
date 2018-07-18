const plus = (x, y) => x + y;
const lessThan = (x, y) => x < y;

const plus1 = y => plus(1, y);
console.log(plus1(1));
console.log(plus1(3));

const data = [1, 3];

const arrayMap = (f, array) => array.map(f);

let newData = arrayMap(plus1, data);
console.log(newData);

const twoIsLessThan = y => lessThan(2, y);
console.log(twoIsLessThan(1));
console.log(twoIsLessThan(3));
console.log(arrayMap(twoIsLessThan, data));

const arrayFilter = (predicate, array) => array.filter(predicate);

const twoTester = array => arrayFilter(twoIsLessThan, array);
console.log(twoTester(data));

const printer = x => console.log("value = " + x);

const arrayForEach = (f, array) => array.forEach(f);

arrayForEach(printer, data);
