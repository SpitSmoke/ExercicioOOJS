
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }
}


class Cachorro extends Animal {
    fazerSom() {
        console.log(`${this.nome} diz: Au Au!`);
    }
}


class Gato extends Animal {
    fazerSom() {
        console.log(`${this.nome} diz: Miau!`);
    }
}


const cachorro1 = new Cachorro("Tobi", 5);
const gato1 = new Gato("Gatoxinha", 3);
const cachorro2 = new Cachorro("Malboro", 2);


cachorro1.fazerSom(); 
gato1.fazerSom(); 
cachorro2.fazerSom(); 
