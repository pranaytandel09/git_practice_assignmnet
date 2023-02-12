// given no is a pallindrome or not

let num=1221;

let a= num.toString();


 let bag="";
 for(i=(a.length); i>=0; i--){
     bag=bag+a[i];
 }


  if(a==bag){
     console.log("Yes");
 }
 else{
     console.log("No");
 }