function getInputValue() {

    const myAge = document.getElementById("YearsExist").value
    let earlyYears = 2;
    earlyYears *=10.5;
    let laterYears = myAge - 2;
    laterYears *= 4;
    const myAgeInDogYears = earlyYears + laterYears
    document.getElementById("result").innerHTML = "Your Age today in Dog Age will be " + myAgeInDogYears;
}

function clear_inputs() {
    inputs = document.getElementsByClassName('inputs')
    for(input of inputs) {
        input.value= ' '
    }
}