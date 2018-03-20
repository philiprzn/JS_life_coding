// function findBiggest(arr) {
//     var max;
//
//     function compareNumeric(a, b) {
//         return a - b;
//     }
//     arr.sort(compareNumeric);
//
//     return max = arr.pop();
//
// }


console.log(findBiggest([45, 1, 312, 78, 45, 15, 46, 47, 48, 53, 126, 234]));


function findBiggest(arr) {

    var max = arr.reduce(function (prev, current) {
        return prev < current ? current : prev;
    });
    return max

}