let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Variables
let cld1X = 250;
let cld2X = 260;
let sunR = 255;
let sunG = 0;
let frameCount = 0;
let sunY = 250;
let sunS = 20;
requestAnimationFrame(loop);
function loop() {
  frameCount++;

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 600, 250);

  let htmlImg = document.getElementById("html-logo");
  ctx.drawImage(htmlImg, cld1X, 100, 100, 60);
  ctx.drawImage(htmlImg, cld2X, 110, 100, 60);

  ctx.fillStyle = `rgb(${sunR}, ${sunG}, 0)`;
  ctx.beginPath();
  ctx.arc(300, sunY, sunS, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.fillRect(0, 250, 600, 400);

  console.log(frameCount);
  if (frameCount < 1000) {
    cld1X += 1;
    cld2X -= 1;
    sunY -= 1;
    sunS += 0.1;
    sunG++;
  }

  requestAnimationFrame(loop);
}
