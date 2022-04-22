let ctx = canvas.getContext('2d');

let img = new Image();
img.onload = draw;
img.src = 'https://img3.reoveme.com/i/a4885c40147333b6-1024x684.jpg';

function draw() {
  canvas.width = img.width / 2;
  canvas.height = img.height / 2;
  ctx.filter = 'blur(4px)';
  ctx.drawImage(img, 0,0, canvas.width, canvas.height); 
}