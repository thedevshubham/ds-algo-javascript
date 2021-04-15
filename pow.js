function power(num, pow) {
        if(pow == 0){
        return 1;
    }
    let val = power(num, pow/2);
        if( pow < 0){
           num = 1/num;
    }
    if(pow%2 == 0){
        return val*val;   
    }else{
        return val*val*num;   
    }
}
console.log(power(2, 4))
