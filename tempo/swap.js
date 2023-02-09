// item 1
// wrong approach
let first= 5;
let second=7;

// console.log(first, second);
// -----------------


// item 2
// right approach
const tempo=first;
first= second;
second= tempo;
// console.log(first, second);


// item 3
// right approach 2: Destructuring

[first, second]= [second, first];

console.log(first, second);


const jim= 84;
const dela= 75;

if(jim> dela){
    console.log("jim will get the cake");
}
else{
    console.log("dela will get the cake")
}