const formulario = document.querySelector("#form-post");

const titulo = document.querySelector("#titulo");

const conteudo = document.querySelector("#conteudo");


const tituloRenderizar = document.querySelector("#renderizador-titulo");

const conteudoRenderizar = document.querySelector("#renderizador-conteudo");



formulario.addEventListener("submit", (e) => {

    e.preventDefault();


    const data = {

        title: titulo.value,

        body: conteudo.value,

        userId: 1

    };


    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        body: JSON.stringify(data),

        headers: {

            "Content-type": "application/json; charset=UTF-8"

        }

    })


    .then(response => response.json())


    .then(data => {


        tituloRenderizar.innerHTML = data.title;


        conteudoRenderizar.innerHTML = data.body;



        titulo.value = "";

        conteudo.value = "";


    })


    .catch(error => {

        console.log("Erro:", error);

    });


});

// Observação: restaurado à versão inicial; sem controles dinâmicos.