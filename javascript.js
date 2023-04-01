function dice(rolls, elementid){
    //console.log(rolls)
    console.log(numberMinMax(1,rolls))//calls numberMinMax function defined below
    document.getElementById(elementid).innerHTML=numberMinMax(1,rolls)
}
function d10(){
    //console.log("button clicked")
    numberMinMax(1,11)
    document.getElementById("roll10").innerHTML=numberMinMax(1,rolls)
}
function numberMinMax(min, max){ //creates numberMinMax function
    const diceRoll=Math.floor(Math.random() * (max - min +1)) + min
    //console.log(diceRoll)
    return(diceRoll)
}