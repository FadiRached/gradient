
let finalColor;

const generateGradient = function() {
    let gradientAngle = Math.floor(Math.random() * 360);
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
  
    finalColor = `linear-gradient(${gradientAngle}deg, rgb(${r1},${g1},${b1}) 0%, rgb(${r2},${g2},${b2}) 100%)`;
    return finalColor;
  };