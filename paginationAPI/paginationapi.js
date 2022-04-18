// fetch("https://api.coinbase.com/v2/currencies")
// .then((res)=>res.json())
// .then((data)=>console.log(data.data))
const body1=document.getElementById("body1")
const url="https://api.coinbase.com/v2/currencies"
function getData(url){
const data=fetch(url)
data.then((res)=>res.json())
.then((data1)=>appendData(data1.data,body1))
.catch((err)=>console.log(err.message))
}
getData(url)

function appendData(data,location){
    data.map((el)=>{
        let body2=document.createElement("div")
        body2.setAttribute("id","body2")
        let idspan=document.createElement("span")
        let name=document.createElement("span");
        let size=document.createElement("span");
        idspan.innerText=el.id;
        name.innerText=el.name;
        size.innerText=el.min_size
        body2.append(idspan,name,size)
        location.append(body2)
    })
}
export {getData,appendData}
