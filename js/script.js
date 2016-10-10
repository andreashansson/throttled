var speed1 = null;
var site1 = null;
var speed2 = null;
var site2 = null;
var time1 = null;
var time2 = null;
var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");

function setSpeed1(speed1) {
  this.speed1 = speed1;
  loadVideo1(this.speed1, this.site1);
}

function getSpeed1() {
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

function setTime1(time) {
  this.time1 = time;
}

function getTime1() {
  return time1;
}

function setTime2(time) {
  this.time2 = time;
}

function getTime2() {
  return time2;
}

function resetTime1() {
  this.time1 = null;
}

function resetTime2() {
  this.time2 = null;
}

document.getElementById("bad1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSpeed1(site.speed.bad);
  loadVideo1(speed1, site1);
}

document.getElementById("not_bad1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSpeed1(site.speed.not_bad);
  loadVideo1(speed1, site1);
}

document.getElementById("good1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSpeed1(site.speed.good);
  loadVideo1(speed1, site1);
}

document.getElementById("very_good1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSpeed1(site.speed.very_good);
  loadVideo1(speed1, site1);
}

document.getElementById("google1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSite1(site.google.name);
  loadVideo1(speed1, site1)
}

document.getElementById("microsoft1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSite1(site.microsoft.name);
  loadVideo1(speed1, site1)
}

document.getElementById("nyt1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSite1(site.nyt.name);
  loadVideo1(speed1, site1)
}

document.getElementById("vimeo1").onclick = function() {
  document.getElementById("timeInfo1").innerHTML = "";
  setSite1(site.vimeo.name);
  loadVideo1(speed1, site1)
}

document.getElementById("bad2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSpeed2(site.speed.bad);
  loadVideo2(speed2, site2);
}

document.getElementById("not_bad2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSpeed2(site.speed.not_bad);
  loadVideo2(speed2, site2);
}

document.getElementById("good2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSpeed2(site.speed.good);
  loadVideo2(speed2, site2);
}

document.getElementById("very_good2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSpeed2(site.speed.very_good);
  loadVideo2(speed2, site2);
}

document.getElementById("google2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSite2(site.google.name);
  loadVideo2(speed2, site2)
}

document.getElementById("microsoft2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSite2(site.microsoft.name);
  loadVideo2(speed2, site2)
}

document.getElementById("nyt2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSite2(site.nyt.name);
  loadVideo2(speed1, site1)
}

document.getElementById("vimeo2").onclick = function() {
  document.getElementById("timeInfo2").innerHTML = "";
  setSite2(site.vimeo.name);
  loadVideo2(speed2, site2)
}

function loadVideo1(arg1, arg2) {
  if(arg1===null && arg2!==null) {
    document.getElementById("status1").innerHTML = "In which speed do you want to throttle this site?";
  }
  else if (arg1 !==null && arg2===null) {
    document.getElementById("status1").innerHTML = "Which site do you want to throttle?";
  }
  else if (arg1===null || arg2===null) {
    document.getElementById("status1").innerHTML = "Choose site and speed.";
  }
  else {
    document.getElementById("status1").innerHTML = site1 + " throttled to " + speed1 + " kb/s.";
    document.getElementById("source1").setAttribute("src", "video/unedited/" + speed1 + "_" + site1 + ".mp4");
    video1.load();
    loadInfo1();
    video1.onended = function(e) {
      document.getElementById("status1").innerHTML = getTime();
    }

    if (arg1==="160" && arg2==="google") {
      setTime1(site.google.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="google") {
      setTime1(site.google.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="google") {
      setTime1(site.google.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="google") {
      setTime1(site.google.loadTime.very_good);
    }
    else if (arg1==="160" && arg2==="microsoft") {
      setTime1(site.microsoft.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="microsoft") {
      setTime1(site.microsoft.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="microsoft") {
      setTime1(site.microsoft.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="microsoft") {
      setTime1(site.microsoft.loadTime.very_good);
    }
    else if (arg1==="160" && arg2==="newyorktimes") {
      setTime1(site.nyt.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="newyorktimes") {
      setTime1(site.nyt.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="newyorktimes") {
      setTime1(site.nyt.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="newyorktimes") {
      setTime1(site.nyt.loadTime.very_good);
    }
    else if (arg1==="160" && arg2==="vimeo") {
      setTime1(site.vimeo.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="vimeo") {
      setTime1(site.vimeo.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="vimeo") {
      setTime1(site.vimeo.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="vimeo") {
      setTime1(site.vimeo.loadTime.very_good);
    }
  }
}

function loadVideo2(arg1, arg2) {
  if(arg1===null && arg2!==null) {
    document.getElementById("status2").innerHTML = "In which speed do you want to see " + arg2 + " load?";
  }
  else if (arg1 !==null && arg2===null) {
    document.getElementById("status2").innerHTML = arg1 + " kb/s choosen. Which site do you want to throttle?";
  }
  else if (arg1===null || arg2===null) {
    document.getElementById("status2").innerHTML = "Choose site and speed.";
  }
  else {
    document.getElementById("status2").innerHTML = site2 + " throttled to " + speed2 + " kb/s.";
    document.getElementById("source2").setAttribute("src", "video/unedited/" + speed2 + "_" + site2 + ".mp4");
    video2.load();
    loadInfo2();

    if (arg1==="160" && arg2==="google") {
      setTime2(site.google.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="google") {
      setTime2(site.google.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="google") {
      setTime2(site.google.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="google") {
      setTime2(site.google.loadTime.very_good);
    }
    else if (arg1==="160" && arg2==="microsoft") {
      setTime2(site.microsoft.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="microsoft") {
      setTime2(site.microsoft.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="microsoft") {
      setTime2(site.microsoft.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="microsoft") {
      setTime2(site.microsoft.loadTime.very_good);
    }
    else if (arg1==="160" && arg2==="newyorktimes") {
      setTime2(site.nyt.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="newyorktimes") {
      setTime2(site.nyt.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="newyorktimes") {
      setTime2(site.nyt.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="newyorktimes") {
      setTime2(site.nyt.loadTime.very_good);
    }
    else if (arg1==="160" && arg2==="vimeo") {
      setTime2(site.vimeo.loadTime.bad);
    }
    else if (arg1==="256" && arg2==="vimeo") {
      setTime2(site.vimeo.loadTime.not_bad);
    }
    else if (arg1==="512" && arg2==="vimeo") {
      setTime2(site.vimeo.loadTime.good);
    }
    else if (arg1==="1000" && arg2==="vimeo") {
      setTime2(site.vimeo.loadTime.very_good);
    }
  }
}

function playBoth() {
  video1.play();
  video2.play();

  video1.onended = function(e) {
    document.getElementById("timeInfo1").innerHTML = getTime1();
  }

  video2.onended = function(e) {
    document.getElementById("timeInfo2").innerHTML = getTime2();
  }
}

function stopBoth() {
  video1.pause();
  video2.pause();
}

function playBack() {
  stopBoth();
  video1.currentTime = 0;
  video2.currentTime = 0;
}

function fastForward() {
  var newTime1 = video1.currentTime+5;
  var newTime2 = video2.currentTime+5;
  video1.currentTime = newTime1;
  video2.currentTime = newTime2;
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

function loadInfo1() {
  document.getElementById("time1").innerHTML = getTime1();
  document.getElementById("site1").innerHTML = getSite1();
  document.getElementById("speed1").innerHTML = getSpeed1() + " kb/s";
}

function loadInfo2() {
  document.getElementById("time2").innerHTML = getTime2();
  document.getElementById("site2").innerHTML = getSite2();
  document.getElementById("speed2").innerHTML = getSpeed2() + " kb/s";
}
