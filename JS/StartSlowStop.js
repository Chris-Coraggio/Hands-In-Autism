
$(document).ready(function() {
  var start = $("#Start");
  var picture = $('#picture');

  var imgs = ['Pictures/Start.png', 'Pictures/Slow.png', 'Pictures/Stop.png'];
  var curIndex = imgs.length - 1;

  picture.click(function() {
    curIndex = (curIndex + 1) % imgs.length;
    picture.prop("src", imgs[curIndex]);
  });

  picture.click();
});
