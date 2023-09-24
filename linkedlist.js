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

  at(index) {
    let current = this.head;
    if (index === 0) {
      return current;
    } else {
      for (let i = 0; i < index; i++) {
        if (current.nextNode) {
          current = current.nextNode;
        } else {
          return false;
        }
      }
      return current;
    }
  }

  pop() {
    if (this.head === null) {
      return;
    } else {
      let tail = this.head;
      while (tail.nextNode.nextNode) {
        tail = tail.nextNode;
      }
      tail.nextNode = null;
      this.length--;
      return tail;
    }
  }

  contains(value) {
    let current = this.head;
    if (current.value === value) {
      return true;
    } else {
      while (current) {
        current = current.nextNode;
        if (current.value === value) {
          return true;
        } else if (current.nextNode === null) {
          return false;
        }
      }
    }
  }

  find(value) {
    let index = 0;
    let current = this.head;
    if (current.value === value) {
      return index;
    } else {
      while (current) {
        current = current.nextNode;
        index++;
        if (current.value === value) {
          return index;
        } else if (current.nextNode === null) {
          return false;
        }
      }
    }
  }

  toString() {
    let string = "";
    let current = this.head;
    if (!current) {
      return "null";
    }
    while (current) {
      string += `(${current.value}) --> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
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
