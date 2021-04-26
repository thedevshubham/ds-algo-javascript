function bubbleSort(arr) {
    let noSwaps = true
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}
console.log(bubbleSort([2, 6, 7, 2, 3, 4, 10, 16, 11, 14]))
