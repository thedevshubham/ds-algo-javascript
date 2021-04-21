function maxSubarraySum(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < num)
        return null
    let firstSum = 0
    let currentTotal = 0
    for (let i = 0; i < num; i++) {
        firstSum += arr[i]
    }
    currentTotal = firstSum
    for (let i = num; i < arr.length; i++) {
        currentTotal = currentTotal - arr[i-num] + arr[i]
        if (currentTotal > firstSum) {
            firstSum = currentTotal
        }
    }
    return firstSum
}

maxSubarraySum([-3,4,0,-2,6,-1], 2)
