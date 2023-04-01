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