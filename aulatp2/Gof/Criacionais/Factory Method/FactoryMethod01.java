//Class base de veiculo
 class Veiculo{

    private String modelo;

    public Veiculo(String modelo){
        this.modelo = modelo;
    }

    public void mostrarDetalhas(){
        System.out.println("Modelo" + modelo);
    }    

}


 
 // Subclasses de veiculo
class Carro extends Veiculo{
    public Carro(String modelo){
        super(modelo);
    }
}

 class Moto extends  Veiculo{
    public Moto(String modelo){
        super(modelo);
    }
}

//Fabrica abstrata de veiculos 
abstract class FabricaDeVeiculos{
    public  Veiculo criarVeiculo(String modelo){
        return new Carro(modelo);
    }
}
// Fabrica concreta de motos 
class FabricaDeMotos extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Moto(modelo);
    }

}

// Fabrica concreta de motos 
class FabricaDeCarros extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Carro(modelo);
    }

}
//uso das fabricas 
public class FactoryMethod01 {

    public static void main (String[] args){
        FabricaDeVeiculos fabricaDeCarros = new FabricaDeCarros();
        Veiculo carro = fabricaDeCarros.criarVeiculo("Sedan");
        carro.mostrarDetalhas();
        FabricaDeVeiculos fabricaDeMotos = new FabricaDeMotos();
        Veiculo moto = fabricaDeMotos.criarVeiculo("Esportivo");
        moto.mostrarDetalhas();
    }
}



