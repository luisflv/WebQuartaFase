var tbUsuario = [];

var data = new Date();

var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();


function criarUsuario() {
    var usuario = new Object();
    usuario.nome = document.getElementById('nome').value;
    usuario.snome = document.getElementById('snome').value;
    usuario.idade = document.getElementById('idade').value;
    usuario.cpf = document.getElementById('cpf').value;
    usuario.dataCadastro = dia + '/' + mes + '/' + ano;

    if (localStorage.getItem('tbUsuario') != null) {
        tbUsuario = JSON.parse(localStorage.getItem('tbUsuario'));
    }

    tbUsuario.push(usuario);
    localStorage.setItem('tbUsuario', JSON.stringify(tbUsuario));
}

function exibirUsuarios() {
    var table = document.getElementById('tabelaUsuarios');
    table.innerHTML += '<tr><th>Nome</th><th>Sobrenome</th><th>Idade</th><th>CPF</th><th>Data de Inserção</th></tr>';

    if (localStorage.getItem('tbUsuario') != null) {
        tbUsuario = JSON.parse(localStorage.getItem('tbUsuario'));
        for (var i in tbUsuario) {
            table.innerHTML += '<tr><td>' + tbUsuario[i].nome + '</td><td>' + tbUsuario[i].snome + '</td><td>' + tbUsuario[i].idade + '</td><td>' + tbUsuario[i].cpf + '</td><td>' + tbUsuario[i].dataCadastro + '</td></tr>';
        }
    }
}