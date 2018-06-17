function find_average(array) {
    let sum = array.reduce((a, b) => a + b);
    var average = sum / array.length;
    return average;
}