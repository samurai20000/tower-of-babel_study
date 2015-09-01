const max = process.argv[2];

let FizzBuzz = function*() {
    let currentValue = 1, result = null;
    while (currentValue <= max) {
        if (currentValue % 15 == 0) {
            result = 'FizzBuzz';
        } else if (currentValue % 3 == 0) {
            result = 'Fizz';
        } else if (currentValue % 5 == 0) {
            result = 'Buzz';
        } else {
            result = currentValue;
        }
        currentValue +=1
        yield result;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}
