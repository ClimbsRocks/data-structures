var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // //refactor to avoid collisions
  // //Create tuple out of key and value
  // var tempTuple = [k, v];
  // var i = getIndexBelowMaxForKey(k, this._limit);
  // now push that tuple into storage at index i
  // this._storage.set(i, tempTuple);
  // //check if something already exists at that index
  // //

  //1. create tuple
  //2. find what index in the storage array that tuple should go to
  //3. find what already exists at that index of the storage array
  //3a. store what already exists at that index as alreadyAtIndex;
  //4. check if what's already there is a value (Array) or is null
  //5. If null, create an array, push the tuple into that array, and set that index equal to this newly created array
  //6. If not null, push our new tuple into alreadyAtIndex;
  //7. Set the value of that index equal to our newly pushed alreadyAtIndex

  var newTuple = [k, v];
  var i = getIndexBelowMaxForKey(k, this._limit);
  var alreadyAtIndex = this._storage.get(i);
  if(alreadyAtIndex !== undefined){
    var newVal = alreadyAtIndex.push(newTuple);
    this._storage.set(i, newVal);
  } else {
    var newVal = [];
    newVal.push(newTuple);
    this._storage.set(i, newVal);
  }

};

HashTable.prototype.retrieve = function(k){
  var blackMagicIndex = getIndexBelowMaxForKey(k, this._limit);
  var returnedArr = this._storage.get(blackMagicIndex);
  //iterate through returnedArr, which is an array of tuples
  //check every tuple's 0 index against k
  //if so, return the 1 index of that tuple
  //otherwise return null at the very end
  if(returnedArr !== null){
    for(var z = 0; z < returnedArr.length; z++){
      if(returnedArr[z][0] === k){
        return returnedArr[z][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  //what we're doing: take out the key and value from our storage

  //how we're doing it:
  //get index for key from black magic
  //use the set function to set the value at that index to null
  var i = getIndexBelowMaxForKey(k, this._limit);
  var alreadyAtArr = this._storage.get(i);
  //this might break for arrays of 0 length;
  if(alreadyAtArr !== null) {
    for(var i = 0; i < alreadyAtArr.length; i++) {
      if(alreadyAtArr[i][0] === k) {
        alreadyAtArr.splice(i,1);
      }
    }
    this._storage.set(i,alreadyAtArr);
  }
};


//Preston's Code:
// var HashTable = function(inSize){
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
//   this._thingsStored = 0;
// };

// HashTable.prototype.resize = function() {
//   var nodes = this.getAllNodes();
//   this._limit = this._limit*2;
//   this._storage = LimitedArray(this._limit);
//   debugger;
//   for(var i = 0; i < nodes.length; i++) {
//     this.insert(nodes[i][0], nodes[i][1]);
//   }
// }

// HashTable.prototype.insert = function(k, v){
//   var tuple = [k, v];

//   //make each stored value a tuple of key value pairs
//   var i = getIndexBelowMaxForKey(k, this._limit);
//   var alreadyStored = this._storage.get(i);
//   if(alreadyStored !== undefined) {
//     alreadyStored.push(tuple);
//   } else {
//     alreadyStored = [tuple];
//   }
//   this._storage.set(i, alreadyStored);
//   this._thingsStored++;

//   if(this._thingsStored > .75*this._limit) {
//     this.resize();
//   }

// };

// HashTable.prototype.getAllNodes = function() {
//   //i think this builds the nodes array incorrectly;
//   debugger;
//   var nodes = [];
//   for(var i = 0; i < this._limit; i++) {
//     var nodeAtI = this._storage.get(i);
//     if(nodeAtI !== undefined) {
//       if(nodeAtI.length > 1) {
//         for(var j = 0; j < nodeAtI.length; j++) {
//           nodes.push(nodeAtI[j]);
//         }
//       } else {
//         nodes.push(nodeAtI);
//       }
//     }
//   }
//   return nodes;
// }



// HashTable.prototype.retrieve = function(k){
//   var i = getIndexBelowMaxForKey(k, this._limit);
//   var arrayAtIndex = this._storage.get(i);
//   for(var i = 0; i < arrayAtIndex.length; i++) {
//     if(arrayAtIndex[i][0] === k) {
//       return arrayAtIndex[i][1];
//     }
//   }
//   return null;
// };

// HashTable.prototype.remove = function(k){
//   var i = getIndexBelowMaxForKey(k, this._limit);
//   var arrAtIndex = this._storage.get(i);
//   if(arrAtIndex.length > 1) {
//     for(var i = 0; i < arrAtIndex.length; i++) {
//       if(arrAtIndex[i][0] === k) {
//         var throwawayCatcher = arrAtIndex.splice(i,1);
//       }
//     }
//   } else {
//     arrAtIndex = [];
//   }
//   this._storage.set(i,arrAtIndex);
// };



// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

