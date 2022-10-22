const container = document.querySelector(".container")
document.querySelector(".open-navbar-icon").addEventListener("click",()=>{
     container.classList.add("change")
})
document.querySelector(".close-navbar-icon").addEventListener("click",()=>{
     container.classList.remove("change")
})


const nav_buttons = document.querySelectorAll(".navigation-button")
for (const nav_button of nav_buttons){
     nav_button.addEventListener('click',()=>{
          nav_button.parentElement.parentElement
          .classList.toggle("change")
     })
     }
//Alternative
// Array.from(document.querySelectorAll(".navigation-button"))
// .forEach(item =>{
//     item.onclick = ()=>{
//         item.parentElement.parentElement.classList.toggle
//         ('change');
//     };
// });

const colors = ["#6495ed","#7fffd4","#ffa07a","#f08080","#afeeee"]
let i=0
const nav_links = document.querySelectorAll(".nav-link")
for (const nav_link of nav_links){
     nav_link.style.cssText = `background-color: ${colors[i++]}`
}
//Alternative
// Array.from(document.querySelectorAll(".nav-link")).
// forEach(item =>{
//      item.style.cssText = `background-color: ${colors[i++]}`
// })

