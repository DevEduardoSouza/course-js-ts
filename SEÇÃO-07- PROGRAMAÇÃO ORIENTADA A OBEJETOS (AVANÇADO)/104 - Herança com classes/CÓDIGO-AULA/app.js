// Herança Com Classe no JS

/**
 *  - Classe mãe
 *  - Classe filhas que herdam da classe mãe
 *  - Classe filha é uma ESPECIFICAÇÃO da classe mãe
 *  - Evitar repetição de código
 *  - Reprensentar uma herança no JS usa "extends"
 *     exemplo: class Filha extends Mae {}
 *     - assim a classe filha vai possuir tos os atributos e metodos da classe mãe
 *  - super() chama o contrutor pai para ser usado na classe derivada
 *      
        class Mae {
          construcutor(nome) {
            this.nome = nome;
          }
        }

        class Filha extends Mae {
          construcutor(nome, escola) {
            super(nome);
            this.escola = escola;
          }
        }
    
    -
 
 */

//Super classe / classe pai
class Employee {
  #name;
  #cpf;
  #sallary;
  constructor(name, cpf, sallary) {
    this.#name = name;
    this.#cpf = cpf;
    this.#sallary = sallary;
  }

  aumento(valor) {
    if (valor <= 0) return;

    this.sallary += (this.sallary * valor) / 100;
  }

  get sallary() {
    return this.#sallary;
  }

  set sallary(sallary) {
    this.#sallary = sallary;
  }
}

// suber classe / classe filho
class Auhtor extends Employee {
  #cargo;
  static maxAumento = 50;

  constructor(name, cpf, sallary, cargo) {
    super(name, cpf, sallary);
    this.cargo = cargo;
  }

  get cargo() {
    return this.#cargo;
  }

  set cargo(cargo) {
    this.#cargo = cargo;
  }

  // polimorfismo
  // Máximo de aumento para autor está travado a 50%
  aumento(valor) {
    if (valor <= 0) return;

    if (valor >= Auhtor.maxAumento) {
      valor = Auhtor.maxAumento;
    }

    this.sallary += (this.sallary * valor) / 100;
  }
}

const eduardo = new Auhtor("Eduardo", "111111", 1000, "Author");

console.log(eduardo.sallary);
eduardo.aumento(100);
console.log(eduardo.sallary);
