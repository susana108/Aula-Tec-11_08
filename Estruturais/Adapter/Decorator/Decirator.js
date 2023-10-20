// Componente
class ComponenteNotificador{
    enviar(mensagem){
        console.log(`Enviando Messagem: ${mensagem}`);
    }
}


//Decorador base
class DecoradorNotificador{
    constructor(componente){
        this.componente = componente;
    
}

enviar(mensagem){
    this.componente.enviar(mensagem);
}

}

// Decorador Concreto 1 
class DecoradorNotificadorSMS extends DecoradorNotificador{
    enviar(mensagem){
        super.enviar(mensagem);
        console.log(`Enviar mensagem por SMS: ${mensagem}`);

    }
}

//Decorador Concreto 2 
class DecoradorNotificadorFacebook extends DecoradorNotificador{
    enviar(mensagem){
        super.enviar(mensagem);
        console.log(`Enviar mensagem pelo facebook ${mensagem}`);
    }
}


// Cliente #########3
const notificador = new ComponenteNotificador();
const notificadorComSMS = new DecoradorNotificadorSMS(notificador);
const notificadorComFacebook = new DecoradorNotificadorFacebook(notificadorComSMS)

notificadorComFacebook.enviar("Ola Mundo...")