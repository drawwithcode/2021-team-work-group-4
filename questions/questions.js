// DOM
let intViewportWidth = window.innerWidth;
let intViewportHeight = window.innerHeight;
let introAlert1 = document.getElementById("intro-alert-1");
let introAlert2 = document.getElementById("intro-alert-2");
let introAlert3 = document.getElementById("intro-alert-3");
let intro = document.getElementById("intro");
let introContent = document.getElementById("intro-content");
let questions = document.getElementById("questions");
let identity = document.getElementById("identity");
let I1 = document.getElementById("I1");
let I2 = document.getElementById("I2");
let I3 = document.getElementById("I3");
let I4 = document.getElementById("I4");
let I5 = document.getElementById("I5");
let relationships = document.getElementById("relationships");
let R1 = document.getElementById("R1");
let R2 = document.getElementById("R2");
let R3 = document.getElementById("R3");
let R4 = document.getElementById("R4");
let R5 = document.getElementById("R5");
let violence = document.getElementById("violence");
let V1 = document.getElementById("V1");
let V2 = document.getElementById("V2");
let V3 = document.getElementById("V3");
let V4 = document.getElementById("V4");
let V5 = document.getElementById("V5");
let sexuality = document.getElementById("sexuality");
let S1 = document.getElementById("S1");
let S2 = document.getElementById("S2");
let S3 = document.getElementById("S3");
let S4 = document.getElementById("S4");
let S5 = document.getElementById("S5");
let beliefs = document.getElementById("beliefs");
let B1 = document.getElementById("B1");
let B2 = document.getElementById("B2");
let B3 = document.getElementById("B3");
let B4 = document.getElementById("B4");
let B5 = document.getElementById("B5");
let B6 = document.getElementById("B6");
let loading = document.getElementById("loading");
let loadingContent = document.getElementById("loading-content");
let artwork = document.getElementById("artwork");
let artworkContent = document.getElementById("artwork-content");
let artworkSnapshot = document.getElementById("artwork-snapshot");

// artwork parameters
let identity1;
let identity2;
let identity3;
let identityTime = 5;
let relationships1;
let relationships2;
let relationships3;
let relationshipsTime = 5;
let violence1;
let violence2;
let violence3;
let violenceTime = 5;
let sexuality1;
let sexuality2;
let sexuality3;
let sexualityTime = 5;
let beliefs1;
let beliefs2;
let beliefs3;
let beliefsTime = 5;

// time
let startTime;
let elapsedTime;

// a dice is rolled in order to show just one question for each type
let dice = 0;

// artwork object to render inside the buffer (a p5 canvas)
let generatedArtwork;

// loading transition control
let artworkIsLoading = false;

