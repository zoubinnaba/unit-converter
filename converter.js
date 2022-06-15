// Get html elements
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const meterToFeedEl = document.getElementById("meter-to-feed")
const literToGallonsEl = document.getElementById("liter-to-gallons")
const kiloTopoundsEl = document.getElementById("kilo-to-pounds")

// Format a number with 3 decimal
const numberToRound = number => Number.parseFloat(number).toFixed(3)

// Convert number given to aproieted unit
const convertNumber = () => {
    const number = parseInt(inputEl.value)
    meterToFeetOrFeetToMeter(number)
    literToGallonsOrGallonsToLiter(number)
    kiloTopoundsOrPoundsToKilo(number)
    inputEl.value = ""
    
}

// Convert number given meter to feet or feet to meter 
const meterToFeetOrFeetToMeter = (num) => {
    return meterToFeedEl.textContent = `
        ${num} meters = ${numberToRound(num * 3.2808)} feet |
        ${num} feet = ${numberToRound(num * 0.3048)} meters
        `
}

// Convert number given liter to gallons or gallons to liters
const literToGallonsOrGallonsToLiter = (num) => {
    return literToGallonsEl.textContent = `
        ${num} liters = ${numberToRound(num * 0.1142)} gallons |
        ${num} gallons = ${numberToRound(num * 3.7854)} liters
        `
}


// Convert number given kilogram to pound or pound to kiligram 
const kiloTopoundsOrPoundsToKilo = (num) => {
    return kiloTopoundsEl.textContent = `
        ${num} Kilograms = ${numberToRound(num * 2.2046)} pounds |
        ${num} Pounds = ${numberToRound(num * 0.4536)} kilograms
        `
}


// Create event listner for button
convertBtn.addEventListener("click", convertNumber)
