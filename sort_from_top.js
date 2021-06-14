sortTop([5, 1, 4, 2, 3])
function sortTop(arr) {
    let maxVal = Math.max(...arr)
    let d = maxVal
    let dIndex = -1
    let totalSwaps = 0
    let i = 0
    while (i < arr.length) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                if ((arr[i] - arr[j]) < d) {
                    d = arr[i] - arr[j]
                    dIndex = j
                }
            }
        }
        if (d !== maxVal) {
            let item = arr.splice(dIndex, 1)
            arr.unshift(item[0])
            i = 0
            d = maxVal
            totalSwaps++
        } else {
            i++
        }
    }
    return totalSwaps
}
