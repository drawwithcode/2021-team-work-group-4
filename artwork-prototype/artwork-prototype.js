// noise (arbitrary)
const octaves = 16;
const falloff = 0.625;

// texture control (6, 9, 12) based on the length of the strings inside the text areas
// let subd = 6;
//let subd = 9;
let subd = 12;

function setup() {
  // createCanvas(250, 250).parent("container");
  createCanvas(500, 500).parent("container");
  // createCanvas(750, 750).parent("container");
  frameRate(1);
  rectMode(CENTER);
  noStroke();

  test = new generativeArtwork(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  );
}

function draw() {
  background(255);
  test.display();
}

class generativeArtwork {
  // parameters to build the image
  constructor(
    identity1,
    identity2,
    identity3,
    relationships1,
    relationships2,
    relationships3,
    violence1,
    violence2,
    violence3,
    sexuality1,
    sexuality2,
    sexuality3,
    beliefs1,
    beliefs2,
    beliefs3
  ) {
    this.identity1 = identity1;
    this.identity2 = identity2;
    this.identity3 = identity3;
    this.relationships1 = relationships1;
    this.relationships2 = relationships2;
    this.relationships3 = relationships3;
    this.violence1 = violence1;
    this.violence2 = violence2;
    this.violence3 = violence3;
    this.sexuality1 = sexuality1;
    this.sexuality2 = sexuality2;
    this.sexuality3 = sexuality3;
    this.beliefs1 = beliefs1;
    this.beliefs2 = beliefs2;
    this.beliefs3 = beliefs3;
  }

  // show the defined image
  // to do: color switch based on the yes/no answer
  // temporary code: needs to be generalised and not hard coded
  display() {
    noiseDetail(octaves, falloff);
    for (var x = 0 + width / subd / 2; x < width; x += width / subd) {
      for (var y = 0 + height / subd / 2; y < height; y += width / subd) {
        push();
        let noiseColor = noise(x * frameCount, y * frameCount);
        if (noiseColor > 0 && noiseColor < 0.2) {
          fill("#FE0000");
          rect(x, y, width / subd, height / subd);
        } else if (noiseColor > 0.2 && noiseColor < 0.4) {
          fill("#B44EF2");
          rect(x, y, width / subd, height / subd);
        } else if (noiseColor > 0.4 && noiseColor < 0.6) {
          fill("#FF1493");
          rect(x, y, width / subd, height / subd);
        } else if (noiseColor > 0.6 && noiseColor < 0.8) {
          fill("#1D64FF");
          rect(x, y, width / subd, height / subd);
        } else if (noiseColor > 0.8 && noiseColor < 1) {
          fill("#ABFF38");
          rect(x, y, width / subd, height / subd);
        }
      }
    }

    // filter based on the median value of the sliders, rounded (0, 25, 50, 75, 100)
    //filter(BLUR, 0);
    // filter(BLUR, 25);
    //filter(BLUR, 50);
    // filter(BLUR, 75);
    filter(BLUR, 100);
  }
}
