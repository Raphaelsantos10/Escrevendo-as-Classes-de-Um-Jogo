class Heroi {
    constructor(tipo, ataque) {
        this.tipo = tipo;
        this.ataque = ataque;
    }

    guerreiro() {
        alert(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
    mago() {
        alert(`O ${this.tipo} lançou um feitiço de ${this.ataque}`);
    }
    monge() {
        alert(`O ${this.tipo} usou ${this.ataque}`);
    }
    ninja() {
        alert(`O ${this.tipo} lançou ${this.ataque}`);
    }
}


let num1 = parseInt(prompt(`Escolha um tipo de heroi
1-guerreiro
2-mago
3-monge
4-ninja
Digite o número da opção:`));
let escolha;

if (num1 === 1) {
    escolha = new Heroi("guerreiro", "espada");
    escolha.guerreiro();
} else if (num1 === 2) {
    escolha = new Heroi("mago", "varinha mágica");
    escolha.mago();
} else if (num1 === 3) {
    escolha = new Heroi("monge", "cajado");
    escolha.monge();
} else if (num1 === 4) {
    escolha = new Heroi("ninja", "shuriken");
    escolha.ninja();
} else {
    alert("Opção não reconhecida");
}