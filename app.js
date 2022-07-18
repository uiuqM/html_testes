//setando valor inicial
let contador = 0;

//selecionando valor e botoes
const valor = document.querySelector("#valor");
const botoes = document.querySelectorAll(".botao");

console.log(botoes)

//criando um loop para percorrer os botoes, retornando qual botao esta sendo clicado.
botoes.forEach(function(botao){
    botao.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if(style.contains("decrementa")){
            contador--;
        }
        else if(style.contains("incrementa")){
            contador++;
        }
        else{
            contador = 0;
        }
        if(contador>0){
            valor.style.color = "green";
        }
        else if(contador<0){
            valor.style.color = "red";
        }
        else{
            valor.style.color = "black";
        }
        valor.textContent = contador;
    });
});