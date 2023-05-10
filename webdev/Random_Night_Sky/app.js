let canvasWidth = 600;
let canvasHeight = 400; 
let bit = [0, 1];
let bitValue = bit.length;
let byte = 8;
let byteValue = bitValue ** byte;
let byteArray = [];
for (let i = 0; i < byte; i++) {
   byteArray.push(bit);
}
let totalColor = byteValue ** 3;
let randomNumber = Math.random();
let randomByte;
let r = [];
let g = [];
let b = [];
for (i = 0; i < byteValue; i++) {
   r.push(i);
   g.push(i);
   b.push(i);
}
let columnWidth = 10;
let rowHeight = 10;
let hoRatio = canvasWidth / columnWidth;
let verRatio = canvasHeight / rowHeight;
let pixNum = hoRatio * verRatio;
let x = 0;
let myName = 'Layla Michael Osterhus';


function Message(mess) {
   const printDiv = document.getElementById(`chalkboard`);
   const linebreak = document.createElement('br');
   const newMessage = document.createElement("p");
   newMessage.textContent = mess;   
   printDiv.appendChild(newMessage);
   printDiv.appendChild(linebreak);
}

function C(i) {
   const printCanv = document.getElementById(`chalkboard`)
   const createCanvas = document.createElement('canvas')
   createCanvas.id = i
   createCanvas.width = canvasWidth
   createCanvas.height = canvasHeight
   printCanv.appendChild(createCanvas)
   Message('')
   x++
   const cnv = document.getElementById(i);
   ctx = cnv.getContext('2d');
   ctx.fillStyle = "white";
   ctx.strokeStyle = 'white'
   ctx.font = "bold 18px Arial";
   ctx.fillText(i, 4, 18)
}

function picture(path, w) {
   const putImg = document.getElementById(`chalkboard`)
   const newImg = document.createElement('img')
   newImg.src = path
   newImg.width = w
   putImg.appendChild(newImg)
}

function nLink(path) {
   const putLink = document.getElementById(`chalkboard`)
   const linkContainer = document.createElement("div");
   linkContainer.width = 600
   const newLink = document.createElement('a')
   newLink.href = path
   newLink.textContent = path
   linkContainer.appendChild(newLink)
   putLink.appendChild(linkContainer)
}

function pixel(x, y, red, green, blue, opacity) {
   ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
   ctx.fillRect(x, y, 10, 10);
}

function Speckle() {
   let delta = [Math.floor(Math.random() * 10) + 170];
   let epsilon = [Math.floor(Math.random() * 10) + 200];
   let zeta = [Math.floor(Math.random() * 10) + 246];
   ctx.shadowBlur = 12;
   ctx.shadowBlur = 4;
   ctx.shadowBlur = 8;
   ctx.shadowColor = `rgb(${delta}, ${epsilon}, ${zeta})`;
   let xVariety = Math.floor(Math.random() * hoRatio) * columnWidth;
   let yVariety = Math.floor(Math.random() * verRatio) * rowHeight;
   let oVariety = Math.random() * .8;

   pixel(xVariety, yVariety, r[delta], g[epsilon], b[zeta], oVariety);
}



C(x)
for (let i = 0; i < hoRatio; i++) {
   for (let j = 0; j < verRatio; j++){
      let alpha = [Math.floor(Math.random() * 30) + 40];
      let beta = [Math.floor(Math.random() * 10) + 5];
      let gamma = [Math.floor(Math.random() * 10) + 5];
      pixel(i * columnWidth, j * rowHeight, r[alpha], g[beta], b[gamma], 1);
   }
  
}

for (let i = 0; i < 16; i++) {
   Speckle()
}




C(x)
ctx.strokeStyle = '#ffffff';


let lines = (sX, sY, eX, eY) => {
   ctx.beginPath();
   ctx.moveTo(sX, sY);
   ctx.lineTo(eX, eY);
   ctx.stroke();
}

for (i = 1; i < hoRatio; i++) {
   lines(i * columnWidth, 0, i * columnWidth, canvasHeight);
}

for (i = 1; i < verRatio; i++) {
   lines(0, i * rowHeight, canvasWidth, i * rowHeight);
}





C(x)
ctx.fillText("byteArray contains: ", canvasWidth / 2, canvasHeight / 2 - 40);
for (let i = 0; i < byte; i++) {
   ctx.fillText(`[${byteArray[i]}]`, (canvasWidth / 10) * i + 90, canvasHeight / 2);
}

Message(`An array created dynamically can be used in the code but is not written 
to the file using the push() method.`)
console.log(byteArray);
let randomByteArray = [];

for (let i = 0; i < byte; i++) {
   let dice = Math.floor(Math.random() + .5)
   randomByteArray.push(byteArray[i][dice]);
}

C(x)

ctx.fillText(`${randomByteArray.join("")}`, 50, 20);

// comment out previous for loop first



Message(`JavaScript can generate a random number between 0 and 1`)
Message(`Because I'm using JavaScript to append this text to the page,
         this randomly generated number...`)
Message(`${randomNumber}`)
Message(`...will update
everytime you refresh the page.`)



let randomeByteGenerator = () => {
   for (let i = 0; i < byte; i++) {
      let dice = Math.floor(Math.random() + .5)
      randomByteArray.push(byteArray[i][dice]);
      randomByte = randomByteArray.join("");
   }
   randomByteArray = [];
   return randomByte;
}

let byteWidth = 100;
let byteHeight = 20;
let wRatio = canvasWidth / byteWidth;
let hRatio = canvasHeight / byteHeight;

C(x)

for (let iota = 0; iota < wRatio; iota++) {
   for (let yoda = 1; yoda <= hRatio; yoda++)
   ctx.fillText(`${randomeByteGenerator()}`, iota * byteWidth + 20, 
   yoda * byteHeight);
}

Message(`${wRatio * hRatio} randomly generated bytes.`)








Message(`Bitmap is a type of digital image, also called raster. 
   It is the image type typically associated with digital photos.
   There are several bitmap file types including JPEG, PNG, TIF, 
   and others.`)

Message(`The above illustration represents an image that is ${hoRatio} 
pixels wide by ${verRatio} pixels high.  Meaning that the image 
has ${hoRatio * verRatio} pixels. `)

C(x)



// let blueLImit = b.splice(50, 190);
// console.log(b);

Message(`  Originally bitmap images had 
  one bit per pixel for the color, hence the name "BITmap"`)
Message(`Now pixels in bitmap images are given 3 BYTES of data (or in some cases 4)
  one byte per color channel in the RGB color system.  In the current
  system the Red, Green, and Blue channel each have a range of ${byteValue} 
  values which totals a range of ${totalColor.toLocaleString()} colors.`)


for (let i = 0; i < hoRatio; i++) {
   for (let j = 0; j < verRatio; j++){
      let alpha = [Math.floor(Math.random() * 30) + 40];
      let beta = [Math.floor(Math.random() * 10) + 5];
      let gamma = [Math.floor(Math.random() * 10) + 5];
      pixel(i * columnWidth, j * rowHeight, r[alpha], g[beta], b[gamma], 1);
   }
  
}

for (let i = 0; i < 16; i++) {
   Speckle()
}
Message(`This presentation on BITMAP is being given to you by ${myName}!!`)