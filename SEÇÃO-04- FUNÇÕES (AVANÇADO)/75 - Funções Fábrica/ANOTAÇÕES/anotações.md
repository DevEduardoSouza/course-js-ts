# Funções Fábrica (Factory Functions)

## Oque são

- As funções Fábrica são útil para **criar objetos** em JS
- São funções quen retornam objetos com propriedades e métodos específicos

```JavaScript
function criarPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // This -> refênrencia minha instância
    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}`;
    },
    altura,
    peso,
    // Usando o get/'gatter' -> minha função se torna um atributo do obj
    get imc() {
      return (this.peso / this.altura ** 2).toFixed(2);
    },
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter -> modifcar um atributo com regras de negócio
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
  };
}
```

- Chamando a função fábrica para criar objetos

```JavaScript
  const pessoa1 = criarPessoa("Eduardo", "Souza", 1.81, 86);
  const pessoa2 = criarPessoa("Luiz", "Souza", 1.81, 86);

  // Mostrando o resultados
  console.log(pessoa1);
  console.log(pessoa1.fala("Programação"));
  console.log(pessoa1.imc);
  console.log(pessoa1.nomeCompleto);

  console.log("\n");

  pessoa2.nomeCompleto = "Maria Souza Silva";
  console.log(pessoa2.nome);
  console.log(pessoa2.sobrenome);
```

### Explicação detalhada

- A função criarPessoa recebe quatro parâmetros: nome, sobrenome, altura e peso.

- Retorna um objeto que contém:

  - Propriedades nome, sobrenome, altura e peso diretamente atribuídas aos valores passados como parâmetros.

  - Um método fala(assunto) que retorna uma string combinando o nome da pessoa com o assunto sobre o qual ela está falando.

  - Um getter imc que calcula o Índice de Massa Corporal (IMC) usando os valores de altura e peso, retornando-o com duas casas decimais.

  - Um getter nomeCompleto que retorna a concatenação do nome e sobrenome.

  - Um setter nomeCompleto que permite modificar tanto o nome quanto o sobrenome ao receber um valor novo, separando o valor em partes (o primeiro nome e o sobrenome) e atualizando as propriedades correspondentes.
