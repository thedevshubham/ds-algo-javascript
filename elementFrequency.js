function nextGreaterElements(Arr, n) {

    // Formation of cicular array
    let arr = [];
    // Append the given array element twice
    for (let i = 0; i < 2 * n; i++) {
        arr[i] = Arr[i % n];
    }
    console.log(arr)
    let next;
    // Iterate for all the
    // elements of the array
    for (let i = 0; i < n; i++) {
        // Initialise NGE as -1
        next = -1;
        for (let j = i + 1; j < 2 * n; j++) {
            // Checking for next
            // greater element
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        // Print the updated NGE
        console.log(next + ", ");
    }
}
let myar = [1,2,1,-1,5,4,3];
nextGreaterElements(myar, myar.length)
