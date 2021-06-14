function hackerlandRadioTransmitters(x, k) {
    // Write your code here
    let transmitHouse = (2*k-1) + 2
    if (x.length <= transmitHouse) return 1
    return Math.ceil(Math.max(...x)/transmitHouse)
}
hackerlandRadioTransmitters([7, 2, 0, 2, 9, 4], 2)
