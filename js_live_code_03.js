function lessStr(arr, num) {
    var newArr = [];
    arr.map( function (elem) {
        if (elem.length < num ){
           newArr.push(elem)
        }
    });
    return newArr;
}

console.log(lessStr(['a', 'bc', 'def', 'ghij', 'klmno'], 4));