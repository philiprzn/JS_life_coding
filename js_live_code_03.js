function lessStr(arr, num) {
    var newArr = [];
    arr.map( function (elem) {
        // console.log(elem.length );
        if (elem.length < num ){
           newArr.push(elem)
        }
    });
    // console.log(newArr);
    return newArr;
}

console.log(lessStr(['a', 'bc', 'def', 'ghij', 'klmno'], 4));