const fs= require('fs');

const filepath= 'text.txt'

//blocking method

// console.log(filepath)
// const data = fs.readFileSync(filepath,{encoding:'utf-8'})

// console.log(data)
// let sum=0
// for(let i=0;i<10;i++){
//     sum=sum+i;
// }
// console.log(sum)


//non-blocking method

fs.readFile(filepath,{encoding:'utf-8'},(req,res)=>{
    console.log(res);
})

let sum=0
for(let i=0;i<10;i++){
    sum=sum+i;
}
console.log(sum);
console.log("hello")