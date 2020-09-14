var wall, thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600, 400);
  speed=random(7,15);
  weight=random(30,52);
  thickness=random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  bullet = createSprite(200,200,20,10);
  bullet.velocityX = speed;
}

function draw() {
  background(255, 255, 0);
  drawSprites();
  if (bullet.isTouching(wall)) {
    deformation = 0.5*weight*speed*speed/(thickness* thickness* thickness)
    if (deformation > 0.0015) {
      wall.shapeColor = "green"
    }
    if (deformation <0.0015) {
      wall.shapeColor = "red"
    }
   bullet.collide(wall);
  }
}









