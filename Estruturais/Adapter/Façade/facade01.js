// subsistema 1 
class SistemaPagamento{
    processarPagamento(valor){
        console.log(`Processamento pagamento no valor de R$ ${valor}`);
    }
}

//subsistema 2
class SistemaLogistica{
    enviarProduto(destinatario){
        console.log(`Enviar Produto para: ${destinatario}`);
    }
}

//subsistema 3 
class SistemaNotificacao{
    enviarEmail(destinatario,mensagem){
        console.log(`Enviar e-mail para ${destinatario}: ${mensagem}`);
    }
}

//fachda 
class LojaOnline{
    constructor(){
        this.pagamento = new SistemaPagamento();
        this.Logistica = new SistemaLogistica();
        this.Notificacao = new SistemaNotificacao();
    }

    realizarCompra(produto, destinatario){
        this.pagamento.processarPagamento(produto.preco);
        this.Logistica.enviarProduto(destinatario);
        this.Notificacao.enviarEmail(destinatario, `Seu pedido de ${produto.nome} foi enviado`);

    }
}

//Cliente - exemplo de uso ##########33

const loja = new LojaOnline();

const produto = {
    nome: 'camiseta',
    preco: 49.99
}

const destinatario = 'usuarioteste@teste.com';

loja.realizarCompra(produto,destinatario);