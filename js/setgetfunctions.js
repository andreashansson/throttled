var speed1 = null;
var site1 = null;
var title1 = null;
var speed2 = null;
var site2 = null;
var title2 = null;
var time1 = null;
var time2 = null;

function setSpeed(id, speed) {
  if (id===1) {
    this.speed1 = speed;
  }
  else if (id===2) {
    this.speed2 = speed;
  }
}

function setSite(id, site) {
  if (id===1) {
    this.site1 = site;
  }
  else if (id===2) {
    this.site2 = site;
  }
}

function setTime(id, time) {
  if (id===1) {
    this.time1 = time;
  }
  else if (id===2) {
    this.time2 = time;
  }
}

function setTitle(id, title) {
  if (id===1) {
    this.title1 = title;
  }
  else if (id===2) {
    this.title2 = title;
  }
}

function getTitle(id) {
  if (id===1) {
    return title1;
  }
  else if (id===2) {
    return title2;
  }
}

function getSite(id) {
  if (id===1) {
    return site1;
    }
  else if (id===2) {
    return site2;
  }
}

function getSpeed(id) {
  if (id===1) {
    return speed1;
    }
  else if (id===2) {
    return speed2;
  }
}

function getTime(id) {
  if (id===1) {
    return time1;
  }
  else if (id===2) {
    return time2;
  }
}
function resetTime(id) {
  if (id===1) {
    this.time1 = "";
  }
  else if (id===2) {
    this.time2 = "";
  }
}
