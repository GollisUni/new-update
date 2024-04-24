 
document.addEventListener("DOMContentLoaded", function() {
 
    let selectElement = document.getElementById("choose");
    let loginSection = document.getElementById("login");
    let adminSection = document.getElementById("admin");

    loginSection.style="display:none";
    
    selectElement.addEventListener("change", function() {
    
        if (selectElement.value === "Admin") {
           
            loginSection.style.display = "none";
            adminSection.style.display = "block";
        } else if (selectElement.value === "Students") {
          
            loginSection.style.display = "block";
            adminSection.style.display = "none";
        }
    });
});




let mobileside=document.querySelector(".menus-mobile");
let sidesClose=document.querySelector(".tops-sides");

let mobile=document.querySelector(".mobile");
let show=document.querySelector("#show");
 
let menumobile=document.querySelector(".menu-mobile");
 

show.addEventListener("click",(Event)=>{
  Event.preventDefault();
   menumobile.style="display:block";
  
})

