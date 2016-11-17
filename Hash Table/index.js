function HashTable(size) {
  this.data = [];
  this.size = 8;
  this.growthFactor = 2;
  this.shrinkFactor = 4;

  function hash(k) {
    return (k*(k + 3))%this.size;
  }
}

HashTable.prototype.add = function(key, value) {
  var insert = {
    flag: '',
    key: key,
    value: value
  };
}

HashTable.prototype.exists = function(key) {

}

HashTable.prototype.get = function(key) {

}

HashTable.prototype.remove = function(key) {

}