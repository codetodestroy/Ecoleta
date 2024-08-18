function showStatesList() {
    const sltStates = document.querySelector('#eState');

    const urlStates = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    fetch(urlStates).then(res => res.json()).then(states => {
        for(let state of states) {  
            sltStates.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
    })
}
showStatesList();