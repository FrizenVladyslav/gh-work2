const arr = [2, 1, 3, 4, 10, 23, 12312, 1231, 432, 3423, 2433];

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

function min(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < +min) {
      min = +arr[i];
    } 
  }
  return min;
}

function max(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > +max) {
      max = +arr[i];
    } 
  }
  return max;
}

function replaceMinMax(arr) {
  const createValue = (index, value) => ({ index, value });
  let [min, max] = [createValue(0, arr[0]), createValue(0, arr[0])];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min.value) {
      min = createValue(i, arr[i]);
    } 
    if (arr[i] > max.value) {
      max = createValue(i, arr[i]);
    }
  }

  arr[max.index] = min.value;
  arr[min.index] = max.value;
  return arr;
}

function withCallback(callback, ...args) {
  return callback(...args);
}

function replaceNumberToString(...numbers) {
  numbers = [...numbers];

  return numbers
    .map(num => {
      switch (true) {
        case !(num % 7) && !(num % 3):
          return "foobar";
        case !(num % 7):
          return "bar";
        case !(num % 3):
          return "foo";
        default:
          return num;
      }
    })
    .join(" ");
}

function findMatchPercent(str1, str2) {
  const max = Math.max(str1.length, str2.length);
  let result = 0;

  for (let i = 0; i < max; i++) { 
    if (str1[i] === str2[i]) {
      ++result;
    } 
  }

  result = (result / max) * 100;
  return Number.isInteger(result) ? result : result.toFixed(2) 
}
