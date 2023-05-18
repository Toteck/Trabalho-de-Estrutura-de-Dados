class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

module.exports = Node;

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

module.exports = DoublyNode;