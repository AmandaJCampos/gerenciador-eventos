
//Guarda o conteudo do formulário
 const formulario = document.querySelector('#formulario')

 //Adiciona um addEventListner para enviar os dados quando o usuário clica no botão
formulario.addEventListener('submit', (e)=>{
    //Previne ação padrão do evento 'Submit' padrão do formulário
    e.preventDefault();
    adicionarEvento();
    formulario.reset();
    formulario.nomeEvento.focus();
})

function adicionarEvento(){
    //Busca os dados da LocalStorage (se houver), senão cria um array vazio
    const eventos = JSON.parse(localStorage.getItem('eventos')) || []; 
    
    //Guarda os dados informados no formulário (destructuring)
    const nomeEvento = formulario.nomeEvento.value;
    const dataEvento = formulario.dataEvento.value;

    if (eventos.find((dataEvento) => dataEvento == dataEvento)){
        alert('Já existe um evento nessa data.');
        return;
    }

    eventos.push({
        nomeEvento, 
        dataEvento
    });

    //Guarda a lista atualizada no LocalStorage
    localStorage.setItem('eventos',  JSON.stringify(eventos));
    
    mostrarEventos()

    // console.log(nomeEvento.value);
}

function mostrarEventos(){
    //Busca os dados da LocalStorage (se houver), senão cria um array vazio
    const eventos = JSON.parse(localStorage.getItem('eventos') || []);
    const listaEventos = document.querySelector('#lista');
    listaEventos.textContent = '';

    eventos.forEach(evento =>{
        const li = document.createElement('li');
        li.textContent = evento.nomeEvento + ' - ' + evento.dataEvento;
        listaEventos.appendChild(li);
    })

   /* eventos.forEach(evento =>{
        const li = document.createElement('li');
        li.textContent = `
            ${evento.nomeEvento} (${new Date(evento.dataEvento).toLocaleDateString('pt-BR')})`;
        listaEventos.appendChild(li);
    })*/
 }

 mostrarEventos()