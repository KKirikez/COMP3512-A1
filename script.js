import data from './data/data-pretty.json' with { type: 'json'}
let products = data.products;

const itemBoxes = document.querySelector('#itemBoxes')
products.slice(0, 20).forEach((product) => {
    console.log(product)
    const productCard = document.createElement('div')
    const img = document.createElement('img')
    const productCardBody = document.createElement('div')
    const cardTitle = document.createElement('h3')
    const price = document.createElement('p')
    const text = document.createElement('div')
    const addButton = document.createElement('button')


    productCard.appendChild(img)

    text.appendChild(cardTitle)
    text.appendChild(price)
    productCardBody.appendChild(text)
    productCardBody.appendChild(addButton)

    img.src = product.images[0]
    addButton.textContent = '+'
    
    img.classList.add('productImage')
    productCard.classList.add('productCard')
    productCardBody.classList.add('productCardBody')
    addButton.classList.add('addButton')

    cardTitle.textContent = product.title

    price.textContent = `$${product.price.toFixed(2)}`

    productCard.appendChild(img)
    productCard.appendChild(productCardBody)
    itemBoxes.appendChild(productCard)
});