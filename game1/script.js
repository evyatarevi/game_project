const arr = document.querySelectorAll("td");
for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener("click", function(){
        arr[i].firstChild.style.visibility = "visible";
        setTimeout(() => {
            arr[i].firstChild.style.visibility = "hidden";
        }, 1500);
    })
    
}
