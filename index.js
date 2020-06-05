var articleImages = document.getElementsByClassName("article-image");
var firstArticleImage = articleImages[0];

for (var i = 0; i < articleImages.length; i++) {
  articleImages[i].style.height = firstArticleImage.width;
}