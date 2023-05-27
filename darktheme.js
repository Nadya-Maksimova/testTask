const darkMode = document.querySelector(".darkMode")
darkMode.addEventListener("click", () => {
    const body = document.querySelector(".body")
    const header = document.querySelector("header")
     const as = document.querySelectorAll("a")
    const footer = document.querySelector("footer")
 const cards = document.querySelectorAll("div")
    body.classList.toggle('darkTheme')
    header.classList.toggle('darkTheme')
    footer.classList.toggle('darkTheme')
   for(let card of cards) {
    card.classList.toggle("darkTheme")
   }
   for(let a of as) {
    a.classList.toggle("darkTheme")
   }
   
})