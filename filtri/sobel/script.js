let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let image = new Image();
image.src = 'anticors.jpg';
image.onload = drawImage;

function drawImage(event) {
  let width = image.width;
  let height = image.height;

  canvas.width = width;
  canvas.height = height;

  context.drawImage(image, 0, 0);
  let imageData = context.getImageData(0, 0, width, height);

  let sobelData = Sobel(imageData);

  let sobelImageData = sobelData.toImageData();
  context.putImageData(sobelImageData, 0, 0);
}