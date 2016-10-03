var speed1 = null;
var site1 = null;
var speed2 = null;
var site2 = null;

function setSpeed1(speed1) {
  this.speed1 = speed1;
  loadVideo1(this.speed1, this.site1);
}

function getSpeed1() {
  console.log(speed1);
  return speed1;
}

function setSite1(site) {
  this.site1 = site;
  loadVideo1(this.speed1, this.site1);
}

function getSite1() {
  return site1;
}

function setSpeed2(speed) {
  this.speed2 = speed;
  loadVideo2(this.speed2, this.site2);
}

function getSpeed2() {
  return speed2;
}

function setSite2(site) {
  this.site2 = site;
  loadVideo2(this.speed2, this.site2);
}

function getSite2() {
  return site2;
}

function loadVideo1(arg1, arg2) {
  if(arg1===null && arg2!==null) {
    document.getElementById("status1").innerHTML = "Speed har inget värde";
  }
  else if (arg1 !==null && arg2===null) {
    document.getElementById("status1").innerHTML = "Site har inget värde";
  }
  else if (arg1===null || arg2===null) {
    document.getElementById("status1").innerHTML = "Inga värden laddade";
  }
  else {
    document.getElementById("status1").innerHTML = site1 + " throttled to " + speed1 + " kb/s.";
    document.getElementById("source1").setAttribute("src", "video/" + speed1 + "_" + site1 + "_done.mp4");
    var video1 = document.getElementById("video1");
    video1.load();
  }
}
function loadVideo2(arg1, arg2) {
  if(arg1===null && arg2!==null) {
    document.getElementById("status2").innerHTML = "Speed har inget värde";
  }
  else if (arg1 !==null && arg2===null) {
    document.getElementById("status2").innerHTML = "Site har inget värde";
  }
  else if (arg1===null || arg2===null) {
    document.getElementById("status2").innerHTML = "Inga värden laddade";
  }
  else {
    document.getElementById("status2").innerHTML = site2 + " throttled to " + speed2 + " kb/s.";
    document.getElementById("source2").setAttribute("src", "video/" + speed2 + "_" + site2 + "_done.mp4");
    var video2 = document.getElementById("video2");
    video2.load();
  }
}

function playBoth() {
  video1.play();
  video2.play();
}

function stopBoth() {
  video1.pause();
  video2.pause();
}

function playBack() {
  video1.currentTime = 0;
  video2.currentTime = 0;
}

function fastForward() {
  var newTime = video1.currentTime+5;
  video1.currentTime = newTime;
  video2.currentTime = newTime;
}
