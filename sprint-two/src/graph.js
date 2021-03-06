//using Pseudoclassical instantiation
var Graph = function(){

  this.storage = [];

};

Graph.prototype.addNode = function(node){
  var tempNode = {};
  tempNode.value = node;
  tempNode.edges = [];
  this.storage.push(tempNode);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  //remove edges pointing to the node that will be deleted
  for(var i = 0; i < this.storage.length; i++){
    //implement nested for loop to loop through the edges array on each node
    //if that edge is the one we're trying to remove, remove it from that node's edges array as well.
    for(var j = 0; j < this.storage[i].edges.length; j++){
      if(this.storage[i].edges[j].value === node){
        this.storage[i].edges.splice(j, 1);
      }
    }
  }

  //remove the node itself
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === node){
      this.storage.splice(i, 1);
    }
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var storedFrom;
  //since edges must exist on both nodes, we only need to check for the existence of the edge on one of the to or from nodes
  //find the node containing the value fromNode and store it
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === fromNode) {
      storedFrom = this.storage[i];
    }
  }

  //loop through the edges on the node we've found
  //see if they match the value passed in with toNode
  for(var j = 0; j < storedFrom.edges.length; j++) {
    if(storedFrom.edges[j].value === toNode) {
      return true;
    }
  }
  //if we didn't find the node, return false;
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  var tempFrom;
  var tempTo;

  //find from and to nodes
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === fromNode) {
      tempFrom = this.storage[i];
    } else if(this.storage[i].value === toNode) {
      tempTo = this.storage[i];
    }
  }

  //if both nodes exist in the graph, add a pointer to the other node in each node's edges array
  if(tempFrom && tempTo) {
    tempFrom.edges.push(tempTo);
    tempTo.edges.push(tempFrom);
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var tempFrom;
  var tempTo;

  //find from and to nodes
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === fromNode){
      tempFrom = this.storage[i];
    } else if(this.storage[i].value === toNode) {
      tempTo = this.storage[i];
    }
  }

  //if nodeA exists in NodeB's edges array, remove it
  for(var i = 0; i < tempFrom.edges.length; i++){
    if(tempFrom.edges[i].value === toNode){
      tempFrom.edges.splice(i, 1);
    }
  }
  for(var i = 0; i < tempTo.edges.length; i++){
    if(tempTo.edges[i].value === fromNode){
      tempTo.edges.splice(i, 1);
    }
  }

};

Graph.prototype.forEachNode = function(cb){
  //this code doesn't pass the test yet
  for(var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



