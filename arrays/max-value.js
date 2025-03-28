function maxvalue(arr) {
    var max = arr[0];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxvalue([1, 5, 8, 3, 6]));
