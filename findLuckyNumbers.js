// Write your code below this line.

let findLuckNums = (n) => {
    //make an empty array
    let arr = [];
    //make a for loop
    for(let i = 0; i < n; i++){
        //make a var in the loop
        let randomNum = Math.floor(Math.random() * 10) + 1;
        //check if the array already has the var in it
        if(arr.indexOf(randomNum) === -1){
            //if it does not, push it to the array
            arr.push(randomNum);
        }else{
            //if so, skip that and subtract 1 to i
            i--;
        }
    }
    //return the array
    return arr;
}

console.log(findLuckNums(10));
