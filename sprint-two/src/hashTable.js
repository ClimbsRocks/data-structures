var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};

//Preston's original code below:
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var tuple = [k, v];

  //make each stored value a tuple of key value pairs
  var i = getIndexBelowMaxForKey(k, this._limit);
  var alreadyStored = this._storage.get(i);
  if(alreadyStored !== undefined) {
    alreadyStored.push(tuple);
  } else {
    alreadyStored = [tuple];
  }
  this._storage.set(i, alreadyStored);
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
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrAtIndex = this._storage.get(i);
  if(arrAtIndex.length > 1) {
    for(var i = 0; i < arrAtIndex.length; i++) {
      if(arrAtIndex[i][0] === k) {

      }
    }
  }
  this._storage.set(i,arrAtIndex);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

