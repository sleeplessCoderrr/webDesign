document.addEventListener('DOMContentLoaded', ()=>{

    const myCanvas = document.getElementById('my-canvas');
    const ctx = myCanvas.getContext('2d');

    //Making template shape
    ctx.fillStyle = '#25D952';
    ctx.fillRect(20, 20, 40, 40);

    //Makking shape using stroek
    ctx.beginPath();
    ctx.moveTo(20, 80);
    ctx.lineTo(60, 100);
    ctx.lineTo(60, 120);
    ctx.lineTo(20, 140);
    ctx.closePath();
    ctx.fillStyle = '#25D952';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fill();

    //Making bezier of stroke
    ctx.beginPath();
    ctx.moveTo(80, 20); //from this point
    ctx.quadraticCurveTo(160, 20, 160, 60); //2 pertama adlh titik yg  dikunjungi, 2 sisanya titik akhirnya
    ctx.lineWidth = 1;
    ctx.stroke();

    //Makking an oval shape using stroke
    ctx.beginPath();
    ctx.arc(100, 110, 20, 0, Math.PI * 2);
    ctx.lineWidth = 1;
    ctx.stroke();

});