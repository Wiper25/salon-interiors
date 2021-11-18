let btnBurgerMenu = document.querySelector('.mobile-burger-menu').onclick = () => {
    burgerMenu.classList.toggle('display')
}
btnModelWin = document.querySelector('.btn-application').onclick = () => {
    modelWin.classList.toggle('display')
    burgerMenu.classList.toggle('display')
}
burgerMenu = document.querySelector('.model-burger-menu')
modelWin = document.querySelector('.model-window-form-application')
