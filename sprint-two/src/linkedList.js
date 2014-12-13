var LinkedList = function(){
  //using functional instantiation to create LinkedList
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newNode = Node(value);
    //if there's nothing in the list yet:
    if(list.head === null) {
      list.head = newNode;
    //if there's only one thing in the list
    } else if(list.tail === list.head) {
      list.head.next = newNode;
    //in all other cases(more than one node in list)
    } else {
      list.tail.next = newNode;
    }

    //in all cases, the tail points to this newNode
    list.tail = newNode;
  };

  list.removeHead = function(){

    if(list.head !== null) {
      var tempReturn = list.head.value;
      var tempHead = list.head.next;
      delete list.head;
      list.head = tempHead;
      return tempReturn;
    }

    return tempVal;
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
