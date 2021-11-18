let btnBurgerMenu = document.querySelector('.mobile-burger-menu').onclick = () => {
    burgerMenu.classList.toggle('display')
}
btnModelWin = document.querySelector('.btn-application').onclick = () => {
    modelWin.classList.toggle('display')
}
btnModelWinMobile = document.querySelector('.btn-application-burger').onclick = () => {
    burgerMenu.classList.toggle('display')
    modelWin.classList.toggle('display')
}
btnCrossModelWin = document.querySelector('.form-application-cross').onclick = () => {
    modelWin.classList.add('display')

}

burgerMenu = document.querySelector('.model-burger-menu')
modelWin = document.querySelector('.model-window-form-application')