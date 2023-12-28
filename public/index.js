
const background = document.querySelector("body");
const picture =   document.getElementsByClassName("background")[0];



console.log(picture)
//changes the background image every 5 seconds
//resize images , and either change back ground colour in html or have function so first image isnt after 5 seconds



  function changeBackground() {
    // Array of Images
       var backgroundImg= [  "Resized/home1.jpg","Resized/home2.jpg", "Resized/home3.jpg", "Resized/home4.jpg"
                             ]
                                     

       setInterval(changeImage, 7000);
      function changeImage() {   
       var i = Math.floor((Math.random() *5));


       background.style.backgroundImage = "url('"+backgroundImg[i]+"')";
     }
   }

   if (typeof window !== 'undefined') {
    window.addEventListener("load",changeBackground() )
    console.log('You are on the bowser')
   }
  






