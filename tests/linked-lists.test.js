const { expect } = require("@jest/globals");
const { SinglyLinkedList } = require("../LinkedLists/singlyLinkedList");

describe("should test linked list", () => {
  test("should test singly linked list", () => {
    const list = new SinglyLinkedList();

    expect(list.length.value).toBe(0);
    expect(list.head).toBe(null);

    list.add("Akash");
    expect(list.head.data).toBe("Akash");
    expect(list.length.value).toBe(1);

    list.add("Patal");
    expect(list.length.value).toBe(2);
    expect(list.head.data).toBe("Akash");

    list.delete("Akash");
    expect(list.length.value).toBe(1);
    expect(list.head.data).toBe("Patal");

    list.delete("Patal");
    expect(list.head).toBe(null);
    expect(list.length.value).toBe(0);
  });
});
