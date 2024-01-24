# Project Pirilampo Supermarket

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## About

This is my 3rd project during my journey at Trybe!

I am responsible for developing functions that will be used to implement the business rules of the **Pirilampo Supermarket** website. The functionalities involve the manipulation and search of products in stock, and my responsibility lies in the logical part, so I did not develop any screens (HTML and CSS). Throughout the project, I worked with variables and data types to represent and store information. I also used arrays to manipulate lists of elements and objects to represent information in a structured way. I employed for/forEach loops to traverse data lists and applied if/else conditionals to insert logic into the business rules. Additionally, I applied programming logic to solve problems.

## Repository Structure

- The `src` folder contains all the code

- Each implementation was developed in a specific file

- Each implementation was developed in a specific function

- The database used is located in the `data.json` file within the `src` directory

## Implemented Features

## Implemented a function that returns the quantity of unique products in stock

The Pirilampo Supermarket website features a Stock Management area. This section needs to display the quantity of unique products in stock, a very useful feature for efficiently managing the variety of goods in the establishment

<details>
  <summary>
    <strong>Developed a function that returns the number of unique products in stock</strong>
  </summary>

### Where it was developed

- The file is called `unique-products-amount.js` and is inside the `src` directory

- The implementation is within the `getUniqueProductsAmount` function

### Business rules

- The function should return a `number`

- A product can have 50 units in stock but should be counted only as 1 product

- Each object in the `stockProducts` array is a unique product

### The `getUniqueProductsAmount` function when receiving an array with objects

- Returns a value of type `number`.

- When using `data.json` as the source of the stock, the function returns the number `29`

- In a scenario where the array has 10 objects, the function should return the number `10`

- In a scenario where the array is empty, the function should return the number `0`
</details>


## Implemented a function that returns the names of unique products in stock

In addition to the quantity of unique products, the Stock Management area should display a list with the names of the products, a very useful functionality for visualizing which products are in stock

<details>
  <summary>
    <strong>Developed a function that returns an array with the names of unique products in stock</strong>
  </summary>

### Where it was developed

- The file is called `unique-products-name.js` and is inside the `src` directory

- The implementation is within the `getUniqueProductsName` function

### Business rules

- The function should return an `array` of `string`

- The `array` returned by the function should contain the names of **all** the products from the array of objects in stock

### The `getUniqueProductsName` function when receiving an array with objects

- The value returned by the function is an `array`

- All elements in the array returned by the function are of type `string`

- It traverses the `stockProducts` array, which contains product objects from the stock, in search of the **name** of each product. In the end, the function returns a new list that stores the names of the products

- In the case of the `data.json` file, the property where the name of each product is located is `productName`. If another file is used, the function should be adjusted to correspond to the correct property where the names of the objects in that file are located

- When using `data.json` as the source of the stock, the function returns an array with `29` elements

- In a scenario where the stock has 10 objects, the function should return an array with `10` elements

- In a scenario where the stock is empty, the function should return an array with `0` elements

### Example of the expected format for the return array

```js
[
  'Rice',
  'Beans',
  'Pasta',
  'Sugar',
  ...
]
```
</details>


## Implemented a function that returns the names of out-of-stock products

To better plan for the purchase of products that are out of stock, we need to know which products are unavailable

<details>
  <summary>
    <strong>Developed a function that returns an array with the names of out-of-stock products</strong>
  </summary>

### Where it was developed

- The file is called `out-of-stock-products.js` and is inside the `src` directory

- The implementation is within the `getOutOfStockProducts` function

### Business rules

- The function should return an `array` of `string`

- A product will be considered out of stock when its `quantityInStock` property is **equal to `0`**

### The `getOutOfStockProducts` function when receiving an array with objects

- The value returned by the function is an `array`

- All elements in the array returned by the function are of type `string`

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of the **name** of each product that is **out of stock**. In the end, the function returns a new list that stores the names of the products

- When using `data.json` as the source of the stock, the function returns an array with `4` elements

- In a scenario where the stock has 20 out-of-stock products, the function should return an array with `20` elements

### Example of the expected format for the return array

```js
[
  'Lentils',
  'Grape Juice',
  'Walnuts',
  ...
]
```
</details>


## Implemented a function that returns products with low stock in a specific format

In an effort to keep the supermarket well-stocked with goods, we need visibility not only into products that are out of stock but also into products that are about to run out

<details>
  <summary>
    <strong>Developed a function that returns an array with products with low stock in a specific format</strong>
  </summary>

### Where it was developed

