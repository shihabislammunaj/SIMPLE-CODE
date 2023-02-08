let =factrial=1;
for(let i =10;i>=1;i--){
  factrial =factrial*i
}
console.log(factrial);


function factrial(i){
  if( i==1){
    return 1;
  }
  return i*factrial(i-1)
}
const result1 =factrial(5);
console.log(result1);

// /*
// 5 *factrial(4)
// 5 *4* 3*factrial(3);
// 5*4*3*2*factrial(2)
// 5*4*3*2*1*factrial(1)
// 5*4*3*2*1
// */ 

function factrial1(n){
  if( n== 1){
    return 1;
  }
  return n*factrial1(n-1);
}
const result =factrial1(5);
console.log(result);

// program to find the factorial of a number
function factorial(x) {
 
  if (x == 0) {
      return 1;
  }
      return x * factorial(x-1);
}
const result2 = factorial(5)
console.log(result2);


 function factorial (y){
  if(y==0){
    return 1;
  }
  return y -factorial(y-1)
 }
 const result3 =factorial(50);
 console.log(result3);