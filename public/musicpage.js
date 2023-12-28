// image container
const imageContainer = document.querySelector(".image-container");

//prevbtton
const prevBtn = document.getElementById("prev");


//next
const nextBtn = document.getElementById("next");


let x = 0;

prevBtn.addEventListener("click", ()=> {
  x = x - 45;
  rotate();



})

nextBtn.addEventListener("click", ()=> {
    x = x + 45;
    rotate();
  
  
  
  });


function rotate() {

    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    

 
 
};






