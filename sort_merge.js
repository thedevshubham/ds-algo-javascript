// merging two arrays after sorting them
function merge(arr1, arr2) {
    let result = []
    let i = j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        } else {
            result.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}
mergeSort([5, 2, 7, 3, 8, 9, 1, 0, 34, 23, 66, 75, 23, 89, 1222, 877, 455, 0, 2334, 5645, 11, 123, 321, 543])
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr
    let mid = Math.floor((arr.length) / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
