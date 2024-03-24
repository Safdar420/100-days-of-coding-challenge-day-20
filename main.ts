//  Q no 58

function averageScore(...scores:number[]){
    let total =scores.reduce((sum,score) => sum + score,0);
    return total/scores.length 
}
console.log(averageScore(44,87,98,55,77,55,44));

//  Q no 59

function makeAdder(valueToAdd:number):(number:number) => number{
    return function(number:number):number{
        return number + valueToAdd
    }
}
let addFive =makeAdder(5);
console.log(addFive(15));

//  Q no 60

let userProfile = (function(){
    let name = "Safdar Ali";
    let age = 20; 
       return {displayInfo:function()
       {
        console.log(`Name:${name}, Age: ${age}`);
        
       }
    };
  })();
userProfile.displayInfo();