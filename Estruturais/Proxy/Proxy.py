class ServicoReal:
    def executar(self):
        print("Executar o serviço real...")
        

#Proxy

class ProxyServico:
    def __init__(self):
        self.servicoReal = ServicoReal()
        
    def executar(self):
        print("Antes da execução do serviço.")
        self.servicoReal.executar()
        print("Depois da execução do serviço")
        
        
# uso do proxy
proxy = ProxyServico()
proxy.executar()       
    