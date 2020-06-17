function toggleTabs() {
  var listJustIn = document.getElementById("list-just-in");
  var listMostRead = document.getElementById("list-most-read");
  var tabs = document.getElementById("tabs");

  if (listJustIn.classList.contains("hidden")) {

    // hide most-read
    listMostRead.classList.add("hidden");
    tabs.children[0].classList.add("text-fdwhite", "bg-fdblue", "shadow-inner");

    // show just-in
    listJustIn.classList.remove("hidden");
    tabs.children[1].classList.remove("text-fdwhite", "bg-fdblue", "shadow-inner");

  } else if (listMostRead.classList.contains("hidden")) {
    // show most-read    
    listMostRead.classList.remove("hidden");
    tabs.children[0].classList.remove("text-fdwhite", "bg-fdblue", "shadow-inner");

    // hide just-in
    listJustIn.classList.add("hidden");
    tabs.children[1].classList.add("text-fdwhite", "bg-fdblue", "shadow-inner");

  }
}