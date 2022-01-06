var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = {};
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {
  this.children[Object.keys(this.children).length] = Tree(value);
};

treeMethods.contains = function(target) {
  let targetFound = false;
  let foundInTree = function (tree, target) {
    if (tree.value === target) {
      targetFound = true;
    }
    if (tree.children !== undefined) {
      for (let key in tree.children) {
        foundInTree(tree.children[key], target);
      }
    }
  };
  foundInTree(this, target);
  return targetFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
