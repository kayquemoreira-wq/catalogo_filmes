const filmes = [{
    titulo: "Vingadores",
    imagens: "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg",
    descricao: "Os maiores heróis da terra unidos.",
},
{
    titulo: "Batman",
    imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/86/98/32/19870786.jpg",
    descricao: "O cavaleiro das trevas",
},
{
    titulo: "Homem Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da visinhança",
}
]

const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML
    lista.forEach(filme => {
        listaFilmes.innerHTML += `<div class="col-md-4">
          <div class="card card-filme h-100">
          <img src="${filme.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    })
}