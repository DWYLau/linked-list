const LinkedList = require("./linkedlist.js");

const list = new LinkedList();
list.prepend(20);
list.prepend(30);

console.log(JSON.stringify(list, null, 3));
