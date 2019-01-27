
for(let i=0; i<imgCaptions.length; i+=1){
  $(".grid-row").append("<a><img></a>");
  let $a = $('.grid-row a').eq(i);
  let $img = $('img').eq(i);
  $a.attr("href","photos/"+ imgCaptions[i].fileName);
  $a.attr("data-lightbox","images");
  $a.attr("data-alt",imgCaptions[i].title);
  $a.attr("data-title",imgCaptions[i].details);
  $img.attr("src","photos/thumbnails/"+ imgCaptions[i].fileName);
  $img.attr("alt",imgCaptions[i].details);
}

$('input').on('keyup', function(){
  const input = $('input').val().toLowerCase();
  for(let i=0; i< $('.grid-row a').length; i+=1){
    const $a = $('.grid-row a').eq(i);
    const content = $a.attr("data-title").toLowerCase();
    if(content.indexOf(input) == -1){
      $a.css("display", "none");
    }else{
      $a.css("display", "block");
    }
  }
});
