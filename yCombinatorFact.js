'use strict';
export default (number) => ((fn) => fn(fn, number))((f, n) => (n <= 1)? 1: n * f(f, (n - 1)))
