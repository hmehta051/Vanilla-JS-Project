const items=document.querySelector(".list-items")
const first=document.querySelector(".first")
const prev=document.querySelector(".prev")
const next=document.querySelector(".next")
const last=document.querySelector(".last")

let arrayList=[]
let page=0;

for(let i=1;i<=100;i++){
    let li=document.createElement("li")
    li.textContent=`List number ${i}`
    arrayList.push(li)
}

for(let i=page;i<page+10;i++){
    items.append(arrayList[i])
}
next.addEventListener("click",()=>{
    page===arrayList.length-10?(page=0):page+=10;
    items.innerHTML=""
    for(let i=page;i<page+10;i++){
        items.appendChild(arrayList[i])
    }
})
prev.addEventListener("click",()=>{
    page===0?(page=arrayList.length-10):page-=10;
    items.innerHTML=""
    for(let i=page;i<page+10;i++){
        items.appendChild(arrayList[i])
    }
})
first.addEventListener("click",()=>{
    page=0
    items.innerHTML=""
    for(let i=page;i<page+10;i++){
        items.appendChild(arrayList[i])
    }
})
last.addEventListener("click",()=>{
    page=arrayList.length-10
    items.innerHTML=""
    for(let i=page;i<page+10;i++){
        items.appendChild(arrayList[i])
    }
})