- The file is called `low-stock-products.js` and is inside the `src` directory

- The implementation is within the `getLowStockProducts` function

### Business rules

- The function should return an `array` of `string`

- A product will be considered to have low stock when its `quantityInStock` property is **greater than `0`** and **less than or equal to `10`**

- The format of the elements in the array should be: `{product name}: {quantity in stock} unit` if the quantity in stock is `1`

- The format of the elements in the array should be: `{product name}: {quantity in stock} units` if the quantity in stock is greater than `1`

### The `getLowStockProducts` function when receiving an array with objects

- The value returned by the function is an `array`

- All elements in the array returned by the function are of type `string`

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of the **name** and **quantity in stock** of each product that has low stock. In the end, the function returns a new list that stores a customized message indicating the **name** and **quantity of the product**

- The elements in the returned array are in the format `{product name}: {quantity in stock} units`

- When using `data.json` as the source of the stock, the function returns an array with `7` elements

- In a scenario where 20 products have low stock, the function should return an array with `20` elements

### Example of the expected format for the return array

```js
[
  'Nutella: 10 units',
  'Salmon: 5 units',
  'Popcorn: 1 unit',
  ...
]
```
</details>


## Implemented a function that returns the total quantity of products in stock

The unique quantity of products cannot represent the size of the stock adequately. For example, we can have 1 product **Flour** registered in the system, but with hundreds of packages in stock. It is essential for the business owner to have an understanding of the size of their stock, depending on the movement of their supermarket

<details>
  <summary>
    <strong>Developed a function that returns the quantity of units for all products in stock</strong>
  </summary>

### Where it was developed

- The file is called `products-amount.js` and is inside the `src` directory

- The implementation is within the `getProductsAmount` function

### Business rules

- The function should return a `number`

- Use the `quantityInStock` property of the product object from the stock to accumulate the totals for all products in the stock

### The `getProductsAmount` function when receiving an array with objects

- The value returned by the function is of type `number`

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of the **quantity in stock** for each product. In the end, the function returns the sum of the quantity for all products in stock

- When using `data.json` as the source of the stock, the function returns the number `628`

- In a scenario where the stock has 4857 products, the function should return the number `4857`
</details>


## Implemented a function that searches for a product by name

Now, the creation of a function to search for a product by its name, which will help build the Home Page of Pirilampo Supermarket

<details>
  <summary>
    <strong>Developed a function that allows searching for a product by its name</strong>
  </summary>

### Where it was developed

- The file is called `search-product-by-name.js` and is inside the `src` directory

- The implementation is within the `searchProductByName` function

### Business rules

- The function should receive the product name as a parameter

- Consider that there may be products with similar names or that the person conducting the search does not know **exactly** the name of the product within `data.json`. Therefore, this function **must** return an `array` of products that have the parameter passed in the function name

- If the product is found, your function will return an array of objects with the following keys:

  - **description:** 'product description, without any modification',
  - **formattedPrice:** 'Real currency prefix (`R$`) added to the product price (`1.99`, for example), with 1 space between the data. Additionally, the decimal separator will be a period (`.`), since the information in `data.json` is already in this format. Example: `R$ 10.99`'

- If the product is not found, the function should return `null`

- The function should return `null` if called **without a parameter**

- The search should be `case-insensitive` and `accent-insensitive`

### The `searchProductByName` function when receiving an array with objects

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of the **name** of a specific product. If the product is found, the function will return a list of objects with the properties of `description` and `formattedPrice`

- When searching for an existing product, the returned array has objects whose `description` key is the same as the original object, and the `formattedPrice` key is in the format `R$ XX.YY` or `R$ X.YY`

- When searching for an existing product, the value returned by the function is an `array` of elements of type `object`

- Searching for a nonexistent product will return `null`

- Calling the function without passing a parameter will return `null`

- When searching for a product name with **accents** or **uppercase** and **lowercase**, the function will return the product even if the parameter has been passed without respecting the accentuation and sensitivity of the product name

### Example of the expected format if the function finds a product

```js
[
  {
    description: 'Brahma Pilsen Beer, 350ml can, refreshing and light flavor.',
    formattedPrice: 'R$ 3.49'
  },
  {
    description: 'Eisenbahn Weiss Beer, 500ml bottle, full-bodied and aromatic flavor.',
    formattedPrice: 'R$ 7.99'
  },
  ...
]
```
</details>


## Implemented a function that searches for products by a specific brand

Another crucial functionality is searching for products by brand, which will also be part of the Home Page of Pirilampo Supermarket

