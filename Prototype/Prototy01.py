import copy
#classe pessoa

class Pessoa:
    def __init__(self,nome,idade):
        self.nome = nome
        self.idade = idade
        
    def __str__ (self):
        return f'Nome: {self.nome}, Idade: {self.idade}'
        
    def clone(self):
        return copy.copy(self)
        
    # classe pessoamangar (Deus)
class PessoaManager:
    def __init__(self):
        self.pessoas = {}
            
    def addPessoa(self, nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa
            
    def getPessoa(self, id):
        return self.pessoas[id].clone() 
        
        # ultilizar estrutura
manager = PessoaManager()
        
        #adicionar pessoas 
manager.addPessoa("João", 30, 1)
manager.addPessoa("Maria", 25, 2)
manager.addPessoa("Pedro", 20, 3)
manager.addPessoa("Carlos", 30, 4)
manager.addPessoa("Emillia", 50,5)
        
        
        #clonar pessoas
pessoa1 = manager.getPessoa(1)
pessoa2 = manager.getPessoa(5)
        
        #modificar informações 
pessoa1.idade = 18
pessoa2.nome = "alvaro josé"
pessoa2.idade = 55


#imprimir resultados 
print(manager.getPessoa(1))
print(manager.getPessoa(2))
print(manager.getPessoa(3))
print(manager.getPessoa(4))
print(manager.getPessoa(5))
print("------------------------")
print(pessoa1)
print(pessoa2)
               
    