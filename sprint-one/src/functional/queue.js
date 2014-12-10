var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var minCounter = 0;
  var maxCounter = 0;

  someInstance.enqueue = function(value){
    storage[maxCounter] = value;
    maxCounter++;
  };

  someInstance.dequeue = function(){
    if(maxCounter > minCounter) {
      var returnVal = storage[minCounter];
      delete storage[minCounter];
      minCounter++;
      return returnVal;
    }
  };

  someInstance.size = function(){
    return maxCounter-minCounter;
  };

  return someInstance;
};
