# Subsistema 
class SistemaPagamento:
    def processadorPagamento(self, valor):
        print(f"processamento pagamento no valor de R$ {valor}")


#Subsistema 2 
class SistemaLogistica:
    def enviarProduto(self,destinatario):
        print(f"Enviar produto para: {destinatario}")
        
        
#Subsistema 3
class SistemaNotificacao:
    def enviarEmail(self,destinatario, mensagem):
        print(f"Enviar email para: {destinatario}: {mensagem}")
        

#fachada 
class LojaOnline:
    def __init__(self):
        self.pagamento = SistemaPagamento()
        self.logistica = SistemaLogistica()
        self.notificacao = SistemaNotificacao()
        
    def realizarCompra(self,produto,destinatario):
        self.pagamento.processadorPagamento(produto['preco'])
        self.logistica.enviarProduto(destinatario)
        self.notificacao.enviarEmail(destinatario, f"Seu pedido de {produto['nome']} foi enviado")
        
# clinte ]]###

loja = LojaOnline()

produto = {
    "nome": "Camiseta",
    "preco": 49.99
}

destinatario = 'teste@teste.com'

loja.realizarCompra(produto, destinatario)
        
    