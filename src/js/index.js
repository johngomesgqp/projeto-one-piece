/*
    O que preisa fazer ? - Quando clicar no botão do personagem
    na lista, o botão deve ser marcado como selecionado e mostrar o
    personagem correspondente.

    OBKETIVO 01 - Quando clicar no botõo do personagem na      lista, mrcar o botão como selecionado
      passo 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
      passo 2 - Adicionar a classe "selecionado" no botão que o usuário clicou
      passo 3 - Verificar se já esxiste um botão selecionado, se sim, devemos remover a seleção dele.
    
    OBJETIVO 02 - Quando clicar no botão do personagem mostrar as informações do personagem.
       passo 1 - Pegar os personagens no JS pra poder mostrar ou esconder.
       passo 2 - Adicionar a classe "seleconado" no personagem que o usuário selecinou.
       passo 3 - Verificar se já existe um personagem selecionado, devemos remover a seleção dele.

*/


// OBKETIVO 01 - Quando clicar no botõo do personagem na      lista, mrcar o botão como selecionado.
//passo 1 - Pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.


const botoes = document.querySelectorAll(".botao");

//OBJETIVO 02 - Quando clicar no botão do personagem mostrar as informações do personagem.
//passo 1 - Pegar os personagens no JS pra poder mostrar ou esconder.

const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        // passo 3 - Verificar se já esxiste um botão selecionado, se sim, devemos remover a seleção dele.
        desselecionarBotao();


        // passo 2 - Adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");

        // passo 3 - Verificar se já existe um personagem selecionado, devemos remover a seleção dele.

        desselecionarPersonagem();

        //passo 2 - Adicionar a classe "seleconado" no personagem que o usuário selecinou.

        personagens[indice].classList.add("selecionado");
    });

});





function desselecionarPersonagem() {
    const personagensSelecionado = document.querySelector(".personagem.selecionado");
    personagensSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
