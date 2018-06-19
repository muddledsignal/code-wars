function cubeOdd(arr) {

    var sum = 0;

    arr.forEach(function (num) {
        if (num % 2 !== 0) {

            sum += cube(num);
        }
    });

    if (sum) {
        return sum;

    } else if (sum === 0) {
        return 0;

    } else {
        return undefined;
    }
}

function cube(num) {
    return num * num * num;
}