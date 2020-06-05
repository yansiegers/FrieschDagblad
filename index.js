var styleElements = document.getElementsByClassName("element-quarter-br");
var sampleStyleElement = styleElements[0];
var articleImages = document.getElementsByClassName("article-image");

for (var i = 0; i < articleImages.length; i++) {
  console.log(articleImages[i].height);
  console.log(sampleStyleElement.style.width);

  articleImages[i].style.height = sampleStyleElement.offsetWidth;
}
