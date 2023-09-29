//classe cliente
class Client{
    private Adapter adapter;

    public Client(){
        this.adapter = new Adapter();
    }

    public void request(){
        System.out.println("fazndo uma requisição");
        this.adapter.specificRequest();

    }
}


// classe serviço existente
class Adaptee{
    void specificRequest(){
        System.out.println("Adaptação do serviçoExistente para o cliente");

    }
}


// classe adaptador (adpter)
class Adapter extends Adaptee {
    //Sobrescrever o método de requisição especifica para o adaptador 
    @Override
    void specificRequest(){
        
        System.out.println(" Adaptação do serviço  existente para o cliente");
    }
}

// utilização ###
public class Adapter02{
    public static void main(String[] args){
        Client client = new Client();
        client.request();
    }
}