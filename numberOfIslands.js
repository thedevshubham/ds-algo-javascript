function numberOfIslands(arr, size) {
    if (size == 0) {
        return 0;
    }
    let rows = size;
    let cols = arr[0].length;
    let islandsNumber = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] == '1') {
                markVisited(arr, i, j, rows, cols)
                islandsNumber++;
            }
        }
    }
    return islandsNumber;
}
function markVisited(arr, i, j, rows, cols) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || arr[i][j] != '1') {
        return;
    }
    arr[i][j] = '2';
    markVisited(arr, i + 1, j, rows, cols)
    markVisited(arr, i, j + 1, rows, cols)
    markVisited(arr, i - 1, j, rows, cols)
    markVisited(arr, i, j - 1, rows, cols)
}

let isArray = [[1, 0, 0], [1, 0, 0], [0, 0, 1]];
let totalIslands = numberOfIslands(isArray, isArray.length);
console.log(totalIslands);
