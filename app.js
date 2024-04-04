alert('Boas vondas ao jogo do número secreto');

let numeroSecreto = 11;
const numero = parseInt(prompt('Escolha um número entre 1 e 100'))

if (numeroSecreto == numero){  
    alert(`vc acertou o número secreto ${numeroSecreto}`)
} else {  
    if (numeroSecreto > numero){
        alert(`O número secreto é maior que ${numero}`);
    } else {
        alert(`O número secreto é menor que ${numero}`);
    }
}

