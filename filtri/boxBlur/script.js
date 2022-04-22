let boxBlur = {
  x: 120,
  y: 80,
  height: 200,
  width: 200,
};
let ctx = canvas.getContext('2d');

let img = new Image();
img.onload = draw;
img.src = 'https://img3.reoveme.com/i/a4885c40147333b6-1024x684.jpg';

function draw() {
  canvas.width = img.width / 2;
  canvas.height = img.height / 2;
  ctx.drawImage(img, 0,0, canvas.width, canvas.height); 
  ctx.filter = 'blur(10px)';
  ctx.drawImage(canvas,
    boxBlur.x, boxBlur.y, boxBlur.width, boxBlur.height,
    boxBlur.x, boxBlur.y, boxBlur.width, boxBlur.height
  );
  ctx.filter = 'none';
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  ctx.fillRect(boxBlur.x, boxBlur.y, boxBlur.width, boxBlur.height);
}