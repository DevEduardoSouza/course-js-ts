function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEntre();
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnParaDisplay(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        this.apagaUm();
      }
      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
      }
    });
  };

  this.btnParaDisplay = (valor) => {
    this.display.value += valor;
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta Inválida");
        return;
      }

      this.display.value = conta;
    } catch (error) {
      alert("Conta Inválida");
    }
  };

  this.pressionaEntre = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        console.log("entro");
        this.realizaConta();
      }
    });
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
