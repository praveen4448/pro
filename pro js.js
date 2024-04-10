const headerclose=document.querySelector(".close")
const header=document.querySelector("header")
 
headerclose.addEventListener('click',()=>{
   
 
   header.classList.toggle("nav-close")
    
})
const body=document.querySelector("body")

window.addEventListener("resize", function(){
   
    if(this.window.innerWidth<690)
    {
      header.classList.add("nav-close")
    }
    else{
      header.classList.remove("nav-close")
    }
     
 });

const modename=document.querySelector(".modetoggele .modename")
const modediv=document.querySelector(".modetoggele")




modediv.addEventListener("click",()=>{
   if(modename.textContent=="Dark")
   {
      modename.textContent="Light"
   }
   else{
      modename.textContent="Dark"
   }
   modediv.classList.toggle("modesun")
   document.body.classList.toggle("dark-theme")
})

const ficon=document.querySelector(".fiocn")
const bicon=document.querySelector(".biocn")
const uicon=document.querySelector(".uiocn")
const finfo=document.querySelector(".fontend-info")
const binfo=document.querySelector(".bkend-info")
const uinfo=document.querySelector(".ux-ui-info")
ficon.addEventListener("click",()=>{
   if(binfo.classList.contains("show-f")){
      binfo.classList.remove("show-f")
   }
   if(uinfo.classList.contains("show-f")){
      uinfo.classList.remove("show-f")
   }
   finfo.classList.toggle("show-f")
})
bicon.addEventListener("click",()=>{
   if(finfo.classList.contains("show-f")){
      finfo.classList.remove("show-f")
   }
   if(uinfo.classList.contains("show-f")){
      uinfo.classList.remove("show-f")
   }
   binfo.classList.toggle("show-f")
})
uicon.addEventListener("click",()=>{
   if(finfo.classList.contains("show-f")){
      finfo.classList.remove("show-f")
   }
   if(binfo.classList.contains("show-f")){
      binfo.classList.remove("show-f")
   }

   uinfo.classList.toggle("show-f")
})
// const pbtn=document.querySelectorAll(".button a button")

// // var buttonsfunction=function(m){
// //    pbtn.forEach((btn)=>{
// //      btn.classList.remove("active-btn")
// //    })
// //    pbtn[m].classList.add("active-btn")
    
// //   }

// //   pbtn.forEach((btn,i)=>{
// //    btn.addEventListener("click",()=>
// //    {
// //      buttonsfunction(i);
// //    })
// //   })

// var showF=function(m){
//    pbtn.forEach((btn)=>{
//       btn.classList.remove("active-btn");


//    })
//    pbtn[m].classList.add("active-btn")
// }

// pbtn.forEach((btn,i)=>{
//    btn.addEventListener("click",()=>{
//       showF(i);
//    })
// })
// pbtn.addEventListener("click",()=>{
//    pbtn.classList.add("active-btn");
// })
 