var BinarySearchTree = function(value){
  var node = {};
  var value = value;
  var parent = null;
  if(this !== null) {
    parent = this;
  }
  var left = null;
  var right = null;

  var insert = function(value) = {
    var newTree = new BinarySearchTree(value);

    //can likely be refactored using ternary operators
    var findPosition = function(node) {

      if(value < this.value) {
        this.left === null ? this.left = newTree : findPosition(this.left);
      } else if(value > this.value) {
        this.right === null ? this.right = newTree : findPosition(this.right);
      }
    }
    findPosition(this);
  }

  var

  var
  return node;


};




/*
 * Complexity: What is the time complexity of the above functions?
 */
