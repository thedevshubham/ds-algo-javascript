function getMax(arr, seq) {
    if (arr.length < seq) {
        return arr
    }
    let firstSum = 0;
    let maxSum = 0;
    for (let i = 0; i <= seq - 1; i++) {
        firstSum += arr[i];
    }
    maxSum = firstSum;
    let windowValue = firstSum;
    for (let i = seq; i < arr.length; i++) {
        windowValue = windowValue - (arr[i-seq]) + arr[i];
        if (windowValue > maxSum) {
            maxSum = windowValue;
        }
    }
    return maxSum;
}

getMax([2,1], 2)
