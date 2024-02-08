function canPay(changeArray, totalDue){
    if(changeArray.length === 0){
        return "your array is empty"
    }
    let sum = 0;
    for (let i=0; i<changeArray.length ; i++){
        const element = changeArray[i];
        sum += element;
    }
    if(sum>=totalDue){
        return true;
    }
    else{
        return false;
    }
}
console.log(canPay([1,32,3],10))