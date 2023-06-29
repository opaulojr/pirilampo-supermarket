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

- O arquivo onde foi implementado a solução se chama `1-unique-products-amount.js` e está dentro do diretório `src`;
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
