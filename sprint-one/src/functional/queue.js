var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var minPosition = 0;
  var maxPosition = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[maxPosition] = value;
    maxPosition++;
  };

  someInstance.dequeue = function(){
    if(maxPosition > minPosition){
      var returnVal = storage[minPosition];
      delete storage[minPosition];
      minPosition++;
      return returnVal;
    }
  };

  someInstance.size = function(){
    return maxPosition - minPosition;
  };

  return someInstance;
};
