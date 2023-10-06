class Componente{
    constructor(nome){
        this.nome = nome;
    }

    adicionar(){}

    remover(){}


    obterNome(){}

}

class Folha extends Componente{
    constructor(nome, preco){
        super(nome);
        this.preco = preco;
    }

    obterNome(){
        return this.nome;
    }

    obterPreco(){
        return this.preco;
    }
}

class Conteiner extends Componente{
    constructor(nome){
        super(nome);
        this.componentes = [];
    }
    adicionar(componentes){
        this.componentes.push(componentes);
    }
    remover(componentes){
        const index = this.componentes.indexOf(componentes);
        this.componentes.splice(index, 1)
    }
    obterNome(){
        return this.nome;
    }

    obterPreco(){
        let preco = 0;
        this.componentes.forEach(componentes => {
            preco += componentes.obterPreco();
        });

        return preco;
    }
}

// usando  o recurso como fruta e preco ////
const maca = new Folha("Maça", 2.50);
const laranja = new Folha("Lanja", 3.00);
const uva = new Folha("Uva", 5.00)

const frutas = new Conteiner("Frutas");


frutas.adicionar(maca);
frutas.adicionar(laranja);
frutas.adicionar(uva);


const caixa = new Conteiner("Caixa de frutas");
caixa.adicionar(frutas);
caixa.adicionar(new Folha("Embalagem", 1.00));
caixa.adicionar(new Folha("Emabalagem", 1.00));
caixa.adicionar(new Folha("Embalagem",1.00));


console.log (`Preço Total: R$${caixa.obterPreco()}`);