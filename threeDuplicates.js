function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    let freq = {};
    let result = false;
    args.forEach((item,index)=>{
        if (freq[item]) {
            result = true;
            return;
        } else {
            freq[item] = 1;
        }
    }
    )
    return result;
}

areThereDuplicates('a', 'b', 'c')
