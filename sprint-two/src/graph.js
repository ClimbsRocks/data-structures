

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
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



