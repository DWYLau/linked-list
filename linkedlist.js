import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }
}
