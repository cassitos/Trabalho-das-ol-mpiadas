
let resultadoBatalha
let continuarHistoria = true
let EscolhaCapitulo3
let EscolhaCapitulo2
let primeiraEscolhaCapitulo1
let condicionalMenu
let avancoNaHistoria = 7
let whileBatalha = true;
let vidaPersonagem = 100;
let vidaInimigo = 200;
let danoPersonagem = 10;
let inventario = ["nada", "nada", "nada"]
 
function focoOfensivo() {
    danoPersonagem += 5;
    alert('Ataque aumentado em 5 pontos.');
}
 
function ataqueBasico() {
    vidaInimigo -= danoPersonagem;
    alert(`Você causou ${danoPersonagem} de dano ao inimigo.`);
}
 
function focoDefensivo() {
    vidaPersonagem += 15;
    alert('Sua vida aumentou em 5 pontos.');
}
 
function ataqueInimigo() {
    let danoInimigo = 10;
    vidaPersonagem -= danoInimigo;
    alert(`O inimigo causou ${danoInimigo} de dano a você.`);
}
 
function batalha1() {
    while (whileBatalha) {
        alert(`Sua vida atual é ${vidaPersonagem} e a do seu inimigo é ${vidaInimigo}`);
        let ataque = Number(prompt(`Você tem 3 opções de habilidades.\n(1) - Foco ofensivo - Aumenta o ataque do usuário em 5 pontos.\n(2) - Ataque Básico - Dá o dano baseado em seu status de ataque.\n(3) - Foco Defensivo - Aumenta 15 de vida do usuário.`));
       
        switch (ataque) {
            case 1:
                focoOfensivo();
                ataqueInimigo();
                break;
            case 2:
                ataqueBasico();
                ataqueInimigo();
                break;
            case 3:
                focoDefensivo();
                ataqueInimigo();
                break;
            default:
                alert('Escolha inválida.');
        }
 
        if (vidaPersonagem <= 0) {
            alert('Você foi derrotado!');
            alert('Você pode retornar ao último checkpoint ou continuar.')
            resultadoBatalha = false
            whileBatalha = false;
        } else if (vidaInimigo <= 0) {
            alert('Você derrotou o inimigo!')
            resultadoBatalha = true
            whileBatalha = false;
        }
    }
}
 
function retornarUltimoEstagio(){
    alert("Retornando ao último estágio.")
    avancoNaHistoria++
}

function final(){
    alert("Você conseguiu chegar nas olímpiadas, parabéns!")
}

function finalRuim(){
    alert(`Você falhou pelo caminho e não chegou nas olímpiadas.`)
    continuarHistoria = false
}

function historia(){

    if(avancoNaHistoria === 7){
        cap1()
    }
    else if(avancoNaHistoria === 6){
        cap2()
    }
    else if(avancoNaHistoria === 5){
        cap3()
    }
    else if(avancoNaHistoria === 4){
        cap4()
    }
    else{
        finalRuim()
    }
}


function cap1(){
    primeiraEscolhaCapitulo1 = Number(prompt(`Você é um atleta com o foco de atingir as olímpiadas, atualmente está em casa, onde tem diversas coisas. Você deseja pegar os itens disponíveis?\n 1 = Sim\n2 = Não`))

        if(primeiraEscolhaCapitulo1 == 1){
            alert(`Você obteu algumas emoções. Abra o seu inventário para ver.`)
                inventario.splice(0,3)
                inventario.push("Empatia","carinho","coragem")
                avancoNaHistoria--
        }

        else if(primeiraEscolhaCapitulo1 == 2){
                alert(`Você não obteve nada.`)
                avancoNaHistoria--
        }
        
        else{
            alert(`Escolha inválida.`)
        }
}

function inventario1(){
    alert(`Os itens do seu inventário são ${inventario}`)
}

function cap2(){
    alert(`Após obter essas emoções, você decide sair em busca das olímpiadas. Está longe, mas tem  determinação, e talvez, com as certas escolhas, vai chegar até o objetivo.`)

        if(primeiraEscolhaCapitulo1 == 1){
            EscolhaCapitulo2 = Number(prompt(`Pelo caminho, você encontra um mendigo que está com fome. Tendo dinheiro, você pode auxiliar ele, comprando uma comida. Você quer fazer isso? \n 1 = Sim\n2 = Não`))
            if(EscolhaCapitulo2 == 1){
                alert(`Você ajudou ele, ganhando uma motivação maior para chegar ao campeonato.`)
                inventario.splice(0,1)
                avancoNaHistoria--
            }
            else{
                alert(`Você simplesmente segue em frente.`)
                avancoNaHistoria--
            }
        }

        else {
            alert(`Pelo caminho, você encontra um mendigo que está com fome. Sem dinheiro, você não pode auxiliar ele. Assim, segue viagem.`)
            avancoNaHistoria--
        }

    }

function cap3(){
    alert(`Logo após isso, você continua viagem por alguns dias. Um momento de sua viagem, você vê uma garota chorando.`)

        if(primeiraEscolhaCapitulo1 == 1){
            EscolhaCapitulo3 = Number(prompt(`"Preciso dos meus pais.. estou sozinha!" - diz a garota\n Você pode levar ela até um centro de adoção. Você quer? \n 1 = Sim\n2 = Não`))
            if(EscolhaCapitulo3 == 1){
                alert(`Você ajudou ela, tendo confiança de seguir em frente.`)
                inventario.splice(0,1)
                avancoNaHistoria = 4
            }
            else{
                alert(`Você simplesmente segue em frente.`)
                avancoNaHistoria = 4
            }
        }

        else {
            alert(`Pelo caminho, você encontra uma garota chorando mas ignora.`)
            avancoNaHistoria = 4
        }
        
}

function cap4(){
    alert(`Antes de chegar ao local, você acaba esbarrando em um homem, que te ataca, e você precisa lutar.`)
        batalha1()
        if(primeiraEscolhaCapitulo1 == 1 && resultadoBatalha == true){
            alert(`Você conseguiu ganhar do homem, derrotando-o com muita coragem. Desse modo, você finalmente chega nas olímpiadas, podendo comemorar seu esforço. No fim, foi campeão.`)
            alert("Parabéns.")
            continuarHistoria = false
        }
 
        else if(primeiraEscolhaCapitulo1 == 1){
            let escolhaCap4 = Number(prompt("Deseja retornar ao último capítulo para repetir a luta?\n 1 - sim \n 2 - não"))
            if(escolhaCap4 == 1){
                avancoNaHistoria++
            }
            else{
                alert("você foi derrotado.")
         
                avancoNaHistoria--
            }
        }
        else{
            alert("você foi derrotado.")

            avancoNaHistoria--
        }
}

function menu(){


    while(continuarHistoria){
        condicionalMenu = Number(prompt(`1 - Continuar história\n2 - Ver inventário\n 3 - Retornar ao último checkpoint\n 4 - Sair do jogo`))

        switch(condicionalMenu){
            case 1:
                historia()
                break
            case 2:
                inventario1()
                break
            case 3:
                retornarUltimoEstagio()
                break
            case 4:
                continuarHistoria = false
                break
            default:
                alert("Opção inválida, por favor escolha uma opção válida.")
            break
        }
    }
}

menu()