import {ctx, canvas} from '../HTML Canvas/canvas.js';

document.addEventListener('DOMContentLoaded', ()=>{

    const video = document.createElement('video');
    video.src = '../img/race 4.mp4';
    video.play();

    const img = new Image();
    img.src = '../img/badminton.jpeg'
    img.onload = ()=>{
     ctx.drawImage(img, 40, 40, 120, 100);
    }

    function drawVideo( ) {
        ctx.drawImage(video, 20, 20, 80, 40);
        requestAnimationFrame(drawVideo);
    }

    drawVideo();
});

