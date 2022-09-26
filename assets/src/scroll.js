
localizacao = document.querySelectorAll('.condiv');


localizacao.forEach((elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;

    elemento.addEventListener('click', (evento) => {


        switch(index1){
            case 0:   
                         
                window.scrollTo(0, 
                    findPosition(document.getElementById("sobremim")));

                    break;

            case 1:
                window.scrollTo(0, 
                    findPosition(document.getElementById("habilidades")));
                    break; 
            case 2:
                window.scrollTo(0, 
                    findPosition(document.getElementById("projetos")));
                    break;    
            case 3:
                window.scrollTo(0,0);
                    break;                                         
                    
        }


        
    })
    
});
function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

function animarScroll(atual, destino) {
    if (atual >= destino) return;
    document.body.scrollTop = atual;
    setTimeout(function() {
      animarScroll(atual += 50, destino);
    }, 50);
  }
