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
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }
    // set node.next to head - to have circular list
    node.next = this.head;
    this.count++;
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
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  /*removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) { // Caso deseja-se remover o elemento na posição 0
        if (this.size() === 1) { // Se eu tiver somente 1 elemento na lista
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size() - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
          this.head.prev = this.tail;
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
  }*/

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


lista.push(1);
lista.push(2);
lista.push(3);
console.log(lista.toString());
console.log(lista.inverseToString())

lista.removeAt(2);
lista.removeAt(1);
console.log(lista.toString());

lista.push(2);
lista.push(3);
console.log(lista.toString());
console.log(lista.inverseToString());

console.log(lista.getHead().element);
console.log(lista.getTail().element);