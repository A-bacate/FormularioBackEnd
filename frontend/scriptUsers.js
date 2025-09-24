// Busca os dados dos usuários no server
function carregar(){
    fetch('http://localhost:3000/usuarios') // buscou no servidor
    .then(res => res.json()) // transformei a resposta em json (só pra garantir)
    .then(data => { // array com todos os dados que foram buscados (o professor gosta de chamar de 'data' porque são nossos dados :D )

        const tbody = document.getElementById('tabela')
        // limpar dados da tabela para ela não ficar repetindo toda vez que o site é carregado
        tbody.innerHTML = ""

        console.log(data);

        // tristeza e dor e sofrimento
        data.forEach(user => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td id="id">${user.id}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn-excluir" onclick="excluir(${user.id})">Excluir</button>
                    <button class="btn-editar" onclick="editar(${user.id})">Editar</button>
                </td>
            `

            tbody.appendChild(tr)
        });
    })
}

function excluir(idUsuario){
    fetch(`http://localhost:3000/usuarios/${idUsuario}`, {
        'method': 'DELETE'
    })
    .then(() => carregar())
}

// function editar(idUsuario){
//     fetch(`http://localhost:3000/usuarios/${idUsuario}`, {
//         'method': 'PUT',
        
//     })
//     .then(response => response.json())
//     .then(() => carregar())
// }

window.onload = carregar