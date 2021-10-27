var image = "img01.jpg";
var increment_image = 1;
const increment = 15;
var blur = increment;

function setImage() {    
    
    increment_image += 1;
    if(increment_image > 5) {
        increment_image = 1;
    }
    image = `img0${increment_image}.jpg`;   
}

async function setBlur(){
    
    document.getElementById("background_image").style.filter = `blur(${blur}px)`;
    blur -= 1;
    if(blur === 4) {
        setImage();
        await new Promise(r => setTimeout(r, 2000));    
        blur = increment;
        document.getElementById("background_image").style.backgroundImage = `url('assets/img/${image}')`;   
    }    
}

setInterval(setBlur, 80);