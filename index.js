const LinkedList = require("./linkedlist.js");

const list = new LinkedList();
list.append(20);
list.append(30);
list.append(40);
list.append(60);

console.log(JSON.stringify(list, null, 3));
