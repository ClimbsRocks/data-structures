var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // debugger
    var nodeVal = Node(value);
    if(list.head === null) {
      list.head = nodeVal;
      list.tail = nodeVal;
    } else if(list.tail === list.head) {
      list.head.next = nodeVal;
      list.tail = nodeVal;
    } else {
      list.tail.next = nodeVal;
      list.tail = nodeVal;
    }
  };

  list.removeHead = function(){
    if(list.head === list.tail) {
      var tempReturn = list.head.value;
      var tempHead = list.head.next;
      delete list.head;
      list.head = tempHead;
      list.tail = null;
      return tempReturn;
    } else if(list.head !== null) {
      var tempReturn = list.head.value;
      var tempHead = list.head.next;
      delete list.head;
      list.head = tempHead;
      return tempReturn;
    }
  };

  list.contains = function(target){
    var rContains = function(inNode) {
      if(inNode.value === target) {
        return true;
      } else if(inNode.next === null) {
        return false;
      } else {
        return rContains(inNode.next);
      }
    }

    return rContains(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
