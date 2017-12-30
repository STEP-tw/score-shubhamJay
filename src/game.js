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

  return this.snake=new Snake(head,body);
};

Game.prototype.createFood = function () {
  return this.food = generateRandomPosition(this.xMax,this.yMax);
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
