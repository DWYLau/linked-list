const LinkedList = require("./linkedlist");

describe("#append", () => {
  test("adds element to end of list", () => {
    const list = new LinkedList();
    list.append(10);
    const oldHead = list.head;
    console.log(oldHead);
    list.append(20);

    expect(list.head.value).toBe(10);
    expect(list.head).toBe(oldHead);
    expect(list.length).toBe(2);
  });
});

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

describe("#size", () => {
  test("returns length of list", () => {
    const list = new LinkedList.fromValues(10, 20);

    expect(list.length).toBe(2);
  });
});

describe("#findHead", () => {
  test("returns the value at the beginning of the list", () => {
    const list = LinkedList.fromValues(10, 20);

    expect(list.findHead()).toBe(10);
  });
});

describe("#findTail", () => {
  test("returns the value at the end of the list", () => {
    const list = LinkedList.fromValues(10, 20, 30);

    expect(list.findTail()).toBe(30);
  });
});
