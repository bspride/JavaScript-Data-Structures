function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.size = function() {
  return this.length;
}

LinkedList.prototype.isEmpty = function() {
  return this.length == 0 ? true : false;
}

LinkedList.prototype.valueAt = function(index) {
  var curr = this.head;
  for(i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.value; 
}

LinkedList.prototype.append = function(value) {
  this.insert(this.length, value);
}

LinkedList.prototype.pushFront = function(value) {
  this.insert(0, value);
}

LinkedList.prototype.popFront = function() {
  var node = this.head;

  this.head = node.next;

  this.length--;

  return node.value;
}

LinkedList.prototype.popBack = function(value) {
  if(!this.head) {
    this.head = node;
  } else {
    var curr = this.head;
    while(curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
}

LinkedList.prototype.front = function() {
  return this.valueAt(0);
}

LinkedList.prototype.back = function() {
  return this.valueAt(this.length - 1);
}

LinkedList.prototype.insert = function(index, value) {
  var node = {
    value: value,
    next: null
  };

  var curr = this.head;
  for(i = 1; i < index; i++) {
    curr = curr.next;
  }

  node.next = curr.next;
  curr.next = node;

  this.length++;
}

LinkedList.prototype.remove = function(index) {
  var curr = this.head;

  for(i = 1; i < index; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;

  this.length--;
}

LinkedList.prototype.valueNFromEnd = function(n) {
  return this.valueAt(length - n - 1);
}

LinkedList.prototype.reverse = function() {
  var reversed = null;
  var current = this.head;

  while(current != null) {
    var next = current.getNext();
    current.next = reversed;
    reversed = current;
    current = next;
  }

  this.head = reversed;
}

LinkedList.prototype.removeValue = function(value) {
  var prev = null
  var curr = this.head;

  while(curr != null) {
    if(curr.value === value) {
      if(prev == null) {
        this.head = curr.next;
      } else {
        prev.next = curr.next;
      }
      this.length--;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
}