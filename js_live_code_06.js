function powEvery(arr, num) {

    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr[i] = Math.pow(arr[i], num)
    };

    return newArr;
}

console.log(powEvery([2, 3, 5], 3));


/// 5 и 6 через reduce