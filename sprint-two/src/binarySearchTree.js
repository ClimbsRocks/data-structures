var BinarySearchTree = function(value) {
  var node = {};
  node.value = value;
  node.right = null;
  node.left = null;
  node.parent = null;
  if(this !== null) {
    node.parent = this;
  }

  node.insert = function(value) {
    var newTree = BinarySearchTree(value);
    var findPosition = function(node) {
      if(value < node.value) {
        node.left === null ? node.left = newTree : findPosition(node.left);
      } else if (value > node.value) {
        node.right === null ? node.right = newTree : findPosition(node.right);
      }
    }
    findPosition(node);
  }

  node.contains = function(target) {
    var rContains = function(node){
      if(node.value === target){
        return true; // Get to be really happy!
      } else if(node.left && target < node.value){
        return rContains(node.left);
      } else if(node.right && target > node.value){
        return rContains(node.right);
      } else {
        return false;
      }
    }

    return rContains(node);
  }

  node.depthFirstLog = function(callback) {

  }

  return node;

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
