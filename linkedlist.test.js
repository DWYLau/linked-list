const LinkedList = require("./linkedlist");

describe("#prepend", () => {
  test("adds element to beginning of list", () => {
    const list = new LinkedList();
    list.prepend(10);
    const oldHead = list.head;
    list.prepend(20);

    expect(list.head.value).toBe(20);
    expect(list.head.nextNode).toBe(oldHead);
    expect(list.length).toBe(2);
  });
});
