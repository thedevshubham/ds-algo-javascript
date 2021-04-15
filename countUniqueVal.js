function countUniqueValues(arr) {
    // add whatever parameters you deem necessary - good luck!
    let j = 0;
        if (arr.length == 0) {
        return j = 0;
    }
    if (arr.length == 1) {
        return j = 1;
    }
    for (let i = 1; i < arr.length; i++) {
        console.log(arr)
        if (arr[i] != arr[j]) {
            arr[j+1] = arr[i];
            j = j+1;
        }
    }
    return j+1;
}

countUniqueValues([])
