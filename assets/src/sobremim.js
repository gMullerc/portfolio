
var idade = (ano_aniversario, mes_aniversario, dia_aniversario) => {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}




var element = document.querySelector(".sobremim-texto");
var text = document.createTextNode(

    `Meu nome é Guilherme Muller, tenho ${idade(2002, 08, 01)} anos, atualmente estou cursando Ciências da Computação 2º semestre na Universidade Nove de Julho (UNINOVE). Sou fascinado pela área de desenvolvimento desde que realizei meu curso técnico na instituição SENAC, no curso técnico em informática.\n
    Devido a esse curso venho aprimorando meus conhecimentos e buscando novas formas de melhorar meu desenvolvimento pessoal e acadêmico.Já realizei alguns projetos pessoais durante essa trajetória que me deram a competência e aptidão em Lógica de programação, JavaScript, TypeScript e Design responsivos com HTML e CSS. Já utilizei as seguintes linguagens de programação: Python, C++, C#, PHP e JS. \n
    Meus principais pontos positivos são: Trabalho em grupo, visão analítica, facilidade no aprendizado e proatividade.`);



element.appendChild(text);

console.log(text.textContent.replace(/\n/g, '<br>' ));



