// Interfaces da Fabrica Abstrata
class FabricaAbstrata{
    criarProdutoEletronico(){}
    criarProdutoModa(){}
 }


// Fabrica Concreta que cria o produto moda
class FabricaEletronico extends FabricaAbstrata{
    criarProdutoEletronico(){
        return new Telefone();

    }
    criarProdutoModa(){
        return new ProdutoModa();
    }
}

// FABRICA CONCRETA CRIAR PRODUTO MODA 
class FabricaModa extends FabricaAbstrata{
    criarProdutoModa(){
        return new Camiseta();
    }
    criarProdutoEletronico(){
        return new Telefone();// Para manter a estrutura
    }
}
// Classe Abstrata para Produtos Eletrônicos

class ProdutoEletronico{
    constructor(){
        this.tipo = "eletronico";
    }
    descricao(){
        return `Produto ${this.tipo}: Telefone`;
    }
        
}

// Classe Abstrata para Produtos Moda
class ProdutoModa{
    constructor(){
        this.tipo = "moda";
    }

    descricao(){
        return `Produto ${this.tipo}: Camiseta`;
    }
}


// Classe Concreta para Produtos Eletrônicos
class Telefone extends ProdutoEletronico{
    descricao(){
        return `Produto ${this.tipo}: Telefone `;
    }
}

// Claase Concreta para Produtos Moda
class Camiseta extends ProdutoModa{
    descricao(){
        return `Produto ${this.tipo}: Camiseta`;
    }
}

//########## Simulação do uso do Padrão Abstract Factory em LojaVirtual ##########
function lojaVirtual(cliente, fabrica){
    const produtoEletronico = fabrica.criarProdutoEletronico();
    const produtoModa = fabrica.criarProdutoModa();

    console.log(`${cliente} comprou:`);
    console.log(produtoEletronico.descricao());
    console.log(produtoModa.descricao());
}

// Exemplo de Uso com a Fabrica de Produtos Eletronico e Moda
const cliente1 = "Maria Silva";
const fabricaEletronico = new FabricaEletronico();
lojaVirtual(cliente1, fabricaEletronico);

console.log("\n ------- \n");


// Exemplo de Uso com a Fabrica de Produtos Moda
const cliente2 = " João Silva";
const fabricaModa = new FabricaModa();
lojaVirtual(cliente2, fabricaModa);