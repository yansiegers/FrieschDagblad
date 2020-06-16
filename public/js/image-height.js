imageElements = document.getElementsByClassName("image-height");
contentElements = document.getElementsByClassName("content-height");

for (var i = 0; i < imageElements.length; i++) {
  var image = imageElements[i];
  var imageParent = image.parentElement;
  var content = contentElements[i];

  var fullWidth = imageParent.offsetWidth;
  var contentHeight = content.offsetHeight;
  var newImageHeight = fullWidth - contentHeight;

  image.style.height = newImageHeight;
}
