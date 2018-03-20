function sortArr(arr) {

    function compareNumeric(a, b) {
        return a - b;
    }
    arr.sort(compareNumeric);

    return arr;
};
    


console.log(sortArr([2, 6, 8, 12, 1, 3, 7, 26, 14]));