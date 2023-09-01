class Faculdade{
    constructor(nome, matricula, idade, curso,periodo){
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
        this.curso = curso;
        this.periodo = periodo;
    }

    mostrarDetalhes(){
    console.log(`Nome aluno ${this.nome} mostar matricula ${this.matricula}, qual a idade ${this.idade}
        qual é o curso ${this.curso}, horario do periodo ${this.periodo}`);
    } 
}


class FaculdadeBuilder{
    constructor(){
        this.nome = null;
        this.matricula = null;
        this.idade = null;
        this.curso = null;
        this.periodo = null;
    }

    definirNome(nome){
        this.nome = nome;
        return this;
    }

    definirMatricula(matricula){
        this.matricula = matricula;
        return this;
    }

    definirIdade(idade){
        this.idade = idade;
        return this;
    }

    definirCurso(curso){
        this.curso = curso;
        return this;
    }

    adicionarPeriodo(periodo){
        this.periodo = periodo;
        return this;
    }

    construir(){
        return new Faculdade(this.nome, this.matricula, this.idade, this.curso,this.periodo);
    }
}

// USO DO BUILDER NA PIZZARIA #####################################
const builder = new FaculdadeBuilder();

const curso1 = builder
    .definirNome('Fábio')
    .definirMatricula('299044')
    .definirIdade(21)
    .definirCurso('Engenahria de produção')
    .adicionarPeriodo('Noturno')
    .construir();

curso1.mostrarDetalhes();
