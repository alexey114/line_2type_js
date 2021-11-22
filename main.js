const fieldDrawing = document.querySelector('#field');
const widthField = document.querySelector('#field').offsetWidth;
const heightField = document.querySelector('#field').offsetHeight;
const colors = ['#992828'];
const arrDiv = [];

draw = false;

function numberDiv () {
    const PIXEL = Math.ceil(Math.ceil(widthField * heightField)/25)
    return PIXEL
}
numberDiv ()

const PIXEL_ITEMS = numberDiv ();

function setColor (element) {
    element.style.backgroundColor = colors
}

    for(let i=0; i < PIXEL_ITEMS; i++) {

            let pixel = document.createElement('div')
            pixel.classList.add('pixel_div')

            pixel.addEventListener('mousedown', mousedown)
            pixel.addEventListener('mouseover', mouseover)
            pixel.addEventListener('mouseup', mouseup)

            function mousedown (event) {
                let ClientRect = this.getBoundingClientRect();
                draw = true
                setColor(pixel)
            }

            function mouseover() {
                if(draw == true) {
                    setColor(pixel)
                }
            }

            function mouseup () {
                draw = false;
            }

            fieldDrawing.append(pixel)
    }