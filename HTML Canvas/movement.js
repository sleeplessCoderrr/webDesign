import {ctx, canvas} from '../HTML Canvas/canvas.js';

document.addEventListener('DOMContentLoaded', ()=>{
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 10;

    const img = new Image();
    img.src = '../img/badminton.jpeg'
    img.onload = ()=>{
     ctx.drawImage(img, 40, 40, 120, 100);
    }

    let xPos, yPos;
    xPos = yPos = 20;
    const speed = 5;

    //basic movement
    document.addEventListener('keydown', (e)=>{
        if(e.key == 'a')
            xPos -= speed;
        if(e.key == 'd')
            xPos += speed;
        if(e.key == 'w')
            yPos -= speed;
        if(e.key == 's')
            yPos += speed;
    });

    function animation(){
        //to clear the rectangle that already made before
     ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        
        //to fill the rectangle
     ctx.fillStyle = '#25D952'
     ctx.fillRect(xPos, yPos, 40, 40);
        
        //when ready call the animation function
        requestAnimationFrame(animation);
    }

    animation();
})