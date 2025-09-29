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

function editar(idUsuario){
    let novoNome = prompt("Digite o novo nome: ")
    let novoEmail = prompt("Digite o novo email: ")
    let novaSenha = prompt("Digite a nova senha: ")

    if(novoNome<1){
        alert("Nome não pode estar vazio!")
        return
    }
    if(novoEmail<1){
        alert("Email não pode estar vazio!")
        return
    }
    if(novaSenha<1){
        alert("Senha não pode estar vazia!")
        return
    }
    fetch(`http://localhost:3000/usuarios/${idUsuario}`, {
        'method': 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            nome: novoNome,
            email: novoEmail,
            senha: novaSenha 
        })   
    })
    .then(() => carregar())
}

window.onload = carregar