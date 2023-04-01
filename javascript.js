function d6(){
    console.log("button clicked")
    console.log("this is function d6")
    numberMinMax(1,6)//calls numberMinMax function defined below
}
function d10(){
    console.log("button clicked")
    numberMinMax(1,11)
}
function numberMinMax(min, max){ //creates numberMinMax function
console.log(Math.floor(Math.random() * (max - min +1)) + min);  //defines parameters for numberMinMax function
}