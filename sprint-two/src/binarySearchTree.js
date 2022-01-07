var BinarySearchTree = function(value) {
  let instance = Object.create(binarySearchTreeMethods);
  instance.right;
  instance.left;
  instance.value = value;

  return instance;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
  if (this.value < value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
  let found = false;
  if (this.value === value) {
    found = true;
  } else {
    if (this.value > value && this.left) {
      found = this.left.contains(value);
    }
    if (this.value < value && this.right) {
      found = this.right.contains(value);
    }
  }
  return found;
};

binarySearchTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n) <- only needs to traverse < or > values
 * contains: O(log n) <- only needs to traverse < or > values
 * depthFirstLog: O(n) <- must traverse entire tree
 */
