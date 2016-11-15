function Vector() {
  this.data = [];
}

Vector.prototype.size = function() {
  return this.data.length;
}

Vector.prototype.isEmpty = function() {
  return this.data.length == 0;
}

Vector.prototype.get = function(index) {
  return this.data[index];
}

Vector.prototype.append = function(value) {
  this.data.push(value);
}

Vector.prototype.insert = function(index, value) {
  this.data.splice(index, 0, value);
}

Vector.prototype.prepend = function(value) {
  this.data.unshift(value);
}

Vector.prototype.pop = function() {
  return this.data.pop();
}

Vector.prototype.delete = function(index) {
  this.data.splice(index, 1);
}

Vector.prototype.remove = function(value) {
  this.data = this.data.filter(function(element) {
    element != value;
  });
}

Vector.prototype.find = function(value) {
  return this.data.indexOf(value);
}
