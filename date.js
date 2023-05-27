
const date = new Date()
const getDate = function(date) {
    let readableDate = date.toLocaleString()
    return readableDate.slice(0, 10)
  }

const dateAll = document.querySelectorAll(".date")
for (let i=0; i<dateAll.length; i++) {
dateAll[i].innerHTML=getDate(date)
}
