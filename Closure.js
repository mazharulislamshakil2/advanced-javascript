
function StopWatch(){
    let count = 0;
    return function(){
        count++
        return count;
    }
}
const oneAns = StopWatch();
console.log(oneAns());
console.log(oneAns());
console.log(oneAns());

const oneOR = StopWatch();
console.log(oneOR());
console.log(oneOR());
