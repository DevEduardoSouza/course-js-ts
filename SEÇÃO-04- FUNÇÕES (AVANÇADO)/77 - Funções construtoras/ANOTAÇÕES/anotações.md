# Funções Construtoras

## Oque são ?

- São usadas para crair novos objetos
- São como modelos/model
- Para criar uma função construtora usa a palavra function

```JavaScript
  // Sempre começar com a letra maiúscula
  function Pessoa(){}
```

- podem ser passado parâmetros

```JavaScript
  function Pessoa(nome, sobrenome){}
```

- Os atributos e métodos públicos usa a palavra **this**

```JavaScript
  function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = () =>{
      return `${this.nome} ${this.sobrenome}`
    }
  }
```

- para criar um novo objeto usa a palavra **new**

```JavaScript
  function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = () =>{
      return `${this.nome} ${this.sobrenome}`
    }
  }

  const p1 = new Pessoa("Eduardo", "Souza");
  console.log(p1.nomeCompleto());
```
