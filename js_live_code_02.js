function delElem(arr, ind) {
    arr.splice(ind, 1);
    return arr;
}

console.log(delElem(['a', 'b', 'c', 'd'], 2));