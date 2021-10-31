
var menu = document.getElementsByClassName("menu")[0]
var close = document.getElementsByClassName("close")[0]
var nav = document.getElementsByTagName("nav")[0]

menu.addEventListener("click",() => {
   nav.style.display = "block"
})


close.addEventListener("click",() => {
    nav.style.display = ""
 })


//destinations

async function getData()
{
   var response = await fetch("../data.json")
   var data = await response.json()
   var links = document.getElementsByClassName("links")[0]
   var title = document.getElementsByClassName("big")[0]
   var image = document.getElementById("img")
   var description = document.getElementsByClassName("description")[0]
   var averageDistance = document.getElementsByClassName("avg")[0]
   var travel = document.getElementsByClassName("travel")[0]
   for(let i=0; i < links.children.length ; i++)
   {
      links.children[i].addEventListener("click",() => {
           title.innerHTML = data.destinations[i].name
           image.src = data.destinations[i].images.png
           description.innerHTML =  data.destinations[i].description
           averageDistance.children[1].innerText =  data.destinations[i].distance
           travel.children[1].innerText =  data.destinations[i].travel
      })
   }

   

  
}

getData()

