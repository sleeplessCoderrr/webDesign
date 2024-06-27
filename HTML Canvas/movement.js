document.addEventListener('DOMContentLoaded', ()=>{
    const canvasAnimation = document.getElementById('my-canvas');
    const cont = canvasAnimation.getContext('2d');

    cont.shadowColor = 'black';
    cont.shadowBlur = 10;

    const img = new Image();
    img.src = '../img/badminton.jpeg'
    img.onload = ()=>{
        cont.drawImage(img, 40, 40, 120, 100);
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
        cont.clearRect(0, 0, canvasAnimation.clientWidth, canvasAnimation.clientHeight);
        
        //to fill the rectangle
        cont.fillStyle = '#25D952'
        cont.fillRect(xPos, yPos, 40, 40);
        
        //when ready call the animation function
        requestAnimationFrame(animation);
    }

    animation();
})