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

describe("#pop", () => {
  test("removes element at the end of the list", () => {
    const list = LinkedList.fromValues(10, 20, 30);
    list.pop();

    expect(list.length).toBe(2);
  });
});

describe("#contains", () => {
  test("returns true if list contains value", () => {
    const list = LinkedList.fromValues(10, 20, 30);

    expect(list.contains(20)).toBe(true);
  });

  test("returns false if list does not contain value", () => {
    const list = LinkedList.fromValues(10, 20, 30);

    expect(list.contains(40)).toBe(false);
  });
});

describe("#find", () => {
  test("returns index if value is found", () => {
    const list = LinkedList.fromValues(10, 20, 30);

    expect(list.find(10)).toBe(0);
    expect(list.find(20)).toBe(1);
    expect(list.find(30)).toBe(2);
  });

  test("returns false if value is not found", () => {
    const list = LinkedList.fromValues(10, 20, 30);

    expect(list.find(40)).toBe(false);
  });
});

describe("#toString", () => {
  test("returns null if list is empty", () => {
    const list = new LinkedList();

    expect(list.toString()).toBe("null");
  });

  test("converts list to string format", () => {
    const list = LinkedList.fromValues(10, 20, 30);

    expect(list.toString()).toBe("(10) --> (20) --> (30) --> null");
  });
});
