const Randomecolor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
    
         color +=hex[Math.floor(Math.random()*16)]
    }
    return color
}
console.log(Randomecolor())
 let intervalid;
const startColor=()=>{
    // setInterval(ChnageBgColor)
    // if (!intervalid) {
    //     intervalid= setInterval(ChnageBgColor,1000)
    // }
    intervalid= setInterval(ChnageBgColor,1000)

 function ChnageBgColor(){
    document.body.style.backgroundColor=Randomecolor()
 }
}
const stopColor=()=>{
      clearInterval(intervalid) 
    //   intervalid=null
}

document.querySelector("#Start").addEventListener("click",startColor)
document.querySelector("#Stop").addEventListener("click", stopColor)