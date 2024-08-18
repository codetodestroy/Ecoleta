// Fectch API na API do IBGE para pegar Estados e Cidades
const sltStates = document.querySelector('#eState');

function showStatesList() {
    const urlStates = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    fetch(urlStates).then(res => res.json()).then(states => {
        for(let state of states) {  
            sltStates.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
    });
}
showStatesList();

function showCitiesListBasedOnState(e) {
    const sltCities = document.querySelector('#eCity');

    const nState = e.target.value;

    const urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${nState}/municipios`;

    if(nState === 'none') {
        sltCities.disabled = true;
    } else {
        sltCities.disabled = false;
    }
    
    sltCities.innerHTML = '<option value="none">Selecione a Cidade...</option>';
    
    fetch(urlCities).then(res => res.json()).then(cities => {
        for(let city of cities) {
            sltCities.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
        }
    });
}

sltStates.addEventListener('change', showCitiesListBasedOnState);

// Itens de coleta
function selectedItem(e) {
    const item = e.target;

    item.classList.toggle('selectedItem');
}

const allItems = document.querySelectorAll('.item');

allItems.forEach((item) => {
    item.addEventListener('click', selectedItem);
});