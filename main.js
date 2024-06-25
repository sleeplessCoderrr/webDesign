const button = document.getElementById("click-me").addEventListener("click", ()=> {
    setTimeout(()=>{
        alert("I was clicked 2s ago");
    }, 2000);
});