alert('Boas vondas ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 100 +1);
let numero;
let tentativa = 1;

while (numero != numeroSecreto) {

    numero = parseInt(prompt('Escolha um número entre 1 e 100'));

    if (numeroSecreto == numero){  
        break;
    } else {  
        if (numeroSecreto > numero){
            alert(`O número secreto é maior que ${numero}`);
        } else {
            alert(`O número secreto é menor que ${numero}`);
        }

        tentativa++;

    }
}

let tentativas = tentativa > 1 ? 'tentativas' : 'tentativa';

alert(`vc acertou o número secreto ${numeroSecreto} em ${tentativa} ${tentativas}`);




