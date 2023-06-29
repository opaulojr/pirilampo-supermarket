# Projeto Pirilampo Supermarket

Este é meu 3° projeto durante a minha jornada na Trybe!

Nele sou responsável por desenvolver funções que serão utilizadas para implementar as regras de negócio do site de **Supermercado Pirilampo**. As funcionalidades envolvem a manipulação e busca de produtos em estoque, minha responsabilidade é pela parte lógica, portanto, não desenvolvi nenhuma tela (HTML e CSS).

## Estrutura do Repositório

- A pasta `src` contém todo o código.

- Cada implementação foi desenvolvida em um arquivo específico;

- Cada implementação foi desenvolvida em uma função específica;

- A base de dados utilizada se encontra no arquivo `data.json`, dentro do diretório `src`;

## Funcionalidades Implementadas

## 1. Implementado uma função que retorne a quantidade de produtos únicos em estoque

O site do Supermercado Pirilampo possui uma área de Gestão de Estoque. Essa área precisa mostrar a quantidade de produtos únicos em estoque, um recurso muito útil para conseguir gerenciar a variedade de mercadorias do estabelecimento.

<details>

<summary><strong>Foi desenvolvida uma função que retorna o número de produtos únicos em estoque</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `unique-products-amount.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getUniqueProductsAmount`;

### Regras de negócio

- A função deve retornar um `number`;
- Um produto pode ter 50 unidades em estoque mas deve ser contabilizado apenas como 1 produto.
- Cada objeto do array `stockProducts` é um produto único.

### A função `getUniqueProductsAmount` ao receber um array com objetos

- Retorna um valor do tipo `number`;
- Ao utilizar o `data.json` como fonte do estoque, a função retorna o número `29`;
- Em um cenário onde o array tenha 10 objetos, a função deve retornar o número `10`;
- Em um cenário onde o array esteja vazio, a função deve retornar o número `0`.

</details>

## 2. Implementado uma função que retorne os nomes dos produtos únicos em estoque

Além da quantidade de produtos únicos, a área de Gestão de Estoque deve apresentar a lista com o nome dos produtos, funcionalidade muito útil para visualizar quais os produtos que possui em estoque.

<details>

<summary><strong>Foi desenvolvido uma função que retorna um array com os nomes dos produtos únicos em estoque</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `unique-products-name.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getUniqueProductsName`.

### Regras de negócio

- A função deve retornar um `array` de `string`;
- O `array` retornado pela função deve ter o nome de **todos** os produtos do `array` de objetos em estoque.

### A função `getUniqueProductsName` ao receber um array com objetos

- O valor retornado pela função é um `array`;
- Todos os elementos do array retornado pela função é do tipo `string`;
- Percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** de cada produto. Ao final, a função retorna um nova lista que armazena o nome dos produtos.
- No caso do arquivo `data.json`, a propriedade que se encontra o nome de cada produto é `productName`, caso seja usado outro arquivo a função deve ser alterada para corresponder a propriedade correta que se encontra o nome dos objetos do arquivo em questão.
- Ao utilizar o `data.json` como fonte do estoque, a função retorna um array com `29` elementos;
- Em um cenário onde o estoque tenha 10 objetos, a função deve retornar um array com `10` elementos;
- Em um cenário onde o estoque esteja vazio, a função deve retornar um array com `0` elementos.

### Exemplo do formato esperado para o array de retorno

```js
[
  'Arroz',
  'Feijão',
  'Macarrão',
  'Açúcar',
  ...
]
```

</details>

## 3. Implementado uma função que retorne os nomes dos produtos indisponíveis do estoque

Para conseguir se planejar melhor com a compra de produtos que estão em falta, precisamos ter conhecimento de quais produtos são esses.

<details>

<summary><strong>Foi desenvolvido uma função que retorna um array com os nomes dos produtos indisponíveis</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `out-of-stock-products.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getOutOfStockProducts`.

### Regras de negócio

- A função deve retornar um `array` de `string`;
- Um produto será considerado fora de estoque quando a propriedade `quantityInStock` dele for **igual a `0`**.

### A função `getUniqueProductsName` ao receber um array com objetos

- O valor retornado pela função é um `array`;
- Todos os elementos do array retornado pela função é do tipo `string`;
- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** de cada produto que esteja **indisponível** no estoque. Ao final, a função retorna uma nova lista que armazena o nome dos produtos.
- Ao utilizar o `data.json` como fonte do estoque, a função retorna um array com `4` elementos;
- Em um cenário onde o estoque tenha 20 produtos indisponíveis, a função deve retornar um array com `20` elementos.

### Exemplo do formato esperado para o array de retorno

```js
[
  'Lentilha',
  'Suco de uva',
  'Nozes',
  ...
]
```

</details>

## 4. Implementado uma função que retorne os produtos com baixo estoque em um formato específico

Buscando manter o supermercado sempre bem abastecido de mercadorias, precisamos ter visibilidade não só dos produtos que estão em falta, mas também dos produtos que estão prestes a se esgotar.

<details>

<summary><strong>Foi desenvolvido uma função que retorne um array com os produtos com baixo estoque, em um formato específico</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `low-stock-products.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getLowStockProducts`.

### Regras de negócio

- Sua função deve retornar um `array` de `string`;
- Um produto será considerado com baixo estoque quando a propriedade `quantityInStock` dele for **maior que `0`** e **menor ou igual a `10`**;
- O formato dos elementos do array deve ser: `{nome do produto}: {quantidade em estoque} unidade` caso a quantidade em estoque seja `1`;
- O formato dos elementos do array deve ser: `{nome do produto}: {quantidade em estoque} unidades` caso a quantidade em estoque seja maior que `1`;

### A função `low-stock-products.js` ao receber um array com objetos

- O valor retornado pela função é um `array`;
- Todos os elementos do array retornado pela função é do tipo `string`;
- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** e da **quantidade em estoque** de cada produto que esteja com baixo estoque. Ao final, a função retorna uma nova lista que armazene uma mensagem personalizada informando o **nome** e a **quantidade do produto**.
- Os elementos do array retornados estão no formato `{nome do produto}: {quantidade em estoque} unidades`;
- Ao utilizar o `data.json` como fonte do estoque, a função retorna um array com `7` elementos;
- Em um cenário onde 20 produtos estão com baixo estoque, a função deve retornar um array com `20` elementos.

### Exemplo do formato esperado para o array de retorno

```js
[
  'Nutella: 10 unidades',
  'Salmão: 5 unidades',
  'Pipoca: 1 unidades',
  ...
]
```

</details>
