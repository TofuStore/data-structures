var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1] = item;
  }
};

setPrototype.contains = function(item) {
  let isPresent = false;
  for (let box in this.storage) {
    if (this.storage[box] === item) {
      isPresent = true;
    }
  }

  return isPresent;
};

setPrototype.remove = function(item) {
  for (let box in this.storage) {
    if (this.storage[box] === item) {
      delete this.storage[box];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
