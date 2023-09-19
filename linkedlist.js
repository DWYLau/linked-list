const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }
}

LinkedList.fromValues = function (...values) {
  const list = new LinkedList();
  for (let i = values.length - 1; i >= 0; i++) {
    list.prepend(values[i]);
  }
  return list;
};

module.exports = LinkedList;
