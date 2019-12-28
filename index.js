//Hemmingway

function fibonacci(size) {
    var first = 0, second = 1, next, count = 2, result = [first, second];

    if (size < 2) {
        return "not long enough"
    }

    while (count++ < size) {
        next = first + second;
        first = second;
        second = next;
        result.push(next);
    }

    return result;
}

console.log(fibonacci(5));
