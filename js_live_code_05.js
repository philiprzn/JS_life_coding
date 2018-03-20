function findBiggest(arr) {
    var max;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[i + 1]){
            max = arr[i];
        }
    }
    return max;
    // var max = Math.max(arr);
    // return max;
}


console.log(findBiggest([1, 3, 7, 45, 15]));