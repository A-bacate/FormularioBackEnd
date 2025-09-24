// Busca os dados dos usuários no server
function carregar(){
    fetch('http://localhost:3000/usuarios') // buscou no servidor
    .then(res => res.json()) // transformei a resposta em json (só pra garantir)
    .then(data => { // array com todos os dados que foram buscados (o professor gosta de chamar de 'data' porque são nossos dados :D )
        const tbody = document.getElementById('tabela')
    })
}