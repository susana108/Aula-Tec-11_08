// objeto real
class ServicoReal{
    public void executar(){
        System.out.println("executando o serviço real");
    }

    
}


//proxy

class ProxyServico{
    private ServicoReal servicoReal;


    public ProxyServico(){
        this.servicoReal = new ServicoReal();

    }

    public void executar(){
        System.out.println("Antes da execução do serviço");
        servicoReal.executar();
        System.out.println("Depois da Executar do Serviço");

    }

}

//uso proxy
class Proxy01 {
    public static void main(String[] args){
        ProxyServico proxy = new ProxyServico();
        proxy.executar();
    }
}