var coll = document.getElementsByClassName("bing_collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var bing_content = this.nextElementSibling;
    if (bing_content.style.display === "block") {
      bing_content.style.display = "none";
    } else {
      bing_content.style.display = "block";
    }
  });
}

function hideTAR1() {
  document.getElementById("Target1").style.display = "none";
}

function showTAR1() {
  document.getElementById("Target1").style.display = "block";
}