document.querySelector('form').addEventListener('submit', (event) => {

    event.preventDefault();
    let formData = new FormData(event.target);

    let moedaBase =  formData.get('moeda');
    let moedaAlvo = (moedaBase == "AOA") ? "USD" : "AOA";
    let quantia = formData.get('quantia');
    convert();

    async function convert() {
        
        const resposta = await fetch(
            `https://v6.exchangerate-api.com/v6/178bb1f27a9bf7542514b2f4/latest/${moedaBase}`
        )

        const dados = await resposta.json();

        let taxa = dados.conversion_rates[moedaAlvo];

        let resultado = quantia * taxa;
        document.querySelector('#resultado-lbl').innerHTML = moedaAlvo;
        document.querySelector('p').innerHTML = resultado;
    };
});