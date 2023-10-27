// Objeto final
class ServirReal{
    executar(){
        console.log("Executando o serviçi real...")

    }
}

// Proxy 
class ProxyServico{
    constructor(){
        this.ServirReal = new ServirReal();

    }

    executar(){
        console.log("Antes da execução do serviço");
        this.ServirReal.executar();
        console.log("Depois da execução do serviço");
    }
}

// uso do proxy - cliente 
const proxy = new ProxyServico();
proxy.executar();