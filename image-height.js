imageElements = document.getElementsByClassName("image-height");
contentElements = document.getElementsByClassName("content-height");

for (var i = 0; i < imageElements.length; i++) {
  var image = imageElements[i];
  console.log(image);

  var imageParent = image.parentElement;
  console.log(imageParent);

  var content = contentElements[i];
  console.log(content);

  console.log("---------------------------------------")

  var fullWidth = imageParent.offsetWidth;
  console.log(fullWidth);

  // var fullHeight = imageParent.offsetHeight;
  // console.log(fullHeight);

  var contentHeight = content.offsetHeight;
  console.log(contentHeight);

  // var newImageHeight = fullHeight - contentHeight;
  var newImageHeight = fullWidth - contentHeight;
  console.log(newImageHeight);

  image.style.height = newImageHeight;
  // image.offsetHeight = newImageHeight;
}
