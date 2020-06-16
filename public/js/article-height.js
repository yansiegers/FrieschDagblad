var styleElements = document.getElementsByClassName("element-quarter-br");
var sampleStyleElement = styleElements[0];
var blockImages = document.getElementsByClassName("block-image");

for (var i = 0; i < blockImages.length; i++) {
  blockImages[i].style.height = sampleStyleElement.offsetWidth;
}
