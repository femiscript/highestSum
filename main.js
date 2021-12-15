function sumOfArrays(arrayOne, arrayTwo) {

    let totalOne = 0;
    let totalTwo = 0;

    arrayOne.forEach(function (num) {
        totalOne += num;
    })

    for (let number of arrayTwo) {
        totalTwo += number;
    }

    if (totalOne >= totalTwo) {
        console.log(totalOne);
    } else {
        console.log(totalTwo);
    }
}
sumOfArrays([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]);
sumOfArrays([15, 7], [12, 17]);
sumOfArrays([30], [3, 6, 2, 6]);