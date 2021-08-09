console.log('connected!')
const translateBtn = document.querySelector('#translateBtn')
const inpText = document.querySelector('.inpText')

function clickHandler() {
    console.log('Button Clicked')
    console.log('Input from Textarea -', inpText.value)
}

translateBtn.addEventListener('click', clickHandler)