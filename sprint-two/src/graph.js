

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
  for(var i = 0; i < this.storage.length; i++){
    //implement nested for loop to loop through the edges array on each node
    //if that edge is the one we're trying to remove, remove it from that node's edges array as well.
    for(var j = 0; j < this.storage[i].edges.length; j++){
      if(this.storage[i].edges[j].value === node){
        this.storage[i].edges.splice(j, 1);
      }
    }
  }

  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === node){
      this.storage.splice(i, 1);
    }
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //refactor to only do to the FromNode
  var storedFrom;
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === fromNode) {
      storedFrom = this.storage[i];
    }
  }
  for(var j = 0; j < storedFrom.edges.length; j++) {
    if(storedFrom.edges[j].value === toNode) {
      return true;
    }
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  var tempFrom;
  var tempTo;
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i].value === fromNode) {
      tempFrom = this.storage[i];
    } else if(this.storage[i].value === toNode) {
      tempTo = this.storage[i];
    }
  }
  tempFrom.edges.push(tempTo);
  tempTo.edges.push(tempFrom);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var tempFrom;
  var tempTo;
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i].value === fromNode){
      tempFrom = this.storage[i];
    } else if(this.storage[i].value === toNode) {
      tempTo = this.storage[i];
    }
  }
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
  for(var i = 0; i < this.storage.length; i++) {
    //this may need to only be called on the node itself, not the node's value
    cb(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



