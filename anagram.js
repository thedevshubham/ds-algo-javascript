let str1 = "aaz";
let str2 = "zza";
function validAnagram(str1, str2) {
    let result = false;
    if (!str1 && !str2) {
        return true;
    }
    for (let i = 0; i < str1.length; i++) {
        let strIndex = str2.indexOf(str1[i]);
        if (strIndex >= 0) {
            result = true;
            str2 = str2.split('');
            str2.splice(strIndex, 1);
            str2 = str2.join('');
        } else {
            result = false;
            break;
        }
    }
    return result;
}

validAnagram(str1, str2);
