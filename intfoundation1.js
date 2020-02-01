function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sigma(5));

function factorial(num){
    var total = 1;
    for(var i=1;i<=num;i++){
        total *= i
    }
    return total;
}
console.log(factorial(3));

function fibonacci(index) {
    if (index == 0) return 0;
    if (index == 1) return 1;
    var f1 = 0;
    var f2 = 1;
    var swapper;
    for (var i = 2; i <= index; i++) {
        swapper = f2;
        f2 = f1 + f2;
        f1 = swapper;
    }
    console.log("fibonacci at 3 index is: ", f2);
}

function fibonacci(num){
    var a = 1, b = 0, temp;
    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}
console.log(fibonacci(5));

//recursion
function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5));

function secondToLast(arr){
    if(arr.length <= 1){
        return null;
    }
    return arr[arr.length-2];
}
console.log(secondToLast([1]));

function nth(arr,n){
    if(arr.length<1){
        return null;
    }else{
        return arr[arr.length-n];
    }
}
console.log(nth([1,2,3,4],2));