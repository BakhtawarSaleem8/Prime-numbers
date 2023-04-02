var input = prompt("enter the last number range from 1 to determine prime numbers between them")

var arry = new Array(input);
var a = 1;
for(var i=0; i<=input-1; i++){
    arry[i]=a;
    a++;
}
// document.write(arry);
// console.log(arry);
var n = 0;
var scndArry = new Array(input);
for(var j=0; j<=input-1; j++){
    for(var k=0; k<=input-1; k++){
scndArry[k]=arry[j]%arry[k];
if(scndArry[k]==0){
    n++;}
    console.log(n);
    // document.write(n + "<br>");
}
// document.write(scndArry + "<br>");
if(n<3){
    document.write(arry[j] + "<br>");
}
n=0;
}

 