class LinkedList {
  constructor() {
    this.head = null;
  }

  // This is to add a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  // This is to add a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    newNode.nextNode = currentNode;
    this.head = newNode;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
