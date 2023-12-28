
const express = require("express")
const app = express()
const path = require("path")



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Resized')));



 app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "homepage.html"))
   });



app.get("/Music",function(req,res){
    res.sendFile(path.join(__dirname, "music.html"))
})




 app.get("/Spotify", (req,res,next) =>{

    if (err){
         next(err)
     } else {
                 res.redirect("https://open.spotify.com/artist/6WK1QmibG6rD0tGleeT08r");

    }
 })








app.listen(3000,function () {
    console.log('Node server is running..');
})