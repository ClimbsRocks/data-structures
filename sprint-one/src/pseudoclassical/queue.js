var Queue = function() {

  this.storage = {};
  this.minCounter = 0;
  this.maxCounter = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.maxCounter] = value;
  this.maxCounter++;
}

Queue.prototype.dequeue = function(){
  if(this.maxCounter > this.minCounter){
    var tempVal = this.storage[this.minCounter];
    delete this.storage[this.minCounter];
    this.minCounter++;
    return tempVal;
  }
}

Queue.prototype.size = function(){
  return this.maxCounter - this.minCounter;
}

