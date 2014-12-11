var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new styl

  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;

  someInstance.pop = stackMethods.pop;
  someInstance.push = stackMethods.push;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};

stackMethods.pop = function() {
  if(this.counter > 0){
    this.counter--;
    var tempVal = this.storage[this.counter];
    delete this.storage[this.counter];
    return tempVal;
  }
};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.size = function(){
  return this.counter;
};

var instanceA = Stack();

instanceA.push('hi there!');