// questionnaire progression (hard coded)
function nextSection(sectionNumber) {
  switch (sectionNumber) {
    case "A":
      introAlert1.className = "container hide";
      setTimeout(() => {
        introAlert2.className = "container show";
      }, 750);
      break;
    case "B":
      introAlert2.className = "container hide";
      setTimeout(() => {
        introAlert3.className = "container show";
      }, 750);
      break;
    case "C":
      introAlert3.className = "container hide";
      setTimeout(() => {
        introContent.className = "container show";
      }, 750);
      break;
    case "1":
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        intro.className = "section hide";
        introContent.className = "container hide";
        setTimeout(() => {
          questions.className = "section show";
          identity.className = "section show";
          I1.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else if (dice === 2) {
        intro.className = "section hide";
        introContent.className = "container hide";
        setTimeout(() => {
          questions.className = "section show";
          identity.className = "section show";
          I2.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else {
        intro.className = "section hide";
        introContent.className = "container hide";
        setTimeout(() => {
          questions.className = "section show";
          identity.className = "section show";
          I3.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      }
    case "2":
      if (dice === 1) {
        if (document.querySelector('input[name="I1-group"]:checked') == null) {
          break;
        } else {
          identity1 = document.querySelector(
            'input[name="I1-group"]:checked'
          ).value;
        }
      } else if (dice === 2) {
        if (document.querySelector('input[name="I2-group"]:checked') == null) {
          break;
        } else {
          identity1 = document.querySelector(
            'input[name="I2-group"]:checked'
          ).value;
        }
      } else {
        if (document.querySelector('input[name="I3-group"]:checked') == null) {
          break;
        } else {
          identity1 = document.querySelector(
            'input[name="I3-group"]:checked'
          ).value;
        }
      }
      I1.className = "container hide";
      I2.className = "container hide";
      I3.className = "container hide";
      setTimeout(() => {
        I4.className = "container show";
      }, 750);
      break;
    case "3":
      identity2 = document.getElementById("I4-range").value;
      I4.className = "container hide";
      setTimeout(() => {
        I5.className = "container show";
      }, 750);
      break;
    case "4":
      if (!document.getElementById("I5-text").value.trim()) {
        break;
      } else {
        identity3 = document.getElementById("I5-text").value;
      }
      elapsedTime = Date.now() - startTime;
      identityTime = elapsedTime;
      dice = getRandomInt(1, 2);
      if (dice === 1) {
        I5.className = "container hide";
        identity.className = "section hide";
        setTimeout(() => {
          relationships.className = "section show";
          R1.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else {
        I5.className = "container hide";
        identity.className = "section hide";
        setTimeout(() => {
          relationships.className = "section show";
          R2.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      }
    case "5":
      if (dice === 1) {
        if (document.querySelector('input[name="R1-group"]:checked') == null) {
          break;
        } else {
          relationships1 = document.querySelector(
            'input[name="R1-group"]:checked'
          ).value;
        }
      } else {
        if (document.querySelector('input[name="R2-group"]:checked') == null) {
          break;
        } else {
          relationships1 = document.querySelector(
            'input[name="R2-group"]:checked'
          ).value;
        }
      }
      R1.className = "container hide";
      R2.className = "container hide";
      setTimeout(() => {
        R3.className = "container show";
      }, 750);
      break;
    case "6":
      relationships2 = document.getElementById("R3-range").value;
      dice = getRandomInt(1, 2);
      if (dice === 1) {
        R3.className = "container hide";
        setTimeout(() => {
          R4.className = "container show";
        }, 750);
        break;
      } else {
        R3.className = "container hide";
        setTimeout(() => {
          R5.className = "container show";
        }, 750);
        break;
      }
    case "7":
      if (dice === 1) {
        if (!document.getElementById("R4-text").value.trim()) {
          break;
        } else {
          relationships3 = document.getElementById("R4-text").value;
        }
      } else {
        if (!document.getElementById("R5-text").value.trim()) {
          break;
        } else {
          relationships3 = document.getElementById("R5-text").value;
        }
      }
      elapsedTime = Date.now() - startTime;
      relationshipsTime = elapsedTime;
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        R4.className = "container hide";
        R5.className = "container hide";
        relationships.className = "section hide";
        setTimeout(() => {
          violence.className = "section show";
          V1.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else if (dice === 2) {
        R5.className = "container hide";
        relationships.className = "section hide";
        setTimeout(() => {
          violence.className = "section show";
          V2.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else {
        R5.className = "container hide";
        relationships.className = "section hide";
        setTimeout(() => {
          violence.className = "section show";
          V3.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      }
    case "8":
      if (dice === 1) {
        if (document.querySelector('input[name="V1-group"]:checked') == null) {
          break;
        } else {
          violence1 = document.querySelector(
            'input[name="V1-group"]:checked'
          ).value;
        }
      } else if (dice === 2) {
        if (document.querySelector('input[name="V2-group"]:checked') == null) {
          break;
        } else {
          violence1 = document.querySelector(
            'input[name="V2-group"]:checked'
          ).value;
        }
      } else {
        if (document.querySelector('input[name="V3-group"]:checked') == null) {
          break;
        } else {
          violence1 = document.querySelector(
            'input[name="V3-group"]:checked'
          ).value;
        }
      }
      V1.className = "container hide";
      V2.className = "container hide";
      V3.className = "container hide";
      setTimeout(() => {
        V4.className = "container show";
      }, 750);
      break;
    case "9":
      violence2 = document.getElementById("V4-range").value;
      V4.className = "container hide";
      setTimeout(() => {
        V5.className = "container show";
      }, 750);
      break;
    case "10":
      if (!document.getElementById("V5-text").value.trim()) {
        break;
      } else {
        violence3 = document.getElementById("V5-text").value;
      }
      elapsedTime = Date.now() - startTime;
      violenceTime = elapsedTime;
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        V5.className = "container hide";
        violence.className = "section hide";
        setTimeout(() => {
          sexuality.className = "section show";
          S1.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else if (dice === 2) {
        V5.className = "container hide";
        violence.className = "section hide";
        setTimeout(() => {
          sexuality.className = "section show";
          S2.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else {
        V5.className = "container hide";
        violence.className = "section hide";
        setTimeout(() => {
          sexuality.className = "section show";
          S3.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      }
    case "11":
      if (dice === 1) {
        if (document.querySelector('input[name="S1-group"]:checked') == null) {
          break;
        } else {
          sexuality1 = document.querySelector(
            'input[name="S1-group"]:checked'
          ).value;
        }
      } else if (dice === 2) {
        if (document.querySelector('input[name="S2-group"]:checked') == null) {
          break;
        } else {
          sexuality1 = document.querySelector(
            'input[name="S2-group"]:checked'
          ).value;
        }
      } else {
        if (document.querySelector('input[name="S3-group"]:checked') == null) {
          break;
        } else {
          sexuality1 = document.querySelector(
            'input[name="S3-group"]:checked'
          ).value;
        }
      }
      S1.className = "container hide";
      S2.className = "container hide";
      S3.className = "container hide";
      setTimeout(() => {
        S4.className = "container show";
      }, 750);
      break;
    case "12":
      sexuality2 = document.getElementById("S4-range").value;
      S4.className = "container hide";
      setTimeout(() => {
        S5.className = "container show";
      }, 750);
      break;
    case "13":
      if (!document.getElementById("S5-text").value.trim()) {
        break;
      } else {
        sexuality3 = document.getElementById("S5-text").value;
      }
      elapsedTime = Date.now() - startTime;
      sexualityTime = elapsedTime;
      dice = getRandomInt(1, 2);
      if (dice === 1) {
        S5.className = "container hide";
        sexuality.className = "section hide";
        setTimeout(() => {
          beliefs.className = "section show";
          B1.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      } else {
        S5.className = "container hide";
        sexuality.className = "section hide";
        setTimeout(() => {
          beliefs.className = "section show";
          B2.className = "container show";
          startTime = Date.now();
        }, 750);
        break;
      }
    case "14":
      if (dice === 1) {
        if (document.querySelector('input[name="B1-group"]:checked') == null) {
          break;
        } else {
          beliefs1 = document.querySelector(
            'input[name="B1-group"]:checked'
          ).value;
        }
      } else {
        if (document.querySelector('input[name="B2-group"]:checked') == null) {
          break;
        } else {
          beliefs1 = document.querySelector(
            'input[name="B2-group"]:checked'
          ).value;
        }
      }
      B1.className = "container hide";
      B2.className = "container hide";
      setTimeout(() => {
        B3.className = "container show";
      }, 750);
      break;
    case "15":
      beliefs2 = document.getElementById("B3-range").value;
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        B3.className = "container hide";
        setTimeout(() => {
          B4.className = "container show";
        }, 750);
        break;
      } else if (dice === 2) {
        B3.className = "container hide";
        setTimeout(() => {
          B5.className = "container show";
        }, 750);
        break;
      } else {
        B3.className = "container hide";
        setTimeout(() => {
          B6.className = "container show";
        }, 750);
        break;
      }
    case "16":
      if (dice === 1) {
        if (!document.getElementById("B4-text").value.trim()) {
          break;
        } else {
          beliefs3 = document.getElementById("B4-text").value;
        }
      } else if (dice === 2) {
        if (!document.getElementById("B5-text").value.trim()) {
          break;
        } else {
          beliefs3 = document.getElementById("B5-text").value;
        }
      } else {
        if (!document.getElementById("B6-text").value.trim()) {
          break;
        } else {
          beliefs3 = document.getElementById("B6-text").value;
        }
      }
      elapsedTime = Date.now() - startTime;
      beliefsTime = elapsedTime;
      B4.className = "container hide";
      B5.className = "container hide";
      B6.className = "container hide";
      beliefs.className = "section hide";
      setTimeout(() => {
        loading.className = "section show";
        loadingContent.className = "container show";
        generatedArtwork = new generativeArtwork(
          identity2,
          identity3,
          identityTime,
          relationships1,
          relationships2,
          relationships3,
          relationshipsTime,
          violence1,
          violence2,
          violence3,
          violenceTime,
          sexuality1,
          sexuality2,
          sexuality3,
          sexualityTime,
          beliefs1,
          beliefs2,
          beliefs3,
          beliefsTime
        );
        setTimeout(() => {
          artworkIsLoading = true;
        }, 750);
      }, 750);
      break;
    default:
      console.log("nope");
  }
}

// generate a random integer from range, inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
  createCanvas(540, 540).parent("artwork-buffer");
  pixelDensity(1);
  rectMode(CENTER);
  noStroke();
  background(255);
}

function draw() {
  if (artworkIsLoading) {
    generatedArtwork.display();
    noLoop();
    artworkSnapshot.src = canvas.toDataURL();
    setTimeout(() => {
      loadingContent.className = "container hide";
      loading.className = "section hide";
      setTimeout(() => {
        artwork.className = "section show";
        artworkContent.className = "container show";
      }, 750);
    }, 750);
  }
}

function saveArtwork() {
  let date = new Date();
  let currentDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "-" +
    date.getHours() +
    "-" +
    date.getMinutes() +
    "-" +
    date.getSeconds();
  saveCanvas("my metanoise_" + currentDate, "png");
}

function upload() {
  addArtwork(artworkSnapshot.src);
  setTimeout(() => {
    window.open("../archive/archive.html", "_self");
  }, 750);
}

// todo: finalise background animation
// let sketch = function (sketch) {
//   sketch.setup = function () {
//     sketch
//       .createCanvas(intViewportWidth, intViewportHeight)
//       .parent("background-content");
//     sketch.rectMode(sketch.CENTER);
//     sketch.fill("#abff38");
//     sketch.strokeWeight(1);
//     sketch.stroke("#abff38");
//   };

//   sketch.draw = function () {
//     sketch.background("#232628");
//     sketch.rect(
//       intViewportWidth / 2,
//       intViewportHeight / 2,
//       intViewportWidth,
//       intViewportHeight * sketch.sin(sketch.frameCount / 500)
//     );
//   };

//   sketch.windowResized = function () {
//     intViewportWidth = window.innerWidth;
//     intViewportHeight = window.innerHeight;
//     sketch.resizeCanvas(intViewportWidth, intViewportHeight);
//   };
// };

// let backgroundSketch = new p5(sketch);
