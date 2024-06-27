document.addEventListener('DOMContentLoaded', ()=>{
    const canvasAnimation = document.getElementById('my-canvas');
    const contex = canvasAnimation.getContext('2d');

    //on how to add font
    contex.font = '12px Inter';
    contex.fillText('Learn Text', 20, 20);

    //when you wantead to acces translate, scale,, and rotate
    contex.save();
    contex.translate(20, 40); //this to to move the next writting
    contex.fillText('Is it easy or not?', 0, 0); //now it's x and y will depend to the translate point
    contex.restore();

    contex.save();
    contex.translate(20, 60)
    contex.rotate(Math.PI * 0.3); //it's similar to arc function
    contex.fillText('I think its a bit tricky', 0, 0);
    contex.restore();

    contex.save();
    contex.translate(140, 20);
    contex.scale(1.2, 1.2);
    contex.fillText('Now lets scale this', 0, 0);
    contex.restore();

});