# Projeto Pirilampo Supermarket

Este é meu 3° projeto durante a minha jornada na Trybe!

Nele sou responsável por desenvolver funções que serão utilizadas para implementar as regras de negócio do site de **Supermercado Pirilampo**. As funcionalidades envolvem a manipulação e busca de produtos em estoque, minha responsabilidade é pela parte lógica, portanto, não desenvolvi nenhuma tela (HTML e CSS).

## Estrutura do Repositório

- A pasta `src` contém todo o código;

- Cada implementação foi desenvolvida em um arquivo específico;

- Cada implementação foi desenvolvida em uma função específica;

- A base de dados utilizada se encontra no arquivo `data.json`, dentro do diretório `src`;

## Funcionalidades Implementadas

## 1. Implementado uma função que retorne a quantidade de produtos únicos em estoque

O site do Supermercado Pirilampo possui uma área de Gestão de Estoque. Essa área precisa mostrar a quantidade de produtos únicos em estoque, um recurso muito útil para conseguir gerenciar a variedade de mercadorias do estabelecimento.

<details>

<summary><strong>Foi desenvolvido uma função que retorna o número de produtos únicos em estoque</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `unique-products-amount.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getUniqueProductsAmount`;

### Regras de negócio

- A função deve retornar um `number`;
- Um produto pode ter 50 unidades em estoque mas deve ser contabilizado apenas como 1 produto;
- Cada objeto do array `stockProducts` é um produto único;

### A função `getUniqueProductsAmount` ao receber um array com objetos

- Retorna um valor do tipo `number`;
- Ao utilizar o `data.json` como fonte do estoque, a função retorna o número `29`;
- Em um cenário onde o array tenha 10 objetos, a função deve retornar o número `10`;
- Em um cenário onde o array esteja vazio, a função deve retornar o número `0`;

</details>

## 2. Implementado uma função que retorne os nomes dos produtos únicos em estoque

Além da quantidade de produtos únicos, a área de Gestão de Estoque deve apresentar a lista com o nome dos produtos, funcionalidade muito útil para visualizar quais os produtos que possui em estoque.

<details>

<summary><strong>Foi desenvolvido uma função que retorna um array com os nomes dos produtos únicos em estoque</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `unique-products-name.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getUniqueProductsName`;

### Regras de negócio

- A função deve retornar um `array` de `string`;
- O `array` retornado pela função deve ter o nome de **todos** os produtos do `array` de objetos em estoque;

### A função `getUniqueProductsName` ao receber um array com objetos

- O valor retornado pela função é um `array`;
- Todos os elementos do array retornado pela função é do tipo `string`;
- Percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** de cada produto. Ao final, a função retorna um nova lista que armazena o nome dos produtos;
- No caso do arquivo `data.json`, a propriedade que se encontra o nome de cada produto é `productName`, caso seja usado outro arquivo a função deve ser alterada para corresponder a propriedade correta que se encontra o nome dos objetos do arquivo em questão;
- Ao utilizar o `data.json` como fonte do estoque, a função retorna um array com `29` elementos;
- Em um cenário onde o estoque tenha 10 objetos, a função deve retornar um array com `10` elementos;
- Em um cenário onde o estoque esteja vazio, a função deve retornar um array com `0` elementos;

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
- A implementação está dentro da função `getOutOfStockProducts`;

### Regras de negócio

- A função deve retornar um `array` de `string`;
- Um produto será considerado fora de estoque quando a propriedade `quantityInStock` dele for **igual a `0`**;

### A função `getUniqueProductsName` ao receber um array com objetos

- O valor retornado pela função é um `array`;
- Todos os elementos do array retornado pela função é do tipo `string`;
- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** de cada produto que esteja **indisponível** no estoque. Ao final, a função retorna uma nova lista que armazena o nome dos produtos;
- Ao utilizar o `data.json` como fonte do estoque, a função retorna um array com `4` elementos;
- Em um cenário onde o estoque tenha 20 produtos indisponíveis, a função deve retornar um array com `20` elementos;

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
- A implementação está dentro da função `getLowStockProducts`;

### Regras de negócio

- Sua função deve retornar um `array` de `string`;
- Um produto será considerado com baixo estoque quando a propriedade `quantityInStock` dele for **maior que `0`** e **menor ou igual a `10`**;
- O formato dos elementos do array deve ser: `{nome do produto}: {quantidade em estoque} unidade` caso a quantidade em estoque seja `1`;
- O formato dos elementos do array deve ser: `{nome do produto}: {quantidade em estoque} unidades` caso a quantidade em estoque seja maior que `1`;

