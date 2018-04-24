console.log("Display the number from 1 to 20.");
for(var i=1; i<=20; i++){
    console.log(i);
}
    
console.log("Display the even numbers from 1 to 20");
for(var i=1; i<=20; i++){
    if(i%2===0){
        console.log(i);
    }    
}
        
console.log("Display the odd numbers from 1 to 20");
for(var i=1; i<=20; i++){
    if(i%2==1){
        console.log(i);
    }
}
console.log("Display the multiples of 5 up to 100");
for(var i=1; i<=100; i++){
    if(i%5===0){
        console.log(i);
    }
}
console.log("Display the square numbers up to 100");
for(var i=1; i<=100; i++){
    for(var j=1; j<=i; j++){
        if((i/j)==j){
            console.log(i);
        }
    }
}
console.log("Display numbers counting backwards from 20");
for(var i=20; i>=1;i--){
    console.log(i);
}
console.log("Display the even numbers counting backwards from 20")
for(var i=20; i>=1;i--){
    if(i%2===0){
        console.log(i);
    }
}
console.log("Display the odd numbers counting backwards from 20");
for(var i=20; i>=1;i--){
    if(i%2===1){
        console.log(i);
    }
}
console.log("Display the multiples of 5 counting down from 100");
for(var i=100; i>=1; i--){
    if(i%5===0){
        console.log(i);
    }
}
console.log("Display the square numbers, counting down from 100");
for(var i=100; i>=1; i--){
    for(var j=1; j<=i; j++){
        if((i/j)==j){
            console.log(i);
        }
    }
}