function swapBoxes() {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    
    box1.style.transform = 'translateX(150px)';
    box2.style.transform = 'translateX(-150px)';

  }

  function swapBoxesD() {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    
    box1.style.transform = 'translateX(-150px)';
    box2.style.transform = 'translateX(-150px)';

  }