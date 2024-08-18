function showModalSearch() {
    const modal = document.querySelector('#modal');

    modal.classList.remove('hide');
}
const btnSearchModal = document.querySelector('.btnSearchModal');
btnSearchModal.addEventListener('click', showModalSearch);

function closeModalSearch() {
    const modal = document.querySelector('#modal');

    modal.classList.add('hide');
}
const btnCloseSearchModal = document.querySelector('.btnCloseSearchModal');
btnCloseSearchModal.addEventListener('click', closeModalSearch);