function obterDataAtual() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function obterDiaDaSemana() {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const data = new Date();
    return diasSemana[data.getDay()];
}

function obterHoraAtual() {
    const data = new Date();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const segundo = String(data.getSeconds()).padStart(2, '0');
    return `${hora}:${minuto}:${segundo}`;
}

function atualizarTitulo() {
    const titulo = document.querySelector('h1');
    if (titulo) {
        const dataAtual = obterDataAtual();
        const diaSemana = obterDiaDaSemana();
        const horaAtual = obterHoraAtual();
        
        titulo.textContent = `${diaSemana}, ${dataAtual} - ${horaAtual}`;
        titulo.style.cursor = 'pointer';
        titulo.title = 'Clique para atualizar a hora';
    }
}

function criarElementoInfo() {
    const info = document.createElement('p');
    info.innerHTML = `
        <strong>Informações da página:</strong><br>
        Título: ${document.title}<br>
        URL: ${window.location.href}<br>
        Navegador: ${navigator.userAgent.split(' ').slice(-2).join(' ')}
    `;
    info.style.marginTop = '20px';
    info.style.padding = '10px';
    info.style.backgroundColor = '#f0f0f0';
    info.style.borderRadius = '5px';
    info.style.fontFamily = 'Arial, sans-serif';
    
    document.body.appendChild(info);
}

document.addEventListener('DOMContentLoaded', function() {
    atualizarTitulo();

    setInterval(atualizarTitulo, 1000);

    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.addEventListener('click', function() {
            atualizarTitulo();
            console.log('Título atualizado!');
        });
    }

    criarElementoInfo();

    console.log('Script carregado com sucesso!');
    console.log('Data atual:', obterDataAtual());
    console.log('Dia da semana:', obterDiaDaSemana());
});

window.data = {
    obterDataAtual,
    obterDiaDaSemana,
    obterHoraAtual
};
