const container = document.querySelector(".container")
let vol
function loading(say = 10,pozisya=3) {
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

        gif.classList.add("hidden")
}

let cons = 0
window.addEventListener("scroll", () => {
    console.log("window.screenY", window.scrollY)
    console.log("window.innerHeight", window.innerHeight)
    console.log("document.documentElement.scrollHeight", document.documentElement.scrollHeight)
    if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight && vol) {
        vol=false
        gif.classList.remove("hidden")
        setTimeout(()=>loading(10,window.scrollY), 4000)          
    }else if(vol){
        setTimeout(hidden,7000)
    }
    
    // else{
    //     
    // }
    
    // else if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        
    // }



})



