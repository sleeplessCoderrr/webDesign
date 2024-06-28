import {ctx, canvas} from '../HTML Canvas/canvas.js';

document.addEventListener('DOMContentLoaded', ()=>{

    //on how to add font
    ctx.font = '12px Inter';
    ctx.fillText('Learn Text', 20, 20);

    //when you wantead to acces translate, scale,, and rotate
    ctx.save();
    ctx.translate(20, 40); //this to to move the next writting
    ctx.fillText('Is it easy or not?', 0, 0); //now it's x and y will depend to the translate point
    ctx.restore();

    ctx.save();
    ctx.translate(20, 60)
    ctx.rotate(Math.PI * 0.3); //it's similar to arc function
    ctx.fillText('I think its a bit tricky', 0, 0);
    ctx.restore();

    ctx.save();
    ctx.translate(140, 20);
    ctx.scale(1.2, 1.2);
    ctx.fillText('Now lets scale this', 0, 0);
    ctx.restore();

});