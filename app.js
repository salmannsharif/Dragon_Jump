
console.log(' Exercise -> crearing a simple dragon jump game using java script by Salman ...'); // Sample text to see js file working or not ..,

score=0;
cross=true;

// audio=new audio('music.mp3');
// audiog0= new audio('gameover.mp3');
// audiog0.play();

document.onkeydown=function(e){
    console.log('key code', e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },700)
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+'px';        
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+'px';        
    }
}

setInterval(() => {
    dino= document.querySelector('.dino')
    gameOver =document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx = parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt( window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY=  Math.abs(dy-oy);

    console.log(offsetX,offsetY)
    if(offsetX< 93 && offsetY<52){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obsticleAni');
    }
    else if(offsetX<145 && cross)
    {
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000)
    }

    setTimeout(() => {
    
        aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur=aniDur-0.1;
        obstacle.style.animationDurtion= newDur+ "s";
    }, 500);

}, 10);


function updateScore(score)
{
    scoreCont.innerHTML="Your Score:" +score;
}



