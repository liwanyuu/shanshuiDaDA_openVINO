size(2880, 576);
background(255);

PImage [] d = new PImage[10];
PImage [] r = new PImage[10];

for (int i = 0; i < 10; i++) {
  d[i] = loadImage("d" + i + ".jpg");
  r[i] = loadImage("r" + i + ".jpg");
}

for (int i = 0; i < 10; i++) {
  image(d[i], i*288, 0, 288, 288);
  image(r[i], i*288, 288);

  //image(d[i+5], i*288, 576, 288, 288);
  //image(r[i+5], i*288, 864);
}

saveFrame("result-1.jpg");
