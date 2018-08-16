const plus = (x, y) => x + y;
const lessThan = (x, y) => x < y;

const makePlusX = x => y => plus(x, y);
const makeXIsLessThan = x => y => lessThan(x, y);

const partial = (f, x) => y => f(x, y);

const plus1 = partial(plus, 1);
const plus5 = partial(plus, 5);
console.log(plus1(13));
console.log(plus5(13));

const twoIsLessThan = partial(lessThan, 2);
const fourIsLessThan = partial(lessThan, 4);

const data = [1, 3];

const arrayMap = (f, array) => array.map(f);
const arrayFilter = (predicate, array) => array.filter(predicate);

/*
const incrementAll = array => arrayMap(plus1, array);
const add5toAll = array => arrayMap(plus5, array);
*/
const incrementAll = partial(arrayMap, plus1);
const add5toAll = partial(arrayMap, plus5);
console.log(incrementAll(data));
console.log(add5toAll(data));

/*
const filter_twoIsLessThan = array => arrayFilter(twoIsLessThan, array);
const filter_fourIsLessThan = array => arrayFilter(fourIsLessThan, array);
*/
const filter_twoIsLessThan = partial(arrayFilter, twoIsLessThan);
const filter_fourIsLessThan = partial(arrayFilter, fourIsLessThan);
console.log(filter_twoIsLessThan(data));
console.log(filter_fourIsLessThan(data));

