// Classe Pessoas

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    clone(){
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

// pessoa manager - Deus 

class PessoaManeger{
    constructor(){
        this.pessoas = {};
    }

addPessoa(nome,idade,id){
    const pessoa = new Pessoa(nome,idade);
    this.pessoas[id] = pessoa;  

}

getPessoa(id){
    return this.pessoas[id].clone();
}

}

//
const manager = new PessoaManeger();

//adicionar pessoas
manager.addPessoa("João", 30, 1);
manager.addPessoa("Maria", 25, 2);
manager.addPessoa("Gustavo", 25, 3);
manager.addPessoa("Gilberto", 43, 4);
manager.addPessoa("José", 30, 5);


// clonar pessoa de id=1
const pessoa1 = manager.getPessoa(1);
const pessoa2 = manager.getPessoa(1);


// Modidicar dados da pessoas cloonada
pessoa1.idade = 10;
pessoa2.nome = "João da Silva";
pessoa2.idade = 55;

//Imprime as pessoas

console.log(manager.getPessoa(1))
console.log(manager.getPessoa(2))
console.log(manager.getPessoa(3))
console.log(manager.getPessoa(4))
console.log(manager.getPessoa(5))
console.log("-----------------------")
console.log(pessoa1)
console.log(pessoa2)
