var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
someArray.forEach(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
});
someArray.every(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
