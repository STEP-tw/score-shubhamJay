const Game = function(numberOfRows,numberOfCols){
  this.yMax = numberOfRows;
  this.xMax = numberOfCols;
  this.food = {};
  this.snake = {};
  this.score =0;
  this.scorePerFood = 10;
};

Game.prototype.createSnake = function (){
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  this.snake=new Snake(head,body);
  return this.snake;
};

Game.prototype.createFood = function () {
  this.food = generateRandomPosition(this.xMax,this.yMax);
  return this.food;
};

Game.prototype.hasSnakeEatenFood = function () {
  let snakeHead = this.snake.getHead();
  return snakeHead.isSameCoordAs(this.food);
};

Game.prototype.increaseScore = function () {
  this.score += this.scorePerFood;
};

Game.prototype.getCurrentScore = function () {
  return this.score;
};

Game.prototype.actionOnFoodEaten = function () {
  this.snake.grow();
  this.createFood()
  this.increaseScore();
};
