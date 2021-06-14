let arr = [1, 2, 3, 4, 5, 5]
let n = arr.length
partition(arr, n)
function partition(arr, n) {
    for (let i = 0; i < n; i++) {
        let sum = 0;
        let left_sum = 0;
        for (let j = 0; j < i; j++) {
            left_sum += arr[j];
        }
        let right_sum = 0;
        for (let j = i; j < n; j++) {
            right_sum += arr[j];
        }
        // if the sum of `A[0…i-1]` is equal to `A[i, n-1]`
        if (left_sum == right_sum) {
            return i
        }
    }
    // invalid input
    return -1;
}
