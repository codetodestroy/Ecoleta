function populateUFs() {
    const ufsSelect = document.querySelector('select[name=uf]');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => res.json()).then(ufs => { 
        for(let uf of ufs) {
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

    fetch(url).then(res => res.json()).then(cities => {
        for(let city of cities) {
            citiesSelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;

            citiesSelect.removeAttribute('disabled');
        }
    })
}
document.querySelector('select[name=uf]').addEventListener('change', getCities);