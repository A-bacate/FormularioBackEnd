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
            const td = document.createElement('tr')
            true.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td></td>
            `
        });
    })
}