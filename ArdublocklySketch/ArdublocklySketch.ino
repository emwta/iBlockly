// Ardublockly generated sketch
#include<popx2.h>

int SpeedForward;
int SpeedBackward;

void setup() {
}

void loop() {
  for (SpeedForward = 1; SpeedForward <= 100; SpeedForward++) {
    fd(SpeedForward);
    glcd(0,0,"SpeedFD = %d    ",SpeedForward);
  }
  delay(2000);
  for (SpeedBackward = 1; SpeedBackward <= 100; SpeedBackward++) {
    bk(SpeedBackward);
    glcd(1,0,"SpeedBK = %d     ",SpeedBackward);
  }
  delay(2000);

}