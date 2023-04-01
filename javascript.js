function dice(rolls, elementid){
    //console.log(rolls)
    //console.log(numberMinMax(1,rolls))//calls numberMinMax function defined below
    document.getElementById(elementid).innerHTML=numberMinMax(1,rolls) //targets element id and changes target in HTML
}
function numberMinMax(min, max){ //creates numberMinMax function
    const diceRoll=Math.floor(Math.random() * (max - min +1)) + min
    //console.log(diceRoll)
    return(diceRoll)
}

function breakDice(){
    // console.log(typeof + numberMinMax(1,6))
    if (typeof numberMinMax(1,6)!="number"){
        console.log("is not number")
    } 
}
breakDice() 