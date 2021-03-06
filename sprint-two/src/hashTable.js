var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    let isPresent = false;
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        isPresent = true;
      }
    }
    if (!isPresent) {
      this._storage.set(index, this._storage.get(index).concat([[k, v]]));
    }
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage.get(index).length; i++) {

    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(1) <- only needs to traverse in case of collision, traversal is very small
 *
 * retreve: O(1) <- only needs to traverse in case of collision, traversal is very small
 *
 * remove: O(1) <- only needs to traverse in case of collision, traversal is very small
 */


