// Interface do cliente 
class ITarget{
    request(){}
}


// Cliente
class Client{
    constructor(target){
        this.target = target;
    }

    makeRequest(){
        console.log("Fazendo uma Requisição");
        this.target.request();
    }
}



// Serviço Existente (Adapter)
class  Adaptee{
    specificRequest(){
        console.log("Requisição Especifica do adaptee")

    }
    
    }

    //Adaptador (Adaptee)
 class Adapter {
    constructor(adaptee){
        this.adaptee = adaptee; 
     }

        request(){
            this.adaptee.specificRequest();

        }
    }
    
    // Utilizando o Adaptador ######
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const client = new Client(adapter);


client.makeRequest();
