var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail) {
      list.tail.next = Node(value);
    }
    list.tail = Node(value);
    if (!list.head) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    let lastHead = list.head.value;
    list.head = list.head.next;
    return lastHead;
  };

  list.contains = function(target) {
    let targetFound = false;
    let foundInNode = function(node, target) {
      if (node.value === target) {
        targetFound = true;
      }
      if (node.next) {
        foundInNode(node.next, target);
      }
    };
    foundInNode(list.head, target);
    return targetFound;
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail: O(1) <- we know exact location
 *
 * removeHead: O(1) <- we know exact location
 *
 * contains: O(n) <- we have to recursively check each node in the list
 */
