var HashTable = function(inSize){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._thingsStored = 0;
};

HashTable.prototype.resize = function() {
  var nodes = this.getAllNodes();
  this._limit = this._limit*2;
  this._storage = LimitedArray(this._limit);
  for(var i = 0; i < nodes.length; i++) {
    this.insert(nodes[i][0], nodes[i][1]);
  }
}

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
  this._thingsStored++;
  if(this._thingsStored > .75*this._limit) {
    this.resize();
  }
};

HashTable.prototype.getAllNodes = function() {
  debugger;
  var nodes = [];
  for(var i = 0; i < this._limit; i++) {
    if(this._storage[i].length > 1) {
      for(var j = 0; j < this._storage[i].length; j++) {
        nodes.push(this._storage[i][j]);
      }
    } else {
      nodes.push(this._storage[i]);
    }
  }
  return nodes;
}



HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrayAtIndex = this._storage.get(i);
  for(var i = 0; i < arrayAtIndex.length; i++) {
    if(arrayAtIndex[i][0] === k) {
      return arrayAtIndex[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arrAtIndex = this._storage.get(i);
  if(arrAtIndex.length > 1) {
    for(var i = 0; i < arrAtIndex.length; i++) {
      if(arrAtIndex[i][0] === k) {
        var throwawayCatcher = arrAtIndex.splice(i,1);
      }
    }
  } else {
    arrAtIndex = [];
  }
  this._storage.set(i,arrAtIndex);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

