var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

function concatArr(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr
}

console.log(concatArr(arr1, arr2));