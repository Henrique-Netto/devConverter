const form = document.getElementById('form'); // captura o id do forumulario
form.addEventListener('submit', handleSubmit) // chamo função do botão converter

const inputValue = document.getElementById('value-real');

const selectedCurrency = document.getElementById('currency');


const result = document.getElementById('result');
let valueConverterd = 0;

function handleSubmit(e){ // função do botão converter
    e.preventDefault(); // comando para não recarregar a pagina quando clicar em converter
    
    if(!inputValue.value || inputValue.value <0){
        alert('Informe um valor a ser convertido correto!')
        return;
    } else if (!selectedCurrency.value){
        alert('Por favor, escolha uma moeda!')
        return;
    }

    converter(); // se passar das validação faz a funcção de converter
};

function converter(){
    if(selectedCurrency.value === 'eur'){
        valueConverterd = inputValue.value * 6.22;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        animateResult();

    } else if(selectedCurrency.value === 'dol'){
        valueConverterd = inputValue.value * 5.37;
        result.innerHTML = valueFormatter('en-US', 'USD');
        animateResult();
    }


    inputValue.value = ''; // ja limpa a tela
    selectedCurrency.value = ''; // ja limpa a tela

};

function valueFormatter(Locale, currency) {
    const value = valueConverterd.toLocaleString(`${Locale}` , {style: 'currency', currency: `${currency}`})
    return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function animateResult(){ // cria o efeito do numero caindo saindo do eixo negativo ao zero.
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
    ], {duration: 700})
}