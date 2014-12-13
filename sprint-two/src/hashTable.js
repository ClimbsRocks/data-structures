var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  //make each stored value a tuple of key value pairs
  var i = getIndexBelowMaxForKey(k, this._limit);
  var alreadyStored = this._storage.get(i);
  if(alreadyStored !== undefined) {
    if(Array.isArray(alreadyStored)) {
      alreadyStored.push(v);
    } else {
      var tempArr = [alreadyStored];
      tempArr.push(v);
      this._storage.set(i, tempArr);
    }
  } else{
    this._storage.set(i,v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.splice(i,1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

