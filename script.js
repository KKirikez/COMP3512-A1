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
    const addButton = document.createElement('button')

    productCard.appendChild(img)

    productCardBody.appendChild(cardTitle)
    productCardBody.appendChild(price)
    productCardBody.appendChild(addButton)

    productCard.appendChild(productCardBody)

    img.src = product.images[0]
    
    img.classList.add('productImage')
    productCard.classList.add('productCard')

    // cardTitle.textContent = product.title

    // price.textContent = product.price

    // productCard.style = "overflow: hidden; width: 200px; border-radius: 10px; background-color: white"

    itemBoxes.appendChild(productCard)
});