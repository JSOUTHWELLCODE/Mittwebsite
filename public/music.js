
const buttonSelector = document.getElementById("toggle")

const Button = document.getElementById("About")

if (typeof window !== 'undefined') {
   window.addEventListener("load", ()=>{
   Button.style.display = "none"
   })
  };





buttonSelector.addEventListener("click", ()=>  {
 if(Button.style.display === "none"){
    Button.style.display = "block"
 }  else{
    Button.style.display = "none"
 }

});
   





  
 
const imgSelector = document.querySelectorAll("img")



//const p = Array.from(nodelist)



let p = Array.from(document.getElementById("images").querySelectorAll("p"))

  if (typeof window !== 'undefined') {
       window.addEventListener("load", ()=>{
       p.forEach(paragraph =>{
          paragraph.style.display = "none";
         console.log(paragraph)
       })
       })
      };


console.log(p)



     

Array.from(imgSelector).forEach(image=> {
   image.addEventListener("mouseover", ()=>{
      
      
       p.forEach(paragraph=>{
         if(paragraph.style.display === "none"){
            paragraph.style.display = "block"
        }  else{
          paragraph.style.display = "none"
        }
        

    
      });

      
      });
      
      }); 
      


   // p.forEach(paragraph=> {
   // if(p.style.display === "none"){
   //    p.style.display = "block"; 
   // }
   //   else {
   //    p.style.display = "none"; 

   //   }  
      
      
   



   













   


   





// list object that has the elements as keys and the output is the title of mitts songs 






   












// could do two objects and when you hover / click plays audio from the song 
    




console.log(Button)










