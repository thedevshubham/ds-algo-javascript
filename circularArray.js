let cirArray = ["A", "B", "C", "D", "E", "F"]
function print(cirArray, index) {
    for (let i = index; i < (cirArray.length + index); i++) {
        console.log(i%cirArray.length,cirArray[i%cirArray.length])
    }
}
print(cirArray, 2)
