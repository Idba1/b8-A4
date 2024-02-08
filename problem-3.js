function shortMarker(a,b){
    // const [] = arr;
    if(a<0 || b<0){
        return "Invalid Number"
    }
    else{
        if(a==b){
            return "equal";
        }
        else if(a>b){
            return [a,b];
        }
        else{
            return[b,a];
        }
    }
}

console.log(shortMarker(90,95))