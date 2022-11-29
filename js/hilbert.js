var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");
const { width, height } = canvas.getBoundingClientRect();

let start = false;
ctx.moveTo(0, 0);
hilbert(5, height / 2, height / 2, height, 1, 1); //generate order 5 hilbert curve

function hilbert(order, centerx, centery, size, reflectyx, reflectynx) {
  if (order == 0) {
    if (!start) {
      ctx.moveTo(centerx, centery);
      start = true;
    }
    ctx.lineTo(centerx, centery);
    ctx.stroke();
  } else {
    hilbert(
      // bottom right, next level will be reflected across y=x
      order - 1,
      centerx + (size / 4) * reflectynx,
      centery + (size / 4) * reflectynx,
      size / 2,
      reflectyx * -1,
      reflectynx
    );
    hilbert(
      // top right
      order - 1,
      centerx + (size / 4) * reflectyx,
      centery - (size / 4) * reflectyx,
      size / 2,
      reflectyx,
      reflectynx
    );
    hilbert(
      // top left
      order - 1,
      centerx - (size / 4) * reflectynx,
      centery - (size / 4) * reflectynx,
      size / 2,
      reflectyx,
      reflectynx
    );
    hilbert(
      // bottom left, next level will be reflected across y=-x
      order - 1,
      centerx - (size / 4) * reflectyx,
      centery + (size / 4) * reflectyx,
      size / 2,
      reflectyx,
      reflectynx * -1
    );
  }
}

canvas.addEventListener(
  "click",
  function () {
    window.open("https://en.wikipedia.org/wiki/Hilbert_curve", "_blank");
  },
  false
);
