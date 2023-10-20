# Componente 
class ComponenteNotificador:
    def enviar(self, mensagem):
        print("Enviar mensagem: {mensagem}")
        
#Decorar Base 
class DecoradorNotificador:
    def __init__(self, componente):
        self.componente = componente
    
    def enviar(self, mensagem):
        self.componente.enviar(mensagem)
        
# Decorador concreto 1
class DecoradorNotificadorSMS(DecoradorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviando mensagem por SMS: {mensagem}")
        

#Decorador Concreto 2 
class DecoradorNotificadorFacebook(DecoradorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviar mensagem pelo Facebook {mensagem}")
        
#Clinte ####

notificador = ComponenteNotificador()
notificadorComSMS = DecoradorNotificadorSMS(notificador)
notificadorComFacebook = DecoradorNotificadorFacebook(notificadorComSMS)

notificadorComFacebook.enviar("ola mundo")