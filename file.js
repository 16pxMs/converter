const meterTofeet = 3.281 
const literTogallon = 0.264 
const kilogramTogallon = 2.204 

let meterResult = document.getElementById("meter_results")
let literResult = document.getElementById("liters_results")
let kilogramResult = document.getElementById("kilograms_results")

let convertBtn = document.getElementById("submitBtn")
let input = document.getElementById("inputBox")

convertBtn.addEventListener("click", function(event) {
    // console.log(event.type)

    let userInput = input.value //this allows us to capture unique data the user puts within the iput box.

    input.value = "" // This clears the iput afer the user triggers or clicks the button attached to this even listener, allowing them to type in new data within the input box.

    const results = conversionLogic(userInput)
 
    renderResults(results)  // this would rendder the result to display it inn the browser.
}
)

function conversionLogic(inputNumber) {

    const meter = (inputNumber * meterTofeet).toFixed(2)
    const liter = (inputNumber * literTogallon).toFixed(2)
    const kilogram = (inputNumber * kilogramTogallon).toFixed(2)

    return {meter, liter, kilogram} //this return allows the variables to go outside the function scope.

}

function renderResults(results) {


    meterResult.innerHTML = `Meters to Feet: ${results.meter}`
    literResult.innerHTML = `Liters to Gallons: ${results.liter}`
    kilogramResult.innerHTML = `Kilograms to Pounds: ${results.kilogram}`
}