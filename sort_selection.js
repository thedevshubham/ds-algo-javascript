function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
        }
    }
    return arr
}
selectionSort([0, 2, 34, 22, 10, 19, 17, 2])