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

 if(this.value === target){
  return true;
 } else if(this.children.length > 0){
  for(var i = 0; i < this.children.length; i++){
    return this.children[i].contains(target);
  }
 } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
