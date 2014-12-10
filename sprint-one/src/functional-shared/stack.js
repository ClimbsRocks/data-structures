var Stack = function() {
  var storage = {};
  var counter = 0;

  this.push = stackMethods.push;
  this.pop = stackMethods.pop;
  this.size = stackMethods.size;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  if(this.counter > 0) {
    this.counter--;
    var returnVal = this.storage[counter];
    delete this.storage[counter];
    return returnVal;
  }
};

stackMethods.size = function() {
  return counter;
}

