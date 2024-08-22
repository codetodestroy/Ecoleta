// Fectch API na API do IBGE para pegar Estados e Cidades
const sltStates = document.querySelector('#eState');

async function showStatesList() {
    const statesIBGE = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const states = await statesIBGE.json();

    for (let state of states) {
        sltStates.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
    }
}
showStatesList();

function showCitiesListBasedOnState(e) {
    const sltCities = document.querySelector('#eCity');

    const nState = e.target.value;

    const urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${nState}/municipios`;

    if (nState === 'none') {
        sltCities.disabled = true;
    } else {
        sltCities.disabled = false;
    }

    sltCities.innerHTML = '<option value="none">Selecione a Cidade...</option>';

    fetch(urlCities).then(res => res.json()).then(cities => {
        for (let city of cities) {
            sltCities.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
        }
    });
}
sltStates.addEventListener('change', showCitiesListBasedOnState);

// Itens de coleta
const itemsToCollect = document.querySelectorAll('.items .item');

itemsToCollect.forEach((itemColect) => {
    itemColect.addEventListener('click', selectedItem);
});

const collectedItems = document.querySelector('input[name=items]');

let selectedItems = [];

function selectedItem(e) {
    const item = e.target;

    item.classList.toggle('selectedItem');

    let itemId = item.dataset.id;

    const alreadySelected = selectedItems.findIndex((item) => {
        return itemFound = item == itemId;
    });

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter((item) => {
            const isItemDifferent = item != itemId;
            return isItemDifferent;
        });

        selectedItems = filteredItems;
    } else {
        selectedItems.push(itemId);
    }

    collectedItems.value = selectedItems
}

const allItems = document.querySelectorAll('.item');

allItems.forEach((item) => {
    item.addEventListener('click', selectedItem);
});

function isCreatePointBlank(e) {
    const eName = document.querySelector('#eName');
    const eAddress = document.querySelector('#eAddress');
    const eAddressComplement = document.querySelector('#eAddressComplement');

    const state = document.querySelector('#eState');
    const city = document.querySelector('#eCity');

    if (eName.value == '') {
        alert('Por favor, digite o nome da entidade!');
        eName.focus();
        e.preventDefault();
    } else if (eAddress.value == '') {
        alert('Por favor, digite o endereço da entidade!');
        eAddress.focus();
        e.preventDefault();
    } else if (eAddressComplement.value == '') {
        alert('Por favor, digite o complemento da entidade!');
        eAddressComplement.focus();
        e.preventDefault();
    } else if (state.value === 'none') {
        alert('Por favor, selecione um estado!');
        state.focus();
        e.preventDefault();
    } else if (city.value === 'none') {
        alert('Por favor, selecione uma cidade!');
        city.focus();
        e.preventDefault();
    }
}
const btnCreatePoint = document.querySelector('#btnCreatePoint');
btnCreatePoint.addEventListener('click', isCreatePointBlank);