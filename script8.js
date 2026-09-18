const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const value = document.getElementById("value")
const price = document.querySelector(".price")
const size = document.querySelector(".size")
let cost = 1500

function increment(){
let result = Number(value.textContent) + 1
value.textContent = result
price.textContent = Number(value.textContent) * cost + "$"
}
function decrement(){
if (Number(value.textContent) > 1){
let result = Number(value.textContent) - 1
value.textContent = result
price.textContent = Number(value.textContent) * cost + "$"
}
}
plus.onclick = increment
minus.onclick = decrement

size.addEventListener("click",function(event){
    let clickTarget = event.target;
    let currentActive = document.querySelector(".active")
    if (clickTarget.classList.contains("medium")){
        cost = 1500
        price.textContent = Number(value.textContent) * cost + "$"
        clickTarget.classList.add("active")
        currentActive.classList.remove("active")
    }else if (clickTarget.classList.contains("large")){
        cost = 1700
        price.textContent = Number(value.textContent) * cost + "$"
        clickTarget.classList.add("active")
        currentActive.classList.remove("active")
    }
})