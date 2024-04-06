const originalText = "I love my country Pakistan. <br /> I like my city Faisalabad. <br /> I love my Homeland."

const cities = ["Faisalabad" , "Lahore" , "Karachi" , "Islamabad"]

function showOutput(output){
    document.getElementById("output").innerHTML = output
}

function inputValue(){
    return document.getElementById("inputText").value;
}

function clearOutput(){
    document.getElementById("output").innerHTML = ""
}

function lowerCase(){
    clearOutput()
    let lower = originalText.toLowerCase()
    showOutput(lower)
    // document.getElementById("output").innerHTML = lower
}

function upperCase(){
    clearOutput
    let upper = originalText.toUpperCase()
    showOutput(upper)
    // document.getElementById("output").innerHTML = upper
} 

function capitalize(){
    let capitalizeText = '<span style="text-transform:capitalize;">' + originalText + '</span>'
    showOutput(capitalizeText)
    // document.getElementById("output").innerHTML = capitalizeText
}

function betterFormatting(){
    clearOutput()
    let text = inputValue()
    text = text.toLowerCase()

    if (text === ""){
        alert("Please type your text!!!")
    }

    document.getElementById("output").style.textTransform = 'capitalize'
    showOutput(text)
}

function printCities(){
    clearOutput()
    for(let index = 0; index < cities.length; index++){
        document.getElementById("output").innerHTML += index + 1 + ")" + cities[index] + "<br />"
    }
}

function addCity(){
    clearOutput()
    let city = inputValue()
    
    if(!city){
        alert("Enter your city name")
        return
    }
    
    
    let cityFirstLetter = city.slice(0 , 1).toUpperCase()
    let cityAllLetters = city.slice(1).toLowerCase()

    let cityWordInCapitalize = cityFirstLetter + cityAllLetters

    let isCityFound = false

    for (let i = 0; i < cities.length; i++){

        if(cities[i] === cityWordInCapitalize){

            isCityFound = true
            let html = '<span style="color:red; font-size:20px;">"' + cityWordInCapitalize + '"</span>' + "&nbsp;" + "is already in list "
            showOutput(html)
        }
    }

    if (!isCityFound){

        cities.push(cityWordInCapitalize)
        let html = '<span style="color:green; font-size:20px">"' + cityWordInCapitalize + '"</span>' + "successfully added in list"
        showOutput(html)
    }
}

function checkCity(){
    clearOutput()
    let city = inputValue()

    if (city === ""){
        alert("Please type your city!!")
        return
    }


    let cityWordInCapitalize = capitalize(city);

    let isCityFound = false

    for (let i = 0; i < cities.length; i++){
        if(cities[i] === cityWordInCapitalize){
            isCityFound = true
            let html = '<span style="color:red; font-size:20px;">"' + cityWordInCapitalize + '"</span>' + "is already in list"
            showOutput(html)
        }
    }

    if (!isCityFound){
        let html = "Sorry" + '<span style="color:green; font-size:20px">"' + cityWordInCapitalize + '"</span>' + "is not found in list"
        showOutput(html)
    }
}


function findWord(){
    let newOriginalText = originalText.toLowerCase()
    let word = inputValue()

    if (!word){
        alert("Please enter text!!!")
        return
    }

    word = word.toLowerCase()

    let wordFind = newOriginalText.indexOf(word)

    if (word !== -1) {
        let html = 'Your word' + '<span style="color:green; font-size:20px;">"' + word + '"</span>' + 'found at' + "&nbsp;" + 'index' + "&nbsp;" + '"' + wordFind + '"'
        showOutput(html)
    }else{
        alert("Please type correct word!!!")
    }
}


function replaceWord() {
    const wordToReplace = inputValue()
    const wordToReplaceWith = prompt("Enter the word you want to replace with:")

    if (originalText.includes(capitalize(wordToReplace))){
        const updatedOriginalText = originalText.replace(capitalize(wordToReplace) , capitalize(wordToReplaceWith))
        document.querySelector(".randomText").innerHTML = updatedOriginalText
    }else{
        alert("This word does not exist!!!")
    }

}

function capitalize(string) {
    const capitalizedString = `${string.slice(0 , 1).toUpperCase()}${string.slice(1).toLowerCase()}`
    return capitalizedString;
}

