const form = document.getElementById('form')
const buyItem = document.querySelector('.buyitem')
const closeitem = document.querySelector('.close')
const buyButton = document.querySelectorAll('.card-databox__read-more-btn')

function removeClass() {
   form.classList.remove('visibleform')
}
   for(let i =0; i< buyButton.length; i++) {
      buyButton[i].addEventListener('click', (e)=> {
         form.classList.toggle('visibleform')       
     })
}

  buyItem.addEventListener('click', (e) => {
      e.preventDefault()
      alert("Успешная покупка! Ожидайте") 
      setTimeout(removeClass, 2000)
   })

   closeitem.addEventListener('click', (e) => {
      e.preventDefault()
      form.classList.remove('visibleform')
   })