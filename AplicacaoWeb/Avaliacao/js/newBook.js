var tbLivro = [];

function criarLivro() {
    var livro = new Object();
    livro.nome = document.getElementById('nome').value;
    livro.isbn = document.getElementById('isbn').value;
    livro.autor = document.getElementById('autor').value;
    livro.editora = document.getElementById('editora').value;
    livro.npaginas = document.getElementById('npaginas').value;
    livro.usuario = document.getElementById('usuario').value;

    if (localStorage.getItem('tbLivro') != null) {
        tbUsuario = JSON.parse(localStorage.getItem('tbLivro'));
    }

    tbLivro.push(livro);
    localStorage.setItem('tbLivro', JSON.stringify(tbLivro));
}

function exibirLivros() {
    var table = document.getElementById('tabelaLivros');
    table.innerHTML += '<tr><th>nome</th><th>ISBN</th><th>Autor</th><th>Editora</th><th>N Paginas</th><th>Usuario</th></tr>';

    if (localStorage.getItem('tbLivro') != null) {
        tbLivro = JSON.parse(localStorage.getItem('tbLivro'));
        for (var i in tbLivro) {
            table.innerHTML += '<tr>\n\
                                    <td>'+ tbLivro[i].nome + '</td>\n\
                                    <td>'+ tbLivro[i].isbn + '</td>\n\
                                    <td>'+ tbLivro[i].autor + '</td>\n\
                                    <td>'+ tbLivro[i].editora + '</td>\n\
                                    <td>'+ tbLivro[i].npaginas + '</td>\n\
                                    <td>'+ tbLivro[i].usuario + '</td>\n\
                                </tr>';
        }
    }
}