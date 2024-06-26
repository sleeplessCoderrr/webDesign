const images = [
    {url: '../img/badminton.jpeg'},
    {url: '../img/mad_king.jpeg'},
    {url: '../img/parkout.jpeg'},
    {url: '../img/tracktor.jpeg'},
];


function sliderImages(images){
    let index = 0;
    const length = images.length - 1;
    const container = $('.img-place');
    let img = $('<img>').attr('src', images[index].url).attr('width', '200px').attr('hidden', false);
    container.append(img)
    
    setInterval(()=>{
        index++;
        if(index > length) index = 0;
        img.attr('src', images[index].url);
    }, 2000);
    
    $(document).keydown((e) =>{
        if(e.key.toLowerCase() === 'a'){
            index--;
            if(index < 0) index = length;
            img.attr('src', images[index].url);
        }
        if(e.key.toLowerCase() == 'd'){
            index++;
            if(index > length) index = 0;
            img.attr('src', images[index].url);
        }
    });

}

$(document).ready(()=>{
    sliderImages(images);

    $('#login').on('submit', (e)=>{
        e.preventDefault();
        const emailValue = $('#email').val();
        const passValue = $('#password').val();

        const objectLogin = {
            'email' : emailValue,
            'password' : passValue
        }
    
        localStorage.setItem(emailValue, JSON.stringify(objectLogin));

    });


});