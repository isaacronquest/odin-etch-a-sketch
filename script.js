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
                block.style.backgroundColor = 'black';
            });
            row.appendChild(block);
        }
    
        canvas.appendChild(row);
    }
}

newSketch();

newSketchBtn.addEventListener('click', () => {
    let size = prompt('Enter the size of the sketch','');
    width = size;
    height = size;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
      }
    newSketch();
});


