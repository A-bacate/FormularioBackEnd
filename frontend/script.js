function enviar(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById(`email`).value;
    let senha = document.getElementById(`senha`).value;
    let confirmarSenha = document.getElementById(`confirma-senha`).value;

    if(!nome || !email || !senha){
        alert("Preencha os campos corretamente!");
        return;
    }
    if (senha !== confirmarSenha){
        alert("As senhas não conferem!");
        return;
    }
}