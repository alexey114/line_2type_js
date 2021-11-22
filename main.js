const fieldDrawing = document.querySelector('#field');
const widthField = document.querySelector('#field').offsetWidth;
const heightField = document.querySelector('#field').offsetHeight;
const colors = ['#992828']

function numberDiv () {
    const PIXEL = (widthField * heightField)/100
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

            pixel.addEventListener('mousedown', () =>
                setColor(pixel))
        
            fieldDrawing.append(pixel)
    }



//добавить общее поле для рисования
//туда сгенерировать micro div для изменения цвета
//далее контролируя движение курсора заменять цвета при нажатии с сохранением цвета
//количество генерируемых div должно быть кратно *ширины и длинны