
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

   //crew data

  
}

getData()

async function getDataCrew()
{
   var response = await fetch("../data.json")
   var data = await response.json()


 var buttons = document.getElementsByClassName("buttons")[0]
 var role =  document.getElementsByClassName("role")[0]
 var name = document.getElementsByClassName("name")[0]
 var bio =  document.getElementsByClassName("bio")[0]
 var memberImg =  document.getElementById("Mimg")
  
 for(let i=0 ; i< buttons.children.length ; i++)
  {
     buttons.children[i].addEventListener("click", (e) => {
       console.log("clicked")
       Array.from(buttons.children).forEach(element => {
           element.style.backgroundColor = "grey"
           
        })

        e.target.style.backgroundColor = "white"
        role.innerHTML = data.crew[i].role
        name.innerHTML = data.crew[i].name
        bio.innerHTML = data.crew[i].bio
        memberImg.src = data.crew[i].images.png
     })

  }

}

getDataCrew()

async function getDataTech()
{
   var response = await fetch("../data.json")
   var data = await response.json()

   var Tbuttons = document.getElementsByClassName("techBtn")[0]
   var Ttitle =  document.getElementsByClassName("Ttitle")[0]
   var Tdescription = document.getElementsByClassName("Tdescription")[0]
   var Timg = document.getElementById("Timg")
    var landscape = document.getElementsByClassName("landscape")[0]
   for(let i=0 ; i< Tbuttons.children.length ; i++)
   {

      Tbuttons.children[i].addEventListener("click", (e) => {
      Array.from(Tbuttons.children).forEach(element => {
         element.style.backgroundColor = "transparent"
         element.style.color = "white"
         })

         e.target.style.backgroundColor = "white"
         e.target.style.color = "black"
         Ttitle.innerHTML = data.technology[i].name
         Tdescription.innerHTML = data.technology[i].description
         Timg.src = data.technology[i].images.portrait
         landscape.src = data.technology[i].images.landscape
   })

   }
}

getDataTech()