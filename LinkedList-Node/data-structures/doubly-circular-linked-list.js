const DoublyNode = require("./models/node");
const DoublyLinkedList = require("./doubly-linkedList");
const CircularLinkedList = require("./circular-linked-list");

class DoublyCircularLinkedList extends DoublyLinkedList {
  constructor() {
    super();
    this.equalsFn = require("../util");
  }

  push(element) {
    const node = new DoublyNode(element);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
      this.head.next = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
      this.tail.prev = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.head.prev = node;
      node.next = this.head;
      this.tail = node;
    }
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
          current.prev = node;
          current = this.getElementAt(this.size() - 1);
          // update last element
          this.head = node;
          current.next = this.head;
          this.head.prev = this.tail;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        
        node.next = previous.next;
        node.prev = previous;
        previous.next.prev = node;
        previous.next = node;
        
      }
      this.count++;
      return true;
    }
    return false;
  }

  toString() {
    if (this.head == null) {
      return "";
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
      return "";
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    let i = this.size() - 1;
    while (i > 0) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
      i--;
    }
    return objString;
  }
}

// module.exports = DoublyCircularLinkedList;

let lista = new DoublyCircularLinkedList();

console.log(lista.getHead())
console.log(lista.getTail());

console.log("\n")

lista.push(1);
lista.push(2);
lista.push(3);
console.log(lista.toString());
lista.insert(4, 1)
console.log(lista.toString());
console.log(lista.inverseToString())

console.log("\n")

console.log(lista.removeAt(2));
console.log(lista.removeAt(1));
console.log(lista.toString());

console.log("\n")

lista.push(2);
lista.push(3);
console.log(lista.toString());
console.log(lista.inverseToString());

console.log(lista.getHead().element);
console.log(lista.getTail().element);

lista.insert(9, 2)
console.log(lista.toString())