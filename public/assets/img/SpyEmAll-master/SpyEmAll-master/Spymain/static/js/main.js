

const showSidebar = () => {
    sidebar.style.display="block";
  sidebar.style.transform =  `translate(0%)`;
  sidebar.style.filter = 'drop-shadow(0 0.5em 0.5em black)';
  overlay.style.display = 'block';
  var body= document.querySelector('light')
  document.body.style.overflowY = 'hidden';
  document.querySelector('#overlay').style.filter ='blur(7px)';
  document.querySelector('nav').style.filter ='blur(7px)';
  
  
}

const hideSidebar = () => {
  sidebar.style.transform = `translate(${translateX}%)`;
  document.querySelector('#overlay').style.filter ='none';
  document.querySelector('nav').style.filter ='none';
  document.body.style.overflowY = 'auto';
}



function ScrollRight(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main').scrollLeft += card_scroll_width;
}
function ScrollLeft(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main').scrollLeft -= card_scroll_width;
}

function ScrollRight1(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main1').scrollLeft += card_scroll_width;
}
function ScrollLeft1(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main1').scrollLeft -= card_scroll_width;
}

function ScrollRight2(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main2').scrollLeft += card_scroll_width;
}
function ScrollLeft2(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main2').scrollLeft -= card_scroll_width;
}

function ScrollRight3(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main3').scrollLeft += card_scroll_width;
}
function ScrollLeft3(){
  var card_scroll_width=document.querySelector(".card-main").clientWidth+40;
  document.querySelector('.card-main3').scrollLeft -= card_scroll_width;
}

function ScrollRight4(){
  var card_scroll_width=document.querySelector(".card-main4").clientWidth+40;
  document.querySelector('.card-main4').scrollLeft += card_scroll_width;
}
function ScrollLeft4(){
  var card_scroll_width=document.querySelector(".card-main4").clientWidth+40;
  document.querySelector('.card-main4').scrollLeft -= card_scroll_width;
}


