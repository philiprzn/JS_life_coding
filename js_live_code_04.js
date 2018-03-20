function getSum(arr) {
    var result = 0;
    for ( var i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

console.log(getSum([1, 2, 3, 4, 5, 6]));