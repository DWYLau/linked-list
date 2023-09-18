import LinkedList from "./linkedlist.js";

const list = new LinkedList();
list.prepend(10);
list.prepend(20);

console.dir(list, { depth: null });
