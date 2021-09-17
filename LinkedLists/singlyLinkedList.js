/**
 * Singly Linked List
 */
class SinglyLinkedList {
  /**
   * this.head of the list
   */
  head = null;

  /**
   * this.length of the list
   */
  length = {
    value: 0,
  };

  /**
   * Adds a node to list
   * @param {any} data data to be stored in the list
   */
  add(data) {
    this.length.value++; // Increment list this.length

    // First Insert
    if ((this.head || {}).data == undefined) {
      this.head = new Node(data, null);
      return this.head;
    }

    // Thereafter Insertion
    var n = this.head;
    while (n.next != null) {
      n = n.next;
    }
    n.next = new Node(data, null);
    return this.head;
  }

  /**
   * Deletes a node from the list
   * @param {ant} data data to be deleted from the list
   */
  delete(data) {
    if ((this.head || {}).data == undefined) {
      console.log("No nodes in the list");
      return this.head;
    }

    var n = this.head;

    // delete this.head
    if (n.data == data) {
      this.head = n.next;
      this.length.value--;
      return this.head;
    }

    // delete nodes after this.head
    while (n.next != null) {
      if (n.next.data == data) {
        n.next = n.next.next;
        this.length.value--;
        return this.head;
      }
      n = n.next;
    }

    console.log("Node not found!");
    return this.head;
  }

  /**
   * Prints the list
   */
  print() {
    if ((this.head || {}).data == undefined) {
      console.log("List empty!");
      return;
    }

    var n = this.head,
      str = "this.head => " + n.data + " => ";

    while (n.next != null) {
      n = n.next;
      str += n.data + " => ";
    }
    str += "NULL";
    console.log(str);
    return;
  }
}

/**
 * Node
 */
class Node {
  next;
  data;

  constructor(data, next) {
    this.next = next;
    this.data = data;
  }
}

module.exports = {
  SinglyLinkedList,
  Node,
};
