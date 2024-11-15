document.getElementById("requisicao").addEventListener('click', () =>{
    const cep = document.getElementById("CEP").value.trim()

    if (cep.length !== 8 || isNaN(cep)) {
        alert("Por favor, insira um CEP válido com 8 números.");
        document.getElementById("CEP").innerHTML = '';
        return; 
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    .then(data =>{
        document.getElementById('logradouro').innerText = `Logradouro: ${data.logradouro}`;
        document.getElementById('Bairro').innerText = `Bairro: ${data.bairro}`;
        document.getElementById('Localidade').innerText = `Cidade: ${data.localidade}`;
        document.getElementById('uf').innerText = `UF: ${data.uf}`;
        document.getElementById('ddd').innerText = `ddd: ${data.ddd}`;
    })
})