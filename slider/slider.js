const container=document.querySelector(".container")
    const slider=document.getElementById("slider")
    const prevBtn=document.getElementById("prevBtn")
    const nextBtn=document.getElementById("nextBtn")
    let count=0;
    let images=["https://images.unsplash.com/photo-1649101052688-0d0056e9c740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGhTUDZKeDh3NFo0fHxlbnwwfHx8fA==&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1649067196253-eb768ff0467d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"]
    slider.innerHTML=`<img src=${images[count]}>`
    prevBtn.addEventListener("click",()=>{
        count--
        if(count>-1){
            slider.innerHTML=`<img src=${images[count]}>`
        }
    })
    nextBtn.addEventListener("click",()=>{
        count++
        if(count<images.length){
            slider.innerHTML=`<img src=${images[count]}>`
        }
    })