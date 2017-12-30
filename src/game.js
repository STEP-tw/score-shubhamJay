const Game = function(numberOfRows,numberOfCols){
  this.numberOfRows = numberOfRows;
  this.numberOfCols = numberOfCols;
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

Game.prototype.startGame = function () {
  // this.createSnake
};

Game.prototype.createFood = function () {
  this.food = generateRandomPosition(this.numberOfRows,this.numberOfCols);
  return this.food;
};

Game.prototype.hasSnakeEatenFood = function () {
  let snakeHead = this.snake.getHead();
  return snakeHead.isSameCoordAs(this.food);
};

Game.prototype.increaseScore = function () {
  this.score += this.scorePerFood;
};
