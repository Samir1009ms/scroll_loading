const container = document.querySelector(".container")
let vol=true
function loading(say = 10,pozisya=0) {
    let i = 0

    while (i < say) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((responsiv) => responsiv.json())
            .then((data) => {
                const img = document.createElement("img")
                img.src = `${data.message}`
                container.appendChild(img)
                window.scrollTo(0,pozisya)
            })
        i++
    }
     vol=true
}
loading()

const gif = document.querySelector(".gif")

function hidden (){
    
    // gif.classList.add("hidden")
    gif.setAttribute("style","display:none")
    console.log("else func")
}

let cons = 0
window.addEventListener("scroll", () => {
    // console.log("window.screenY", window.scrollY)
    // console.log("window.innerHeight", window.innerHeight)
    // console.log("document.documentElement.scrollHeight", document.documentElement.scrollHeight)
    if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight && vol) {
        vol=false
        // gif.classList.remove("hidden")
        gif.setAttribute("style","display:block")
        setTimeout(()=>loading(10,window.scrollY), 4000)     
        console.log("true")   
    }else if(vol){
        gif.setAttribute("style","display:block")
        setTimeout(hidden,6000)
        console.log("else")
    }
})



