import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.0');
console.log(`I would pay ${courseValue} for the awesome course`); //eslint-disable-line no-console
