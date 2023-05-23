// import { defaultEquals } from '../util';
// import { DoublyNode } from './models/linked-list-models';
const DoublyNode = require("./models/doublyNode")
const LinkedList = require("./linked-list.js")

class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.equalsFn = require("../util");
    this.tail = undefined;
  }

  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node; 
    } else { 
      this.tail.next = node;
      node.prev = this.tail;
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
        } else {
          node.next = this.head;
          this.head.prev = node; 
          this.head = node;
        }
      } else if (index === this.count) { 
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node; 
        node.prev = previous; 
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
        this.head = this.head.next; 
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } 
      
      else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } 
        
      else {
        current = this.getElementAt(index);
        const previous = current.prev;
       
        previous.next = current.next;
        current.next.prev = previous; 
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    while (current != null) {
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

module.exports = DoublyLinkedList;

// let lista = new DoublyLinkedList();

// console.log(lista.getHead());
// console.log(lista.getTail());
// console.log(lista)

// console.log("\n")

// lista.push(1);
// lista.push(2);
// lista.push(3);
// console.log(lista.toString());

// console.log("\n")

// console.log(lista.indexOf(2))
// console.log(lista.indexOf(1))


// console.log("\n")

// lista.insert(5, 3)
// console.log(lista.toString())

// lista.insert(7, 1)
// console.log(lista.toString())

// console.log("\n")

// lista.insert(8, 0)
// console.log(lista.toString())

// lista.removeAt(5)
// console.log(lista.toString())
// lista.removeAt(0)
// console.log("\n")
// console.log(lista.toString())

// lista.removeAt(1)
// console.log(lista.toString())