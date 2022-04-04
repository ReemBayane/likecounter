var image= document.getElementById("picture");
let card= document.querySelector(".card");

var clicks = 0;

function likeClick() {
  clicks += 1;
  document.getElementById("likes").textContent = clicks;
 
};

var click = 0
function dislikeClick(){
    click += 1;
    document.getElementById("dislikes").textContent = click;
};

image.addEventListener('dblclick', likeClick);



card.addEventListener("click" , function (event) {

  

  if(event.target.id=="dislike" || event.target.id == "dislikes" ){
    dislikeClick();

  }else if(event.target.id=="like"){
    likeClick();
  } 
});


