# Projeto Pirilampo Supermarket

Este é meu 3° projeto durante a minha jornada na Trybe!

Nele sou responsável por desenvolver funções que serão utilizadas para implementar as regras de negócio do site de **Supermercado Pirilampo**. As funcionalidades envolvem a manipulação e busca de produtos em estoque, minha responsabilidade é pela parte lógica, portanto, não desenvolvi nenhuma tela (HTML e CSS).
Durante o projeto, pude trabalhar com variáveis e tipos de dados para representar e armazenar informações, também utilizei arrays para manipular listas de elementos e objetos para representar informações de forma estruturada; Utilizei for/forEach para percorrer listas de dados e apliquei condicionais if/else para inserir lógica nas regras de negócio. Além disso, apliquei lógica de programação para resolver problemas.

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

A quantidade única de produtos não consegue representar o tamanho do estoque, um exemplo disso é que podemos ter 1 produto **Farinha** cadastrado no sistema, mas com centenas de pacotes no estoque. É importante para o dono do empreendimento ter noção do tamanho do seu estoque, pois dependendo do movimento do seu supermercado.

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

## 6. Implementado uma função que busque um produto pelo nome

Agora a criação da função de buscar um produto pelo seu nome, que vai ajudar a construir a Página Inicial do Supermercado Pirilampo.

<details>

<summary><strong>Foi desenvolvido uma função que permita buscar um produto pelo seu nome</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `search-product-by-name.js` e está dentro do diretório `src`;
- A implementação está dentro da função `searchProductByName`;

### Regras de negócio

- A função deve receber o nome do produto por parâmetro;
- Considere que pode existir produtos com nome similares ou quem está fazendo a pesquisa não sabe **exatamente** o nome do produto dentro de `data.json`. Portanto essa função **deve** retornar um `array` de produtos que possuem no nome o parâmetro passado na função;
- Se o produto for encontrado, sua função irá retornar um array de objetos com as seguintes chaves:

  - **description:** 'descrição do produto, sem nenhuma modificação',
  - **formattedPrice:** 'prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do `data.json` já se encontra nesse formato. Exemplo: `R$ 10.99`'

- Se o produto não for encontrado, a função deve retornar `null`;
- A função deve retornar `null` caso seja chamada **sem parâmetro**;
- A pesquisa deve ser `case-insensitive` e `accent-insensitive`:

### A função `searchProductByName` ao receber um array com objetos

- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca do **nome** de um produto específico. Caso o produto seja encontrado, a função irá retornar uma lista de objetos com as propriedades de `description` e `formattedPrice`.
- Ao buscar por um produto existente, o array retornado tem objetos cuja chave `description` seja a mesma do objeto original e a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY`;
- Ao buscar por um produto existente, o valor retornado pela função é um `array` de elementos do tipo `object`;
- Buscar por um produto inexistente, retornará `null`;
- Chamar a função sem passar parâmetro, retornará `null`.
- Ao buscar por um nome de produto com **acentos** ou **maiúsculas** e **minúsculas**, a função retornará o produto mesmo que o parâmetro tenha sido passado sem respeitar acentuação e sensibilidade do nome do produto.

### Exemplo do formato esperado caso a função encontre um produto

```js
[
  {
    description: 'Cerveja Pilsen Brahma, lata de 350ml, sabor refrescante e leve.',
    formattedPrice: 'R$ 3.49'
  },
  {
    description: 'Cerveja Weiss Eisenbahn, garrafa de 500ml, sabor encorpado e aromático.',
    formattedPrice: 'R$ 7.99'
  },
  ...
]
```

</details>

## 7. Implementado uma função que busque por produtos de uma marca específica

Outra funcionalidade crucial é a busca por produtos através da marca, que também vai fazer parte da Página Inicial do Supermercado Pirilampo.

<details>

<summary><strong>Foi desenvolvido uma função que permite buscar produtos pela marca</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `search-products-by-brand.js` e está dentro do diretório `src`;
- A implementação está dentro da função `searchProductsByBrand`.

### Regras de negócio

- A função deve receber a marca como parâmetro;
- Se produtos forem encontrados, a função deve retornar um novo `array` de objetos. Cada objeto deve ter as seguintes chaves:

  - **description:** 'descrição do produto, sem nenhuma modificação',
  - **formattedPrice:** 'prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`'

- Se nenhum produto for encontrado, a função deve retornar um `array` vazio;
- A função deve retornar um `array` vazio caso seja chamada **sem parâmetro**;
- A pesquisa deve ser `case-insensitive` e `accent-insensitive`;

### A função `searchProductsByBrand` ao receber um array com objetos

- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca de produtos de uma **marca** específica. Caso produtos sejam encontrados, a função retorna uma nova lista de objetos com as propriedades de **descrição** e **valor formatado do produto**, caso contrário a função retornará **uma lista vazia**;
- Ao buscar produtos pela marca, o array retornado tem objetos cuja chave `description` seja a mesma do objeto original e a chave `formattedPrice` esteja dentro do formato `R$ XX.YY` ou `R$ X.YY`;
- Ao buscar por uma marca existente, o valor retornado pela função é um `array` de elementos do tipo `object`;
- Buscar por uma marca inexistente, retornará um array `vazio`;
- Chamar a função sem passar parâmetro, retornará um array `vazio`;
- Buscar pela marca "Hortifruti", utilizando o `data.json` como fonte do estoque, a função retorna um array com `6` elementos;
- Ao buscar pela marca de produto com **acentos** ou **maiúsculas** e **minúsculas**, a função retornará o produto mesmo que o parâmetro tenha sido passado sem respeitar acentuação e sensibilidade do nome do marca;

### Exemplo do formato esperado caso a função encontre produtos de uma marca

```js
[
  {
    description: 'Batata Doce Hortifruti, pacote de 1kg, batatas doces frescas e saborosas.',
    formattedPrice: 'R$ 6.99'
  },
  {
    description: "Cenoura Hortifruti, pacote de 500g, cenouras frescas e crocantes.",
    formattedPrice: 'R$ 3.99'
  }
  ...
]
```

</details>

## 8. Implementado uma função que busque por produtos na promoção

Todo supermercado tem promoções, certo? Logo uma área com os produtos em oferta é altamente estratégico. Pensando nisso foi desenvolvido uma função que recupera os produtos em promoção, para serem adicionados em uma nova seção.

<details>

<summary><strong>Foi desenvolvida uma função que retorna os produtos em promoção</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `products-on-sale.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getProductsOnSale`;

### Regras de negócio

- Um produto é considerado em promoção quando a chave `onSale` tiver o valor `true`;
- Se produtos forem encontrados, a função irá retornar um novo `array` de objetos. Cada objeto deve ter as seguintes chaves:

  - **description:** 'descrição do produto, sem nenhuma modificação',
  - **formattedPrice:** 'prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`',
  - **onSale:** 'informação booleana identificando que o produto está em promoção'

### A função `getProductsOnSale` ao receber um array com objetos

- A função percorrer o array `stockProducts` que contém objetos de produto do estoque, em busca de produtos **em promoção**. Caso produtos sejam encontrados, a função retorna uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **informação booleana de oferta**;
  - Ao buscar por produtos em promoção, o valor retornado pela função é um `array` de elementos do tipo `object`;
  - Os objetos do array tem 3 chaves: `description`, `formattedPrice` e `onSale`;
  - O array retornado tem objetos cuja chave `description` seja a mesma do objeto original, a chave `formattedPrice` está no formato `R$ XX.YY` ou `R$ X.YY` e a chave `onSale` é `true`;

### Exemplo do formato esperado caso a função encontre produtos em promoção

```js
[
  {
    description: "Biscoito recheado Nestlé, pacote de 130g, sabor chocolate.",
    formattedPrice: 'R$ 1.99',
    onSale: true
  },
  {
    description: "Filé de salmão Seara, embalagem de 500g, fonte de proteínas e ômega-3.",
    formattedPrice: 'R$ 39.99',
    onSale: true
  },
  ...
]
```

</details>

## 9. Implementado uma função que retorne todos os produtos com informações sobre alergia ou intolerância

Com o aumento da demanda de produtos para pessoas com algum tipo de alergia ou intolerância alimentar, é importante que o site do supermercado mostre essas informações para ter mais assertividade nas vendas.

<details>

<summary><strong>Foi desenvolvido uma função que retorna os produtos em estoque com informações de alergia ou intolerância alimentar</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `products-with-allergy-or-intolerance.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getProductsWithAllergyOrIntolerance`;

### Regras de negócio

- Sua função deve, obrigatoriamente, retornar um `array` de objetos com as seguintes chaves:

  - **description:** 'descrição do produto, sem nenhuma modificação',
  - **formattedPrice:** 'prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`',
  - **allergyOrIntoleranceMessage:** 'deve ser do tipo `string` e só será adicionada ao novo objeto quando houver informações de alergia ou intolerância no objeto do produto. Deve seguir o seguinte formato: `Pode conter: {item 1},{item 2},{item N}`. A quantidade de itens varia de acordo com o tamanho do array `allergyOrIntolerance` do produto em estoque'

### A função `getProductsWithAllergyOrIntolerance` ao receber um array com objetos

- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca de produtos **com informações de alergia e intolerância alimentar**. Caso produtos sejam encontrados, a função retorna uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **informação formatada de alergia e intolerância**;
- Buscar por produtos com informação de alergia ou intolerância, o valor retornado pela função deve ser um `array` cujo os elementos sejam do tipo `object`;
- Os objetos do array possuem as chaves `description`, `formattedPrice` e `allergyOrIntoleranceMessage`;
- O valor da chave `description` é o mesmo do objeto original, a chave `formattedPrice` está no formato `R$ XX.YY` ou `R$ X.YY` e, quando o produto possui informações de alergia ou intolerância, o valor da chave `allergyOrIntoleranceMessage` é o formato `Pode conter: {item 1},{item 2},{item N}`;

### Exemplo do formato esperado para o array de retorno

```js
[
  {
    description: 'Arroz integral Tio João, pacote de 1kg, rico em fibras e vitaminas.',
    formattedPrice: "R$ 10.99",
    allergyOrIntoleranceMessage: 'Pode conter: glúten,soja,castanhas'
  },
  {
    description: 'Iogurte Danone, pote de 500g, fonte de cálcio e probióticos.',
    formattedPrice: "R$ 5.49",
    allergyOrIntoleranceMessage: 'Pode conter: leite'
  },
  ...
]
```

</details>

## 10. Implementado uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional

Pensando na saúde das pessoas, implementar uma seção na Página Inicial para listar alimentos ricos em vitaminas me parece uma boa ideia.

<details>

<summary><strong>Foi desenvolvido uma função que retorna produtos ricos em vitaminas</strong></summary>

### Onde foi desenvolvido

- O arquivo onde foi implementado a solução se chama `products-rich-in-vitamin.js` e está dentro do diretório `src`;
- A implementação está dentro da função `getProductsRichInVitamin`.

### Regras de negócio

- A função deve retornar um `array` de objetos com as seguintes chaves:

  - **description:** 'descrição do produto, sem nenhuma modificação',
  - **formattedPrice:** 'prefixo da moeda Real (`R$`) acrescido do preço do produto (`1.99`, por exemplo), com 1 espaço entre os dados. Além disso, o separador de casas decimais será o ponto (`.`), uma vez que a informação do _data.json_ já se encontra nesse formato. Exemplo: `R$ 10.99`',
  - **vitaminsInformation:** 'deve ser um `array` de `string`. O texto dos elementos desse array deve seguir o formato `{nome da vitamina} - {quantidade de vitamina presente}`. A informação do nome da vitamina é encontrada nas **chaves do objeto `nutritionalInfo.vitamins`** do produto em estoque, já a informação de quantidade de vitamina presente é encontrada nos valores do mesmo objeto'

### A função `getProductsRichInVitamin` ao receber um array com objetos

- A função percorre o array `stockProducts` que contém objetos de produto do estoque, em busca de produtos **com informações de vitaminas**. Caso produtos sejam encontrados, a função retorna uma nova lista de objetos com as propriedades de **descrição**, o **valor formatado do produto** e a **lista de vitaminas disponíveis no produto**.
- O valor retornado pela função é um `array` cujo os elementos são do tipo `object`;
- Os objetos do array possuem 3 chaves: `description`, `formattedPrice` e `vitaminsInformation`;
- O valor da chave `description` é o mesmo do objeto original, a chave `formattedPrice` dos objetos está dentro do formato `R$ XX.YY` ou `R$ X.YY` e a chave `vitaminsInformation` dos objetos está dentro do formato `{nome da vitamina} - {quantidade de vitamina presente}`;
- A chave `vitaminsInformation` dos objetos é um `array`;

### Exemplo do formato esperado pro array de retorno

```js
[
  {
    description: 'Nozes sem casca Fazenda São Francisco, pacote de 200g, fonte de gorduras boas e minerais.',
    formattedPrice: 'R$ 19.99',
    vitaminsInformation: [ 'vitaminB6 - 5' ]
  },
  {
    description: 'Filé de salmão Seara, embalagem de 500g, fonte de proteínas e ômega-3.',
    formattedPrice: 'R$ 39.99',
    vitaminsInformation: ['vitaminA - 1', 'vitaminD - 50', 'vitaminB6 - 25', 'vitaminB12 - 80']
  },
  {
    description: 'Carne bovina moída Swift, pacote de 500g, ideal para preparar diversas receitas.',
    formattedPrice: 'R$ 14.99',
    vitaminsInformation: [ 'vitaminB6 - 15', 'vitaminB12 - 50' ]
  },
  ...
]
```

</details>

---
