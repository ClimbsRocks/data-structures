//using Functional Shared instantiation
var Tree = function(value){
  var newTree = {};

  newTree.value = value;

  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
