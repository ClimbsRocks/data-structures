var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // debugger;
  var tuple = [k, v];

  //make each stored value a tuple of key value pairs
  var i = getIndexBelowMaxForKey(k, this._limit);
  var alreadyStored = this._storage.get(i);
  if(alreadyStored !== undefined) {
    alreadyStored.push(tuple);
  } else {
    this._storage[i] = [tuple];
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(i);
  for(var i = 0; i < arrayAtIndex.length; i++) {
    if(arrayAtIndex[i][0] === k) {
      return arrayAtIndex[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.splice(i,1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

