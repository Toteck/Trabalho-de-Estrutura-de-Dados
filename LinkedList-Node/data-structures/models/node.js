class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }

  toString() {
    return `${this.key}`;
  }
}

module.exports = Node;