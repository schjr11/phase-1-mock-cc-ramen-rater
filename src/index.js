document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
})

const baseURL = 'http://localhost:3000/ramens'
fetch(baseURL)
  .then(response => response.json())
  .then(data => data.forEach(ramenObject => {


    const img = document.createElement('img')
    img.src = ramenObject.image

    const ramenMenu = document.querySelector('#ramen-menu')
    ramenMenu.append(img)


    img.addEventListener('click', () => {

        const detailImage = document.querySelector('.detail-image')
        detailImage.src = ramenObject.image
        detailImage.alt = ramenObject.name

        const name = document.querySelector('.name')
        name.innerText = ramenObject.name

        const restaurant = document.querySelector('.restaurant')
        restaurant.innerText = ramenObject.restaurant

        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.innerText = ramenObject.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.innerText = ramenObject.comment
    })
  }))


const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault()
   
    const newRamenObject = {}
    newRamenObject.name = document.querySelector('#new-name').value
    newRamenObject.restaurant = document.querySelector('#new-restaurant').value
    newRamenObject.image = document.querySelector('#new-image').value
    newRamenObject.rating = document.querySelector('#new-rating').value
    newRamenObject.comment = document.querySelector('#new-comment').value
    console.log(newRamenObject)

    const ramenMenu = document.querySelector('#ramen-menu')
    const newRamenItem = document.createElement('img')
    newRamenItem.src = newRamenObject.image
    ramenMenu.append(newRamenItem)
})