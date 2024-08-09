function populateUFs() {
    const ufsSelect = document.querySelector('select[name=uf]');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((res) => {
        return res.json();
    }).then((ufs) => {
        for (let uf of ufs) {
            ufsSelect.innerHTML += `<option value="${uf.id}">${uf.nome}</option>`;
        }
    });
}
populateUFs();

function getCities(event) {
    const citiesSelect = document.querySelector('select[name=city]');
    const ufInput = document.querySelector('input[name=state');

    const ufValue = event.target.value;

    const indexOfSelectedUf = event.target.selectedIndex;
    ufInput.value = event.target.options[indexOfSelectedUf].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citiesSelect.innerHTML = '<option value>Selecione a Cidade</option>';
    citiesSelect.disabled = true;

    fetch(url).then((res) => {
        return res.json();
    }).then((cities) => {
        for (let city of cities) {
            citiesSelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }
        citiesSelect.disabled = false;
    })
}
document.querySelector('select[name=uf]').addEventListener('change', getCities);

//  Itens de coleta
let itensToCollect = document.querySelectorAll('.items-grid li');

itensToCollect.forEach((itemColeta) => {
    itemColeta.addEventListener('click', handleSelectedItem);
});

const collectedItems = document.querySelector('input[name=items]');

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;

    // add or remove a classe with js
    itemLi.classList.toggle('selected');

    const itemId = itemLi.dataset.id;

    const alreadySelected = selectedItems.findIndex((item) => {
        const itemFound = item == itemId;
        return itemFound;
    });

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter((item) => {
            const itemIsDifferent = item != itemId;
            return itemIsDifferent;
        });

        selectedItems = filteredItems;
    } else {
        selectedItems.push(itemId);
    }

    collectedItems.value = selectedItems;
}