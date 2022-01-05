var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1] = value;
};

queueMethods.dequeue = function() {
  let dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return dequeued;
};

