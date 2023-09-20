const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.length++;
    } else {
      let tail = this.head;
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }
      tail.nextNode = newNode;
      this.length++;
    }
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  findHead() {
    return this.head.value;
  }

  findTail() {
    if (this.head.nextNode === null) {
      return this.head.value;
    } else {
      let tail = this.head;
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }
      return tail.value;
    }
  }

  atIndex(index) {
    let values = Object.values(this.head);
    console.log(values);
    let filterValues = values.filter(Number);
    console.log(filterValues);
    return values[index];
  }
}

LinkedList.fromValues = function (...values) {
  const list = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    list.prepend(values[i]);
  }
  return list;
};

module.exports = LinkedList;
