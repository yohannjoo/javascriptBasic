function print255(arr){
    for(var i=0;i<=255;i++){
        console.log(i);
    }
    return arr;
}
console.log(print255());

function getEven(arr){
    for(var i=0;i<=1000;i++){
        if(i%2===0){
            console.log(i)
        }
    }
    return arr;
}
console.log(getEven());

function sumOdd(arr){
    var sum = 0;
    for(var i=0;i<=500;i++){
        if(i%2!=0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumOdd());

function findMax(arr){
    var max = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1,2,7,3,4,5,-3]));

function findAvg(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    var avg = arr.length/sum;
    return avg;
}
console.log(findAvg([1,2,3,4,5]));

function arrOdd(arr){
    var result = [];
    for(var i=0;i<=50;i++){
        result.push(i);
    }
    return result;
}
console.log(arrOdd());

function greaterThanY(arr, Y){
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>Y){
            count++;
        }
    }
    return count;
}
console.log(greaterThanY([1,2,3,4,5],2));

function squares(arr){
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(squares([1,2,3]));

function replaceNeg(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log(replaceNeg([12,4,-3,5,-8]));

function minMaxAvg(arr){
    var max = 0;
    var min = 0;
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    return [max,min,avg];
}
console.log(minMaxAvg([-1, -2, -3, -4]));

function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    return arr;
}
console.log(swap([1,5,10,-2]));

function numToString(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log(numToString([-1,-3,2]));