<details>
  <summary>
    <strong>Developed a function that allows searching for products by brand</strong>
  </summary>

### Where it was developed

- The file is called `search-products-by-brand.js` and is inside the `src` directory

- The implementation is within the `searchProductsByBrand` function

### Business rules

- The function should receive the brand as a parameter.

- If products are found, the function should return a new array of objects. Each object should have the following keys:

  - **description:** 'product description, without any modification',
  - **formattedPrice:** 'Real currency prefix (`R$`) added to the product price (`1.99`, for example), with 1 space between the data. Additionally, the decimal separator will be a period (`.`), since the information in _data.json_ is already in this format. Example: `R$ 10.99`'

- If no products are found, the function should return an empty array

- The function should return an empty array if called **without a parameter**

- The search should be `case-insensitive` and `accent-insensitive`

### The `searchProductsByBrand` function when receiving an array with objects

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of products from a **specific brand**. If products are found, the function returns a new list of objects with the properties of **description** and **formatted product value**; otherwise, it returns **an empty list**

- When searching for products by brand, the returned array has objects whose `description` key is the same as the original object, and the `formattedPrice` key is in the format `R$ XX.YY` or `R$ X.YY`

- When searching for an existing brand, the value returned by the function is an `array` of elements of type `object`

- Searching for a nonexistent brand will return an empty array

- Calling the function without passing a parameter will return an empty array

- When searching for a product brand with **accents** or **uppercase** and **lowercase**, the function will return the product even if the parameter has been passed without respecting the accentuation and sensitivity of the brand name

### Example of the expected format if the function finds products from a brand

```js
[
  {
    description: 'Sweet Potato Hortifruti, 1kg package, fresh and tasty sweet potatoes.',
    formattedPrice: 'R$ 6.99'
  },
  {
    description: 'Carrot Hortifruti, 500g package, fresh and crunchy carrots.',
    formattedPrice: 'R$ 3.99'
  }
  ...
]
```
</details>


## Implemented a function that searches for products on sale

Every supermarket has promotions, right? Therefore, an area with products on sale is highly strategic. With that in mind, a function has been developed to retrieve products on sale to be added to a new section

<details>
  <summary>
    <strong>Developed a function that returns products on sale</strong>
  </summary>

### Where it was developed

- The file is called `products-on-sale.js` and is inside the `src` directory

- The implementation is within the `getProductsOnSale` function

### Business rules

- A product is considered on sale when the `onSale` key has the value `true`

- If products are found, the function will return a new array of objects. Each object should have the following keys:

  - **description:** 'product description, without any modification',
  - **formattedPrice:** 'Real currency prefix (`R$`) added to the product price (`1.99`, for example), with 1 space between the data. Additionally, the decimal separator will be a period (`.`), since the information in _data.json_ is already in this format. Example: `R$ 10.99`',
  - **onSale:** 'boolean information indicating that the product is on sale'

### The `getProductsOnSale` function when receiving an array with objects

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of products **on sale**. If products are found, the function returns a new list of objects with the properties of **description**, **formatted product value**, and **boolean offer information**

- When searching for products on sale, the value returned by the function is an `array` of elements of type `object`

- The objects in the array have 3 keys: `description`, `formattedPrice`, and `onSale`

- The returned array has objects whose `description` key is the same as the original object, the `formattedPrice` key is in the format `R$ XX.YY` or `R$ X.YY`, and the `onSale` key is `true`

### Example of the expected format if the function finds products on sale

```js
[
  {
    description: "Nestlé filled biscuit, 130g pack, chocolate flavor.",
    formattedPrice: 'R$ 1.99',
    onSale: true
  },
  {
    description: "Seara salmon fillet, 500g package, a source of proteins and omega-3.",
    formattedPrice: 'R$ 39.99',
    onSale: true
  },
  ...
]
```
</details>


## Implemented a function that returns all products with allergy or intolerance information

With the increasing demand for products for people with allergies or food intolerances, it is important that the supermarket's website displays this information for more accuracy in sales

<details>
  <summary>
    <strong>Developed a function that returns products in stock with allergy or intolerance information</strong>
  </summary>

### Where it was developed

- The file implemented is called `products-with-allergy-or-intolerance.js` and is inside the `src` directory
- The implementation is within the `getProductsWithAllergyOrIntolerance` function

### Business rules

