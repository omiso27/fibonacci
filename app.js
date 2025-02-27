'use strict';
const memo = new Map(); //連想配列
memo.set(0,0); //最初のルール
memo.set(0,1);

function fib(n) {
  if (memo.has) { //.hasは、n番目を持っていたらreturnを返す
    return memo.get(n);
  } const value = fib(n-1) + fib(n-2); //
  memo.set(n,value);
  return value;
}

/**
 * 
 * function fib(n) {
 *  if (n===0) {
 *    return 0;
 *  } else if (n ===1) {
 *    return 1;
 *  }
 *  return fib(n-1) + fib(n-2);
 * }
 * 
 * n === 2
 * return fib(2-1) + fib(2-2);
 * return fib(1)+fib(0);
 * return 1+0;
 * return 1;
 * 
 * n === 3
 * return fib(3-1) + fib(3-2);
 * return fib(2)+fib(1);
 * return fib(1)+fib(0) +fib(1);
 * return 1 + 0 + 1;
 * return 2;
 * 
 */

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
