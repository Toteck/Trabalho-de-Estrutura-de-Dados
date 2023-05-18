const DoublyNode = require("./models/node")
const DoublyLinkedList = require("./doubly-linkedList.js")

class DoublyCircularLinkedList extends DoublyLinkedList {
  constructor() {
    super();
    this.equalsFn = require("../util");
  }

  push(element) {
    const node = new DoublyNode(element);
    let current;
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      this.head.next = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
      this.tail.prev = node;
    } else {
      // current = this.getElementAt(this.size() - 1);
      this.tail.next = node;
      node.prev = this.tail;
      this.head.prev = node;
      node.next = this.head;
      this.tail = node;
    }
    // // set node.next to head - to have circular list
    // node.next = this.head;
    // this.tail.next = this.head;
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
          this.head.next = node;
          this.head.prev = this.tail;
          this.tail.next = this.head;
          this.tail.prev = node;
        } else {
          node.next = current;
          current = this.getElementAt(this.size() - 1);
          // update last element
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size() - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.size() - 1; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }

  inverseToString() {
    if (this.tail == null) {
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }

}

module.exports = DoublyCircularLinkedList;