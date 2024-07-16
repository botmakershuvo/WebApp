document.querySelectorAll("[data-menu]").forEach(
    item=> {
        item.addEventListener('click',e =>{
            let dataCanvas = document.querySelector("[data-menu].active");

            if(dataCanvas){
                dataCanvas.classList.toggle('active');
            }
            item.classList.toggle('active');
        })
    }
)
var copybtn = document.getElementById("copy-btn");
var link = document.getElementById("link");
copybtn.onclick = function () {
    navigator.clipboard.writeText(link.innerHTML);
    copybtn.innerHTML = "Copied"
    setTimeout(function (){
        copybtn.innerHTML = "Copy"
    }, 2000)
}