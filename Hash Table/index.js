function HashTable() {
  this.data = [];
  this.capacity = 8;
  this.size = 0;

  function hash(k) {
    return (k*(k + 3))%this.capacity;
  }

  function grow() {
    this.capacity *= 2;
    this.newTable = [];
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].flag == 0) {
        
      }
    }
  }

  function shrink() {

  }
}

HashTable.prototype.add = function(key, value) {
  var insert = {
    flag: 0,
    key: key,
    value: value
  };

  //time to grow
  if(this.data.size >= this.capacity / 2) {
    this.grow();
  }

  //Hash and get location to store
  var index = this.hash(key);
  //Probe until you have found either the first deleted key or next open element
  while(this.data[index] != null || this.data[index].flag == 0) {
    index = (index+1) % this.capacity;
  }

  //Insert into array
  this.data[index] = insert;
  this.data.size++;
}


HashTable.prototype.exists = function(key) {
  var found = false;
  var index = this.hash(key);
  var originalIndex = index;

  while(this.data[index] != null) {
    if(this.data[index].key == key) {
      found = true;
      break;
    }
    index = (index+1) % this.capacity;
    if (index == originalIndex) {
      break;
    } 
  }

  return found;
}

HashTable.prototype.get = function(key) {
  var index = this.hash(key);

  while(this.data[index] != null) {
    if(this.data[index].key == key) {
      return this.data[index].value;
    }
  }

  return null;
}

HashTable.prototype.remove = function(key) {
  var index = this.hash(key);
  
  while(this.data[index] != null) {
    if(this.data[index].key == key) {
      this.data[index].flag = 1;
      this.size--;
    }
  }

  if(this.capacity / 4 <= this.size) {
    this.shrink();
  }
}