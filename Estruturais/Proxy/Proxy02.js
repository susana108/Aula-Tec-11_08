// Objeto Real - Classe Produto 
class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes(){
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`);
    }
}

//proxy - Classe ProxyProduto
class ProxyProduto{
    constructor(produto){
        this.produto = produto;
    }

    exibirDetalhes(){
        console.log("Arguadando autenticação...");
        this.autenticar();
        this.produto.exibirDetalhes();
    }

    autenticar(){
        console.log("Autenticação usuario...");
        //inserir logica de autenticacao aqui
        console.log("Usuario autenticado com sucesso");

    }
}

//cliente - uso do proxy
const produtoReal = new Produto("Camisetas", 39.60);
const proxyProduto = new ProxyProduto(produtoReal)

proxyProduto.exibirDetalhes();