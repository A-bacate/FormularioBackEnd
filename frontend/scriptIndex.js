function enviar(){
    let inputNome = document.getElementById('nome').value;
    let inputEmail = document.getElementById(`email`).value;
    let inputSenha = document.getElementById(`senha`).value;
    let inputConfirmarSenha = document.getElementById(`confirma-senha`).value;

    if(!inputNome || !inputEmail || !inputSenha){
        alert("Preencha os campos corretamente!");
        return;
    }
    if (inputSenha !== inputConfirmarSenha){
        alert("As senhas não conferem!");
        return;
    }

    // REQUISIÇÃO  (req)
    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            nome: inputNome,
            email: inputEmail,
            senha: inputSenha
        })
    })
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        alert(`Usuário com ID ${data.id} cadastrado`);

        // Redireciona para a página de usuarios
        window.location.href = "usuarios.html"
    })
}
function irParaLista(){
    window.location.href = "usuarios.html"
}