var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.minCounter = 0;
  someInstance.maxCounter = 0;

  someInstance.dequeue = queueMethods.dequeue;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.size = queueMethods.size;

  return someInstance;

};

var queueMethods = {};

queueMethods.dequeue = function() {
  if(this.maxCounter > this.minCounter) {
    var tempReturn = this.storage[this.minCounter];
    delete this.storage[this.minCounter];
    this.minCounter++;
    return tempReturn;
  }
}

queueMethods.enqueue = function(value) {
  this.storage[this.maxCounter] = value;
  this.maxCounter++;
}

queueMethods.size = function() {
  return this.maxCounter - this.minCounter;
}



