// I used this entry in w3 schools to learn how to use async functions 
// that are commonly used in frontend dev: https://www.w3schools.com/js/js_promise.asp 
function matches(array, key){
    countMatches = new Promise (function(myResolve){
        let count = 0;
        for(let num in array) if(array[num] === key) count += 1;
        
        myResolve(count);

    });
    return countMatches;
}