function binarySearch(arr, num) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== num && start < end) {
        if (num < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
        console.log(start, end, middle)
    }
    if (arr[middle] === num) {
        return middle
    }
    return -1
}
binarySearch([1,3,5,9,12,15,22,34,56,76,87,99,100,109,199,200], 2011)