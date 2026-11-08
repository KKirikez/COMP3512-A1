

const itemBoxes = document.querySelector('#itemBoxes')
products.forEach((product) => {
    const productCard = document.createElement('li')
    const img = document.createElement('img')
    const productCardBody = document.createElement('div')
    const cardTitle = document.createElement('h3')
    const price = document.createElement('p')

    productCardBody.appendChild(cardTitle)
    productCardBody.appendChild(price)
    productCard.appendChild(img)
    productCard.appendChild(productCardBody)

    img.src = product.images[0]
    img.style = "height: 200px; width: auto"
    

    cardTitle.textContent = product.title

    price.textContent = product.price

    productCard.style = "overflow: hidden; width: 200px; border-radius: 10px; background-color: white"

    cardList.appendChild(productCard)
});