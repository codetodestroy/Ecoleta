function showModalSearch() {
    const modal = document.querySelector('#modal');
    
    document.body.classList.add('toHideScrol');
    modal.classList.remove('hide');
}
const btnOpenSearchModal = document.querySelector('.btnOpenSearchModal');
btnOpenSearchModal.addEventListener('click', showModalSearch);

function closeModalSearch() {
    const modal = document.querySelector('#modal');

    document.body.classList.remove('toHideScrol');
    modal.classList.add('hide');
}
const btnCloseSearchModal = document.querySelector('.btnCloseSearchModal');
btnCloseSearchModal.addEventListener('click', closeModalSearch);

function isSearchBlank(e) {
    const search = document.querySelector('#inSearch');

    if(search.value === '') {
        alert('Por favor, digite um texto para pesquisar o ponto de coleta!');
        search.focus();
        e.preventDefault();
    }
}
const btnSearchPoint = document.querySelector('.btnSearchPoint');
btnSearchPoint.addEventListener('click', isSearchBlank);