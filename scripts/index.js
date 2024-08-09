const buttonOpenSearchPoints = document.querySelector('#home-page main a');
const modalSearchPoints = document.querySelector('#modal');
const buttonCloseSearchPoints = document.querySelector('#modal .header a');

buttonOpenSearchPoints.addEventListener('click', () => {
    modalSearchPoints.classList.remove('hide');
});

buttonCloseSearchPoints.addEventListener('click', () => {
    modalSearchPoints.classList.add('hide');
});