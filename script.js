const search = document.querySelector("#search");
const divs = document.querySelectorAll(".recipes")


search.addEventListener("keyup", (e)=>{
    const word = event.target.value.toLowerCase();
    
    divs.forEach (item =>{
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
        item.querySelector(".hidden").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})


