function findAddress(obj){
    const street = obj.street || "__" ;
    const house = obj.house || "__" ;
    const socity = obj.socity || "__" ;
    const str = street + "," + house + "," + socity ;
    return str;
}
console.log(findAddress({street: 10, house:34, socity:"Earth", }));