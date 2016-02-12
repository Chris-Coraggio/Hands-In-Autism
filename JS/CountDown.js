
var index = 0;

$(document).ready(function() {
  var picture = [$('.pic'), $('.pic1'), $('.pic2'), $('.pic3'), $('.pic4')];
  
  var pics = ['Pictures/Five.jpg','Pictures/Four.jpg','Pictures/Three.jpg','Pictures/Two.jpg','Pictures/One.jpg'];
  
  console.log("Hello");
  
  picture[0].click(function() {
    
    if(index == 5){
        index = 0;
        for(var i = 1; i < picture.length; i++){
          picture[i].css("visibility", "hidden");
          console.log("Worker!");
        }
        console.log("Working!");
    }
    
    picture[index].css("visibility", "visible");
    console.log("check");
    
    index++;    
  });
});