### A função `getLowStockProducts` ao receber um array com objetos

- O valor retornado pela função é um `array`;
- Todos os elementos do array retornado pela função é do tipo `string`;
- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** e da **quantidade em estoque** de cada produto que esteja com baixo estoque. Ao final, a função retorna uma nova lista que armazene uma mensagem personalizada informando o **nome** e a **quantidade do produto**;
- Os elementos do array retornados estão no formato `{nome do produto}: {quantidade em estoque} unidades`;
- Ao utilizar o `data.json` como fonte do estoque, a função retorna um array com `7` elementos;
- Em um cenário onde 20 produtos estão com baixo estoque, a função deve retornar um array com `20` elementos;

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

## 5. Implementado uma função que retorne o total de produtos em estoque

A quantidade única de produtos não consegue representar o tamanho do estoque. Um grande exemplo disso é que podemos ter 1 produto **Farinha** cadastrado no sistema, mas com centenas de pacotes no estoque. É importante para o dono do empreendimento ter noção do tamanho do seu estoque, pois dependendo do movimento do seu supermercado, expandir o galpão que armazena todos os produtos pode ser uma opção.

<details>

<summary><strong>Foi desenvolvido uma função que retorna a quantidade de unidades de todos os produtos em estoque</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `products-amount.js` e está dentro do diretório `src`;
- A implementação deve está da função `getProductsAmount`;

### Regras de negócio

- A função deve retornar um `number`;
- Utilize a propriedade `quantityInStock`, do objeto de produto do estoque, para acumular os totais de todos os produtos do estoque;

### A função `getProductsAmount` ao receber um array com objetos

- O valor retornado pela função é do tipo `number`;
- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca da **quantidade em estoque** de cada produto. Ao final, a função retorna o somatório da quantidade de todos os produtos em estoque;
- Ao utilizar o `data.json` como fonte do estoque, a função retorna o número `628`;
- Em um cenário onde o estoque tenha 4857 produtos, a função deve retornar o número `4857`;

</details>

## 6. Crie uma função que busque um produto pelo nome

Agora que terminamos de criar as funções que entregam a lógica da área de Gestão de Estoque, podemos partir para a criação das funções que vão ajudar a construir a Página Inicial do Supermercado Pirilampo. Iniciaremos a construção lógica da Página Inicial fornecendo a funcionalidade de buscar um produto pelo seu nome. A ideia é que essa função seja utilizada para desenvolver uma página parecida com o exemplo do esboço a seguir.


<details>

<summary><strong>Foi desenvolvido uma função que permita buscar um produto pelo seu nome</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `search-product-by-name.js` e está dentro do diretório `src`;
- A implementação está dentro da função `searchProductByName`;

### Regras de negócio

- A função deve receber o nome do produto por parâmetro;
- Considere que o nome do produto é único. Portanto essa função **não retorna** um `array` de produtos e sim um `object` com as informações dele;
- Se o produto for encontrado, sua função irá retornar um novo objeto com as seguintes chaves:

```js
  {
    description: 'descrição do produto, sem nenhuma modificação',
    formattedPrice: 'prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do `data.json` já se encontra nesse formato. Exemplo: `R$ 10.99`'
  }
```

- Se o produto não for encontrado, a função deve retornar `null`;
- A função deve retornar `null` caso seja chamada **sem parâmetro**.

### A função `searchProductByName` ao receber um array com objetos

- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** de um produto específico. Caso o produto seja encontrado, a função irá retornar um novo objeto com as propriedades de `description` e `formattedPrice`.
- Ao buscar por um produto existente, a função deve retornar um objeto cuja chave `description` seja a mesma do objeto original e a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY`;
- Ao buscar por um produto existente, o valor retornado pela função **não** deve ser `null`;
- Ao buscar por um produto inexistente, retornará `null`;
- Ao chamar a função sem passar parâmetro, retornará `null`.

### Exemplo do formato esperado caso a função encontre um produto

```js
  {
    description: 'Creme de avelã com cacau Nutella, pote de 350g, ideal para passar no pão ou comer com frutas.',
    formattedPrice: 'R$ 19.99'
  }
```

</details>
