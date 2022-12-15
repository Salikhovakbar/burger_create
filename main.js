const burgerSpices = document.querySelector(".burger-ingrediants")
const btnCheese = document.querySelector(".btn-cheese")
const btnMeat = document.querySelector(".btn-meat")
const btnCabbage = document.querySelector(".cabbage-btn")
btnMeat.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
    const meatBox = document.createElement("div")
    burgerSpices.appendChild(meatBox)
    meatBox.className='meat-box'
    meatBox.addEventListener('click', () => {
        meatBox.remove()
    } )
})
btnCheese.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
    const cheeseBox = document.createElement("div")
    burgerSpices.appendChild(cheeseBox)
    cheeseBox.className='cheese-box'
    cheeseBox.addEventListener('click', () => {
        cheeseBox.remove()
    } )
})
btnCabbage.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
    const cabbageBox = document.createElement("div")
    burgerSpices.appendChild(cabbageBox)
    cabbageBox.className='cabbage-box'
    cabbageBox.addEventListener('click', () => {
        cabbageBox.remove()
    } )
})