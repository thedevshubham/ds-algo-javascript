function flatten(arr, uarr=[]) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], uarr)
        } else {
            uarr.push(arr[i])
        }
    }
    return uarr
}
flatten([1, 2, [3], 4, [5], 6, 7, [8], [9], [10], [11, 12, [13, 14, [[[[22]]]]]]])
