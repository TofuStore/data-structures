

// Instantiate a new graph
var Graph = function(value) {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[Object.keys(this.nodes).length] = {value: node, edges: {}};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let key in this.nodes) {
    if (this.nodes[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let edgesToRemove = [];
  for (let key in this.nodes) {
    if (this.nodes[key].value === node) {
      for (edge in this.nodes[key].edges) {
        edgesToRemove.push(this.nodes[key].edges[edge]);
      }
      delete this.nodes[key].value;
    }
  }

  for (let i = 0; i < edgesToRemove.length; i++) {
    this.removeEdge(node, edgesToRemove[i]);
  }

  // _.each(edgesToRemove, function(edge) {
  //   this.removeEdge(node, edge);
  // });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let key in this.nodes) {
    if (this.nodes[key].value === fromNode) {
      for (edge in this.nodes[key].edges) {
        if (this.nodes[key].edges[edge] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (let key in this.nodes) {
    if (this.nodes[key].value === fromNode) {
      this.nodes[key].edges[Object.keys(this.nodes[key].edges).length] = toNode;
    }
    if (this.nodes[key].value === toNode) {
      this.nodes[key].edges[Object.keys(this.nodes[key].edges).length] = fromNode;
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let key in this.nodes) {
    if (this.nodes[key].value === fromNode) {
      for (edge in this.nodes[key].edges) {
        if (this.nodes[key].edges[edge] === toNode) {
          delete this.nodes[key].edges[edge];
        }
      }
    }
    if (this.nodes[key].value === toNode) {
      for (edge in this.nodes[key].edges) {
        if (this.nodes[key].edges[edge] === fromNode) {
          delete this.nodes[key].edges[edge];
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


