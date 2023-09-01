// Interfaces da Fabrica Abstrata
 class AbstractFactory{
    createProductA(){}
    createProductB(){}
 }


// Fabrica Concreta que cria o produto A e B 
class ConcreteFactory1 extends AbstractFactory{
    createProductA(){
        return new ConcreteProductA1();

    }
    createProductB(){
        return new ConcreteProductB1();
    }
}

// Fabrica concreta que cria produtos do Tipo A e B  Diferentes 

class ConcreteFactory2  extends AbstractFactory{
    createProductA(){
        return new ConcreteProductA2();
    }
    createProductB(){
        return new ConcreteProductB2();
}
}

// Interfaces dos Produtos A 
class AbstractProductA{
    methodA(){}
}

//Implementação concreta do Produto  do Tipo A especificação 1
class ConcreteProductA1 extends AbstractProductA{
    methodA(){
        return "Produto do Tipo A da Fabrica 1"
    }
}


//Implementação Concreta do Produto do Tipo A - Especificação 2 
class ConcreteProductA2 extends AbstractProductA{
    methodA(){
        return "Produto do Tipo A Fabrica 2"
    }
}


// Interface produto B 
class AbstractProductB{
    methodB(){}
}

//Implementação Concreta  do produto B  Especificação 1
class ConcreteProductB1 extends AbstractProductB{
    methodB(){
        return "Produto do Tipo B da Fabrica 1"
    }
}


//Implementaçãoo Concreta do produto B Especificação 2

class ConcreteProductB2 extends AbstractProductB{
    methodB(){
        return "Produto do Tipo B Fabrica 2"
    }
}


// Função para Demonstrar o Padrão Abstract Factory
function clienteCode(factory){
    const ProductA = factory.createProductA();
    const ProductB = factory.createProductB();

    console.log(ProductA.methodA());
    console.log(ProductB.methodB());
}

// Eemplo de Uso com Primeira Fabrica
const factory1 = new ConcreteFactory1();
clienteCode(factory1);

// Exemplo de Uso com Segunda fabrica

const factory2 = new ConcreteFactory2();
clienteCode(factory2);
