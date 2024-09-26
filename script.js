let width = 50;
let height = 50;
let canvas = document.querySelector('#canvas')
let newSketchBtn = document.querySelector('#newSketchBtn')

function newSketch () {
    for (i = 0;i < height;i++) {
        let row = document.createElement('div');
        row.className = 'row';
    
        for (let i = 0; i < width; i++) {
            let block = document.createElement('div');
            block.className = 'block';
            block.addEventListener('mouseover', () => {
                block.style.backgroundColor = getRandomColor();
            });
            row.appendChild(block);
        }
    
        canvas.appendChild(row);
    }
}

newSketch();

newSketchBtn.addEventListener('click', () => {
    let size = prompt('Enter the size of the sketch','');
    if (size > 100) {
        size = prompt('Number cannot be over 100')
    }
    width = size;
    height = size;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
      }
    newSketch();
});

function getRandomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            
            return `rgb(${r}, ${g}, ${b})`;
        }