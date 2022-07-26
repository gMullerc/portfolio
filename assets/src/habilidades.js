const skills = document.querySelectorAll('.quadro-habilidades');
const skills1 = document.querySelectorAll('.skill1');
const skills2 = document.querySelectorAll('.skill2');
const skills3 = document.querySelectorAll('.skill3');
const skills4 = document.querySelectorAll('.skill4');
const skills5 = document.querySelectorAll('.skill5');
const skills6 = document.querySelectorAll('.skill6');
const descricao = document.querySelector('.texto-habilidades');
const sobreSkill = [
                    '<p><b>JavaScript</b></p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',                    
                    '<p><b>HTML</b></p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p><b>CSS</b></p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p><b>TypeScript</b></p> <br> <p>É uma linguagem de folhas de estilo. Basicamente o Sass potencializa o CSS.</p> <br>',
                    '<p><b>React</b></p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p><b>C#</b></p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>'
]


skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    console.log(elemento1)
    elemento.addEventListener('click', (evento) => {
     console.log('Index: ' +  index1 + ' Value: ' + elemento1.value);

     
          
        switch(index1){
            case 0:
                descricao.innerHTML = `<p>${sobreSkill[0]} </p>` ;
                break;
            case 1:
                descricao.innerHTML = `<p>${sobreSkill[1]} </p>` ;
                break;
                
            case 2:
                descricao.innerHTML = `<p>${sobreSkill[2]} </p>` ;
                break;
            case 3:
                descricao.innerHTML = `<p>${sobreSkill[3]} </p>` ;
                break;
            case 4:
                descricao.innerHTML = `<p>${sobreSkill[4]} </p>` ;
                break;
            case 5:
                descricao.innerHTML = `<p>${sobreSkill[5]} </p>` ;
                break;                

    }

    } )
} );