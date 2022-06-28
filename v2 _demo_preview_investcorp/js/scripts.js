var image = "img01.jpg";
var increment_image = 1;
const increment = 10;
var blur = increment;

function setImage() {
    
    increment_image += 1;
    if(increment_image > 6) {
        increment_image = 1;
    }
    image = `img0${increment_image}.png`;
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

setInterval(setBlur, 100);