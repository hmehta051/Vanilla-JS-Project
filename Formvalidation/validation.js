const form1=document.getElementById("form1");
const name=document.getElementById("fn");
const email=document.getElementById("email");
const pass=document.getElementById("pass");
const error=document.getElementById("error");

form1.addEventListener("submit",(e)=>{
    let errormsg=[]
    if(name.value==""||name.value==null){
        errormsg.push("Name is required")
    }else if(email.value==""||email.value==null){
        errormsg.push("email is required")
    }else if(pass.value==""||pass.value==null){
        errormsg.push("pass is required")
    }else if(pass.value.length<6){
        errormsg.push("pass is must be greater than 6")
    }else if(pass.value.length>=20){
        errormsg.push("pass is must be less than 20")
    }
    if(errormsg.length>0){
        e.preventDefault()
        error.innerText=errormsg.join(", ")
    }
})