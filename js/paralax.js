let wrap= document.querySelector(".about-photo");
let img= document.querySelector(".about-photo-img");

wrap.addEventListener('mousemove', function(e){
 let x = e.clientX/innerWidth;
 let y = e.clientY/innerHeight;

 img.setAttribute('style', 'margin-left:'+ -x*100 +'px;' + 'margin-top:' + -y*100+ 'px;' )


 wrap.addEventListener('mouseout', function(e){
    img.setAttribute('style', 'margin-left:'+ 0 +'px;' + 'margin-top:' + 0 + 'px;' )
 });
});
