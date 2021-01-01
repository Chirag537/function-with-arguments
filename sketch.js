function setup() {
  createCanvas(800,400);
 gameobject1=createSprite(100,100,50,50)
 gameobject1.shapeColor="black"

 gameobject2=createSprite(200,100,50,50)
 gameobject2.shapeColor="black"

 gameobject3=createSprite(300,100,50,50)
 gameobject3.shapeColor="black"

 gameobject4=createSprite(400,100,50,50)
 gameobject4.shapeColor="black"
 
 
  tree=createSprite(200,300,40,40);
 tree.shapeColor="green"

 car=createSprite(400, 200, 50, 50);
 car.shapeColor="red"

}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.x=mouseX;
  car.y=mouseY;
if(isTouching(car,gameobject1)){



  car.shapeColor="yellow"
  gameobject1.shapeColor="blue"
  }
  else{
  car.shapeColor="red"
  gameobject1.shapeColor="black"
}
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
      return true
    }
    else{
    return false
    } 
}