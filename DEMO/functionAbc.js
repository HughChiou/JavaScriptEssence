function rangeClosed(startInclusive, endInclusive, step) {
    var s = step || 1;
    var numbers = [startInclusive];
    for (var i = 0; numbers[i] < endInclusive; i++) {
        numbers.push(numbers[i] + s);
    }
    return numbers;
}

rangeClosed(1,16,3).forEach(function(element) {
    console.log(element);
}, this);

rangeClosed(1,5).forEach(function(element) {
    console.log(element);
}, this);