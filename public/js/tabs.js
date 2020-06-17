var listMostRead = document.getElementById("list-most-read");
var listJustIn = document.getElementById("list-just-in");
var tabMostRead = document.getElementById("tab-most-read");
var tabJustIn = document.getElementById("tab-just-in");

function toggleTabs() {

  if (listJustIn.classList.contains("hidden")) {

    // hide most-read
    listMostRead.classList.add("hidden");
    tabMostRead.classList.add("text-fdwhite", "bg-fdblue", "shadow-inner");

    // show just-in
    listJustIn.classList.remove("hidden");
    tabJustIn.classList.remove("text-fdwhite", "bg-fdblue", "shadow-inner");

  } else if (listMostRead.classList.contains("hidden")) {
    // show most-read    
    listMostRead.classList.remove("hidden");
    tabMostRead.classList.remove("text-fdwhite", "bg-fdblue", "shadow-inner");

    // hide just-in
    listJustIn.classList.add("hidden");
    tabJustIn.classList.add("text-fdwhite", "bg-fdblue", "shadow-inner");

  }
}