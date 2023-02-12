// prob on prime number;
let number= 12;
let count=0;
for(let j=1; j<=number;j++){
  if(number%j==0){
    count++;
  }
}
if(count==2){
  console.log("Given number is a prime number");
}
else {
    console.log("Given number is not a prime number");
}