- Your function must, obligatorily, return an `array` of objects with the following keys:

  - **description:** 'product description, without any modification',
  - **formattedPrice:** 'Real currency prefix (`R$`) added to the product price (`1.99`, for example), with 1 space between the data. Additionally, the decimal separator will be a period (`.`), since the information in _data.json_ is already in this format. Example: `R$ 10.99`',
  - **allergyOrIntoleranceMessage:** 'must be of type `string` and will only be added to the new object when there is allergy or intolerance information in the product object. It must follow the following format: `May contain: {item 1},{item 2},{item N}`. The number of items varies according to the size of the `allergyOrIntolerance` array of the product in stock'

### The `getProductsWithAllergyOrIntolerance` function when receiving an array with objects

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of products **with allergy and food intolerance information**. If products are found, the function returns a new list of objects with the properties of **description**, **formatted product value**, and **formatted allergy and intolerance information**

- When searching for products with allergy or intolerance information, the value returned by the function must be an `array` whose elements are of type `object`

- The objects in the array have the keys `description`, `formattedPrice`, and `allergyOrIntoleranceMessage`

- The value of the `description` key is the same as the original object, the `formattedPrice` key is in the format `R$ XX.YY` or `R$ X.YY`, and when the product has allergy or intolerance information, the value of the `allergyOrIntoleranceMessage` key is in the format `May contain: {item 1},{item 2},{item N}`

### Example of the expected format for the return array

```js
[
  {
    description: 'Tio João whole grain rice, 1kg package, rich in fiber and vitamins.',
    formattedPrice: "R$ 10.99",
    allergyOrIntoleranceMessage: 'May contain: gluten,soy,nuts'
  },
  {
    description: 'Danone Yogurt, 500g pot, a source of calcium and probiotics.',
    formattedPrice: "R$ 5.49",
    allergyOrIntoleranceMessage: 'May contain: milk'
  },
  ...
]
```
</details>


## Implemented a function that returns all products that contain some vitamin in their nutritional value

Thinking about people's health, implementing a section on the Homepage to list foods rich in vitamins seems like a good idea

<details>
  <summary>
    <strong>Developed a function that returns products rich in vitamins</strong>
  </summary>

### Where it was developed

- The file is called `products-rich-in-vitamin.js` and is inside the `src` directory

- The implementation is within the `getProductsRichInVitamin` function

### Business rules

- The function must return an `array` of objects with the following keys:

  - **description:** 'product description, without any modification',
  - **formattedPrice:** 'Real currency prefix (`R$`) added to the product price (`1.99`, for example), with 1 space between the data. Additionally, the decimal separator will be a period (`.`), since the information in _data.json_ is already in this format. Example: `R$ 10.99`',
  - **vitaminsInformation:** 'must be an `array` of `string`. The text of the elements in this array must follow the format `{vitamin name} - {amount of vitamin present}`. The vitamin name information is found in the **keys of the `nutritionalInfo.vitamins` object** of the product in stock, and the amount of vitamin present information is found in the values of the same object'

### The `getProductsRichInVitamin` function when receiving an array with objects

- The function traverses the `stockProducts` array, which contains product objects from the stock, in search of products **with vitamin information**. If products are found, the function returns a new list of objects with the properties of **description**, **formatted product value**, and **list of vitamins available in the product**

- The value returned by the function is an `array` whose elements are of type `object`

- The objects in the array have 3 keys: `description`, `formattedPrice`, and `vitaminsInformation`

- The value of the `description` key is the same as the original object, the `formattedPrice` key of the objects is in the format `R$ XX.YY` or `R$ X.YY`, and the `vitaminsInformation` key of the objects is in the format `{vitamin name} - {amount of vitamin present}`

- The `vitaminsInformation` key of the objects is an `array`

### Example of the expected format for the return array

```js
[
  {
    description: 'Shell-less walnuts from Farm São Francisco, 200g package, a source of good fats and minerals.',
    formattedPrice: 'R$ 19.99',
    vitaminsInformation: [ 'vitaminB6 - 5' ]
  },
  {
    description: 'Seara Salmon Fillet, 500g package, a source of proteins and omega-3.',
    formattedPrice: 'R$ 39.99',
    vitaminsInformation: ['vitaminA - 1', 'vitaminD - 50', 'vitaminB6 - 25', 'vitaminB12 - 80']
  },
  {
    description: 'Swift ground beef, 500g package, ideal for preparing various recipes.',
    formattedPrice: 'R$ 14.99',
    vitaminsInformation: [ 'vitaminB6 - 15', 'vitaminB12 - 50' ]
  },
  ...
]
```
</details>

---
