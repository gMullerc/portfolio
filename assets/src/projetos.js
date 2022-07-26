
const botaoVerMais = document.querySelector('.ver-mais').addEventListener('click', function clicado(){
    adicionarQuadros();
    reposicionarVerMais();
    

});

const botaoVerMenos = document.querySelector(".reposicionador").addEventListener('click', function clicado(){
    reposicionarVerMenos();
    removeQuadros();
})

const quadrosAdicionais = document.querySelectorAll('#quadros-notactive');


function adicionarQuadros(){
/*Aqui ele faz um for para percorrer o queryselectorall e adicionar os ids corretamente*/
    for (const box of quadrosAdicionais) {
        box.id = 'quadros-active';
        box.removeAttribute('quadros-notactive');
    }
}
function removeQuadros(){
    
    for (const box2 of quadrosAdicionais) {
        box2.id = 'quadros-notactive';
        box2.removeAttribute('quadros-active');
    }
}
function reposicionarVerMais(){
    const botaoVerMais =  document.querySelector('.ver-mais');
    const botaoVerMenos =  document.querySelector('.ver-menosnotactive');
    const githubLink = document.querySelector('.githubredirect');
    /*adiciona classe para sumir o botao ver mais e aparecer ver menos*/
    githubLink.classList.add('githubredirectactive')
    botaoVerMais.classList.add("ver-maisactive");
    botaoVerMenos.classList.add("ver-menosactive");
    /*remove as classes que ficaram apos adicionar para nao dar conflito com css*/
    botaoVerMais.classList.remove("ver-mais");
    botaoVerMenos.classList.remove("ver-menosnotactive");

   

}



function reposicionarVerMenos(){
    let botaoVerMais = document.querySelector('.ver-maisactive');
    let botaoVerMenos = document.querySelector('.ver-menosactive');
    let githubLinkSubir = document.querySelector('.githubredirectactive');

    botaoVerMais.classList.add('ver-mais');
    botaoVerMenos.classList.add('ver-menosnotactive');
    githubLinkSubir.classList.add('githubredirect')

    botaoVerMais.classList.remove('ver-maisactive');
    botaoVerMais.classList.remove('ver-menosactive');
    githubLinkSubir.classList.remove('githubredirectactive');
    console.log(botaoVerMais, botaoVerMenos, githubLinkSubir);
}

