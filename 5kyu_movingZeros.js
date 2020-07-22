// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// move_zeros([false,1,0,1,2,0,1,3,"a"]) # returns[false,1,1,2,1,3,"a",0,0]


var moveZeros = function (arr) {

    let arrGood = [];
    let arrBad = [];

    for (arrValue of arr){

        if (arrValue === 0) {

            arrBad.push(arrValue);

        }else{

           arrGood.push(arrValue);

        }

    }

    const result = arrGood.concat (arrBad);
    return (result);
}