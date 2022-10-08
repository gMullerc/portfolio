
localizacao = document.querySelectorAll('.condiv');
localizacaoMobile = document.querySelectorAll('.codiv-mobile')

localizacao.forEach((elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;

    elemento.addEventListener('click', (evento) => {


        switch(index1){
            case 0: 
                window.scrollTo(0,0);
                break;
            case 1:   
                         
                window.scrollTo(0, 
                    findPosition(document.getElementById("sobremim")));

                    break;

            case 2:
                window.scrollTo(0, 
                    findPosition(document.getElementById("habilidades")));
                    break; 
            case 3:
                window.scrollTo(0, 
                    findPosition(document.getElementById("projetos")));
                    break;    
            case 4:
                window.scrollTo(0,0);
                    break;                                         
                    
        }


        
    })
    
});
localizacaoMobile.forEach((elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;

    elemento.addEventListener('click', (evento) => {


        switch(index1){
            case 0: 
                window.scrollTo(0,0);
                break;
            case 1:   
                         
                window.scrollTo(0, 
                    findPosition(document.getElementById("sobremim")));

                    break;

            case 2:
                window.scrollTo(0, 
                    findPosition(document.getElementById("habilidades")));
                    break; 
            case 3:
                window.scrollTo(0, 
                    findPosition(document.getElementById("projetos")));
                    break;    
            case 4:
                window.scrollTo(0,0);
                    break;                                         
                    
        }


        
    })
    
});
function findPosition(obj) {
    var currenttop = -50;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}


