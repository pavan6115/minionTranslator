console.log('connected!')
const translateBtn = document.querySelector('#translateBtn')
const inpText = document.querySelector('.inpText')
const outputSection = document.querySelector('.output')

function clickHandler() {
    // tells the button what to do when clicked 
    // main task - translate and show in output
    outputSection.innerHTML = "Hey there, coming from JS world!" + inpText.value
}

translateBtn.addEventListener('click', clickHandler)