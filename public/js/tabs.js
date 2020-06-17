function toggleTabs() {
  var listJustIn = document.getElementById("list-just-in");
  var listMostRead = document.getElementById("list-most-read");
  var tabJustIn = document.getElementById("tab-just-in");
  var tabMostRead = document.getElementById("tab-most-read");

  if (listJustIn.classList.contains("hidden")) {
    tabJustIn.classList.remove("hidden");
    listJustIn.classList.remove("hidden");
    tabMostRead.classList.add("hidden");
    listMostRead.classList.add("hidden");
  } else if (listMostRead.classList.contains("hidden")) {
    listMostRead.classList.remove("hidden");
    tabMostRead.classList.remove("hidden");
    listJustIn.classList.add("hidden");
    tabJustIn.classList.add("hidden");
  }
}