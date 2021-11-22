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

            // pixel.addEventListener('mousedown', mousedown)
            // pixel.addEventListener('mouseover', mouseover)
            
            function Click () {                         //нажатие 
            pixel.addEventListener('mousedown', () =>
            Keep (),
            console.log('1'))
            }
            
            function Keep () {                         //провести
            pixel.addEventListener('mouseover', () =>
            setColor(pixel))
            console.log('2')
            }

            Keep ()

            

            // pixel.addEventListener('mousedown', () =>
            //     Click (),
            //     console.log('2')
            //     )
                

            fieldDrawing.append(pixel)
    }

//нажатие, а потом передвижение

//добавить общее поле для рисования
//туда сгенерировать micro div для изменения цвета
//далее контролируя движение курсора заменять цвета при нажатии с сохранением цвета
//количество генерируемых div должно быть кратно *ширины и длинны