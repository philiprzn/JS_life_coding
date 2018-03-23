var arr = [
        {
            code : "fruit",
            name : "Яблоко",
            price : 55,
        },
        {
            code : "vegetable",
            name : "Огурец",
            price : 77,
        },
        {
            code : "clothes",
            name : "Толстовка",
            price : 500,
        },
        {
            code : "clothes",
            name : "Джинсы",
            price : 1050,
        },
        {
            code : "vegetable",
            name : "Кабачок",
            price : 80,
        },
        {
            code : "vegetable",
            name : "Капуста",
            price : 150
        }
    ],
    arrCodes = ['fruit', 'vegetable'],
    newCode = 'food';




function sortAr(arr, codes, newCode) {

    var arrCodes = [],
        strProps,
        newObj = {},
        arrNames = [],
        arrPrices = [],
        sum = 0;

    codes.forEach(function (code) {

        arr.forEach(function (object, iter) {

            for (var prop in object){

                if (code == object[prop]){

                    if ( arrCodes.indexOf(object[prop]) == -1 ){    ////// проверяем, есть ли уже такое значение в своействе
                        arrCodes.push(code);
                    }

                    arrNames.push(object.name);
                    arrPrices.push(object.price);

                    // arr.splice(iter, 1);               ////// удаляем объект из arr
                    // console.log(arr);
                }
            }
        });

        /////////////////////////////////////////////  то же самое но через цикл
        // for (var i = 0; i < arr.length; i++){
        //
        //     for (var prop in arr[i]){
        //
        //         if (code == arr[i][prop]){
        //
        //             if ( arrCodes.indexOf(arr[i][prop]) == -1 ){    //// проверяем, есть ли уже такое значение в своействе
        //                 arrCodes.push(code);
        //             }
        //
        //             arrNames.push(arr[i].name);
        //             arrPrices.push(arr[i].price);
        //             arr.splice(i, 1);               // удаляем объект из arr
        //             console.log(arr);
        //         }
        //     }
        // }
    });

    sum = arrPrices.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    strProps = arrCodes.join(' ');
    strNames = arrNames.join(' ');
    newObj[newCode] = strProps;
    newObj.name = strNames;
    newObj.price = sum;

    // arr.unshift(newObj);

    console.log(newObj);
    // console.log(arr);


    return arr;
}

console.log(sortAr(arr, arrCodes, newCode));