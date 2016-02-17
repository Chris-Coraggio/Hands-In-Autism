
/* var index = 0;

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
*/

$(document).ready(function() {
  var picture = [$('.pic'), $('.pic1'), $('.pic2'), $('.pic3'), $('.pic4')];
  
  var pics = ['Pictures/Five.jpg','Pictures/Four.jpg','Pictures/Three.jpg','Pictures/Two.jpg','Pictures/One.jpg'];
  
  var boo;
  
  console.log("Cool");
  
  picture[0].click(function() {
      boo = 0;
      picture[boo].css("visibility", "hidden");  
  });
  picture[1].click(function() {
    boo = 1;
    picture[boo].css("visibility", "hidden");  });
  picture[2].click(function() {
    boo = 2;
    picture[boo].css("visibility", "hidden");
  });
  picture[3].click(function() {
    boo = 3;
    picture[boo].css("visibility", "hidden");
  });
  picture[4].click(function() {
    boo = 4;
    picture[boo].css("visibility", "hidden");
  });  
});
