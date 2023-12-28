# Revisão de Array

## Básico

- Array é variável onde eu possa armazenar mais de um valor

- Forma literal

  ```JavaScript
  const names = ["Fernando", "Maria", "Eduardo", "Camillo"];
  ```

- Atribuir um novo valor

  ```JavaScript
  names[0] = "Marcos";
  ```

- Usando contrutor para criar um array

  ```JavaScript
  const names2 = new Array("Maura", "Ana", "Camilla");
  ```

- Referenciação

  ```JavaScript
  /* Os dois apotam para o mesmo valor na memória
   * ou seja se mudar o valor em um muda no outro
   */
  const namesRefe = names;


  <!-- Exemplo -->

  //pop() : remove o último elemento do array
  namesRefe.pop();

  // log :  inicias [names]:   [ 'Marcos', 'Maria' ]
  console.log("inicial [names]:  ", names);

  //log :  referência [namesRefe]:   [ 'Marcos', 'Maria' ]
  console.log("referência [namesRefe]:  ", namesRefe);
  ```

## Spread

- E usado quando um array precisa ser incluído em um novo array
- Fazer uma cópia de um array usando rest _..._

```JavaScript
  const namesSpread = [...names];

  namesSpread.pop();

  console.log("inicial [names] : ", names);
  // Expected output: [ 'Marcos', 'Maria' ]


  console.log("novo [namesSpread] : ", namesSpread);
  // Expected output:  [ 'Marcos' ]

```

## Modificando Arrays

### pop

- Remove o último elemento do array e retorna o mesmo

```JS
  const names = ["Fernando", "Maria", "Eduardo", "Camillo"];

  const elementRemovedEnd = names.pop();

  console.log("Elemento removido do fim Array: ",elementRemovedEnd);
  // Expected output: "Camillo"

```

### shift

- Remove o primeiro elemento do array e retorna o mesmo

```JS
  const names = ["Fernando", "Maria", "Eduardo", "Camillo"];

  const elementRemovedFirst = names.shift();

  console.log("Elemento removido do início do Array: ", elementRemovedFirst);
  // Expected output: "Fernando"

```

### push

- Adiciona um elemento no fim do array e retorna o novo tamanho do array

```JS
  const names = ["Fernando", "Maria", "Eduardo", "Camillo"];
  const newLength = names.push("José");
  console.log(newLength);
  // Expected output: 5

  console.log(names);
  // Expected output: ["Fernando", "Maria", "Eduardo", "Camillo", "José"]
```

### unshitf

- Adiciona um elemento no inicio do array e retorno o novo tamanho do array

```JS
  const names = ["Fernando", "Maria", "Eduardo", "Camillo"];
  const newLength = names.unshitf("José");
  console.log(newLength);
  // Expected output: 5

  console.log(names);
  // Expected output: ["José", "Fernando", "Maria", "Eduardo", "Camillo"]
```

### Performa

- shift e unshift ao deslocar index para seu objetivo tem um custo de memória maior que pop e push

### Slice

- fatiar o array ou "pegar um parte dele" e retornar uma cópia

```JS
  const brandCars = ["BMW", "Mclaren", "Porsche", "Ferrari"];
  const partBrandCars = brandCars.slice(1, 3);
  console.log(partBrandCars);
  //Expected output: [ 'Mclaren', 'Porsche' ]

  // Posso remover usando numero negativos

  // -1 removendo o último elemento
  const partBrandCarsNew = brandCars.slice(0, -1);
  console.log(partBrandCarsNew);
  //Expected output:  ["BMW", "Mclaren", "Porsche"];
```

### Split

- Transforma uma string em um array, precisa de um separador " " ou ","

```JS
  const stack = "JavaScript HTML CSS";
  const stacks = stack.split(" ");
  console.log(stacks);
  //Expected output: [ 'JavaScript', 'HTML', 'CSS' ]

  const job = "front-end, back-end, full-stack";
  const jobs = job.split(",");
  console.log(jobs);
  //Expected output: [ 'front-end', ' back-end', ' full-stack' ]
```

### Join

- Transforma Array em String

```JS
  const ages = [20, 28, 56];
  const age = ages.join(",");

  console.log(age);
  //Expected output:  20,28,56
```
