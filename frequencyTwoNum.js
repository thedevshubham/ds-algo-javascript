function sameFrequecy(n1, n2) {
    n1 = n1.toString();
    n2 = n2.toString();
    let result = false;
    if (n1.length !== n2.length)
        return result;
    for (let i = 0; i < n1.length; i++) {
        let index = n2.indexOf(n1[i]);
        if (index >= 0) {
            result = true;
            n2 = n2.split('');
            n2.splice(index, 1);
            n2 = n2.join('');
        } else {
            result = false;
            break;
        }
    }
    return result;
}

sameFrequecy(1821, 1281);
