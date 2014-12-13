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

  node.contains = function() {

  }

  node.depthFirstLog = function(callback) {

  }

  return node;

}

// var BinarySearchTree = function(value){
//   var node = {};
//   var value = value;
//   var parent = null;
//   if(this !== null) {
//     parent = this;
//   }
//   var left = null;
//   var right = null;

//   var insert = function(value) = {
//     var newTree = new BinarySearchTree(value);

//     //can likely be refactored using ternary operators
//     var findPosition = function(node) {

//       if(value < this.value) {
//         this.left === null ? this.left = newTree : findPosition(this.left);
//       } else if(value > this.value) {
//         this.right === null ? this.right = newTree : findPosition(this.right);
//       }
//     }
//     findPosition(this);
//   }

//   var

//   var
//   return node;


// };




/*
 * Complexity: What is the time complexity of the above functions?
 */
