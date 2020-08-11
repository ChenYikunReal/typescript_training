let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

someArray.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});

someArray.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
