# Interface Clinte 
class ITarget:
    def request(self):
        pass
    

 
 # Cliente 
class Client:
    def __init__(self, target):
        self.target = target
         
 
    def makeRequest(self):
        print("Fazendo uma Requesição")
        self.target.request()
 
 
 # serviço existente(ADAPTEE)
class Adaptee:
    def specificRequest(self):
        print("Requisição Especifica do Adaptee")
        

 #Adaptador (ADAPTER)
class Adapter(ITarget):
    def __init__(self, adaptee):
        self.adaptee = adaptee
        
    def request(self):
        self.adaptee.specificRequest()
        
        
# Ultilizando o Adaptador ####
adaptee = Adaptee()
adapter = Adapter(adaptee)
client = Client(adapter)

client.makeRequest()
     