function getSum(arr) {
    var result = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);
    return result;
}

console.log(getSum([1, 2, 3, 4, 5, 6]));