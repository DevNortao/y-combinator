'use strict';
const fact = (n) => (n < 2)? 1: n * fact(n - 1);

module.exports = fact;
