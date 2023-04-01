const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const xc = canvas.width / 2; // center of canvas
const yc = canvas.height / 2;

const img = new Image();
img.src = '../img/background-sketch.png';
img.onload = function() {
  const scale = img.width / canvas.width
  console.log(`The canvas width is ${canvas.width}`)
  console.log(`The image width is ${img.width}`)
  console.log(`The scale is ${scale}`)
  const sourceX = 100
  const sourceY = 100
  const sourceWidth = img.width * 2/3 - sourceX;
  const sourceHeight = img.height * 2/3 - sourceY;
  const scale2 = sourceWidth / canvas.width;
  const destWidth = canvas.width;
  const destHeight = sourceHeight * scale2;
  ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight);
}


