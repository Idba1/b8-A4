function matchFinder(string1, string2){
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Please provide string type input";
    }
    const result = string1.toLocaleLowerCase().includes(string2.toLocaleLowerCase());
    return result;
}
console.log(matchFinder("Hello", "hello"));