// Métodos de instância e estáticos
/**
 *  Métodos e atributos da classe
 *
 */

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método de class
  static trocaPilha() {
    console.log("Trocando pilha");
  }
}

const controle = new ControleRemoto("LG");

ControleRemoto.trocaPilha();
