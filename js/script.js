
var speedButton = document.getElementsByClassName("speedButton");
var siteButton = document.getElementsByClassName("siteButton");

for (var i=0; i<speedButton.length; i++) {
  speedButton[i].onclick = function() {
    var id = parseInt(this.getAttribute("data-number"));
    document.getElementById("timeInfo"+id).innerHTML = "";
    setSpeed(id, sites.speed[this.getAttribute("data-name")]);
    loadVideo(id, getSpeed(id), getSite(id), getTitle(id));
    loadInfo(id);
  }
}

for (var i=0; i<siteButton.length; i++) {
  siteButton[i].onclick = function() {
    var id = parseInt(this.getAttribute("data-number"));
    document.getElementById("timeInfo"+id).innerHTML = "";
    setSite(id, this.getAttribute("data-name"));
    setTitle(id, this.innerHTML);
    loadVideo(id, getSpeed(id), getSite(id), getTitle(id));
    loadInfo(id);
  }
}

function loadVideo(id, speed, site, title) {
  if(speed===null && site!==null) {
    document.getElementById("status"+id).innerHTML = "<strong>" + title + "</strong> - Speed: ?";
  }
  else if (speed !==null && site===null) {
    document.getElementById("status"+id).innerHTML = "<strong>" + speed + " kb/s</strong> - Site: ?";
  }
  else if (speed!==null && site!==null) {
    document.getElementById("status"+id).innerHTML = title + " throttled to " + speed + " kb/s.";
    document.getElementById("source"+id).setAttribute("src", "video/unedited/" + speed + "_" + site + ".mp4");
    document.getElementById("video"+id).load();
    setTime(id, sites[site].loadTime[speed]);
  }
}

function playBoth() {
  document.getElementById("timeInfo1").innerHTML = "";
  document.getElementById("timeInfo2").innerHTML = "";
  video1.play();
  video2.play();
  video1.onended = function(e) {
    document.getElementById("timeInfo1").innerHTML = getTime(1);
  }
  video2.onended = function(e) {
    document.getElementById("timeInfo2").innerHTML = getTime(2);
  }
}

function stopBoth() {
  document.getElementById("timeInfo1").innerHTML = "";
  document.getElementById("timeInfo2").innerHTML = "";
  video1.pause();
  video2.pause();
}

function playBack() {
  stopBoth();
  video1.currentTime = 0;
  video2.currentTime = 0;
}

function fastForward() {
  video1.currentTime = video1.currentTime+5;
  video2.currentTime = video2.currentTime+5;
}

function showHideInfo() {
  var infoValue = document.getElementById("info1").style.visibility;
  if (infoValue==="hidden") {
    document.getElementById("info1").style.visibility = "visible";
    document.getElementById("info2").style.visibility = "visible";
  }
  else if (infoValue==="visible") {
    document.getElementById("info1").style.visibility = "hidden";
    document.getElementById("info2").style.visibility = "hidden";
  }
}

function loadInfo(id) {
  if (getTitle(id)!==null && getSpeed(id)===null) {
    document.getElementById("site"+id).innerHTML = getTitle(id);
  }
  else if (getTitle(id)===null && getSpeed(id)!==null) {
    document.getElementById("speed"+id).innerHTML = getSpeed(id) + " kb/s";
  }
  else if (getTitle(id)!==null && getSpeed(id)!==null) {
    document.getElementById("time"+id).innerHTML = getTime(id);
    document.getElementById("site"+id).innerHTML = getTitle(id);
    document.getElementById("speed"+id).innerHTML = getSpeed(id) + " kb/s";
  }
}
