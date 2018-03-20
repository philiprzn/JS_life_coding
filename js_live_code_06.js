function powEvery(arr, num) {

    var newArr = [];

    arr.map(function (elem, i) {
        newArr[i] = Math.pow(arr[i], num);
    });

    return newArr;
}

console.log(powEvery([2, 3, 5], 3));


/// 5 и 6 через reduce