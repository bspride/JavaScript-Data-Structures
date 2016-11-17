function Queue() {
  this.data = [];
}

Queue.prototype.enqueue = function(value){
  this.data.push(value);
}

Queue.prototype.dequeue = function() {
  return this.data.shift();
}

Queue.prototype.isEmpty = function() {
  return this.data.length == 0;
}