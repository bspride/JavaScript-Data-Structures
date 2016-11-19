var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var binarySearch = function(array, key) {
  var min = 0;
  var max = array.length - 1;

  var mid = Math.floor((min + max) / 2);
  while(max >= min && min <= array.length-1) {
    if(array[mid] == key) {
      return mid;
    } else if(array[mid] > key) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
}

var binarySearchRecursive = function(array, key, min, max) {
  if(max < min || min > array.lenght-1) {
    return -1;
  }
  var mid = Math.floor((min + max) / 2);
  if(key == array[mid]) {
    return mid;
  } else if (array[mid] > key) {
    this.binarySearchRecursive(array, key, min, mid - 1);
  } else {
    this.binarySearchRecursive(array, key, mid + 1, max);
  }
}