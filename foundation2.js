function biggieSize(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            arr[i] = "Biggie";
        }
    }
    return arr;
}
console.log(biggieSize([-1,3,5,-5]));

function printLowReturnHigh(arr){
    var high = arr[0];
    var low = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>high){
            high = arr[i];
        }
        if(arr[i]<low){
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(printLowReturnHigh([1, 2, 3, 4, 5, 6]));

function doubleVision(arr){
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        newarr.push(arr[i]*2);
    }
    return newarr;
}
console.log(doubleVision([1,2,3]));

function countPos(arr){
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr
}
console.log(countPos([12,3,-3,4,5]));

function evenOdd(arr){
    var oddCount = 0;
    var evenCount = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0 && oddCount<3){
            oddCount++;
            evenCount=0;
        }
        if(arr[i]%2===0 & evenCount<3){
            evenCount++;
            oddCount=0;
        }
        if(oddCount==3){
            console.log("Thats odd");
            oddCount = 0;
        }
        if(evenCount==3){
            console.log("Even more so");
            evenCount = 0;
        }
    }
}
console.log(evenOdd([2, 2, 4, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2]));

function plusOdd(arr){

}


function addSeven(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        result[i] = arr[i] + 7;
    }

    console.log(result);
    return arr;
}
console.log(addSeven([1,2,3]));

function alwaysHungry(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy");
        }else{
            console.log("i'm hungry")
        }
    }
}

function swapTowardsCenter(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length -1] = temp;

    temp = arr[2];
    arr[2] = arr[arr.length -3];
    arr[arr.length -3] = temp;

    console.log(arr);
}
swapTowardsCenter([1,2,3,4,5,6]);

function scale(arr,num){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
console.log(scale([1,2,3],3));