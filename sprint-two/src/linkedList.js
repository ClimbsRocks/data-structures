var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
    } else if(list.tail === list.head) {
      list.head.next = newNode;
    } else {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    //refactor
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
    } else {
      //intentionally do nothing when list.head is null;
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

var testList = LinkedList();

testList.addToTail(1);
testList.addToTail(2);
testList.addToTail(3);


console.log(testList);


/*
 * Complexity: What is the time complexity of the above functions?
 */
