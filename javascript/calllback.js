function sum(a,b){
    return a+b;
}
function sumwithmsg(abcd,msg){
    const result=abcd(20,30);
    const fresult="HI"+" "+msg+"your score is="+result;
    console.log(fresult);
}
sumwithmsg(sum,"abcd");