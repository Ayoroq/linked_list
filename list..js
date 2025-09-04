class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
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
    this.length++;
  }

  // This is to add a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    newNode.nextNode = currentNode;
    this.head = newNode;
    this.length++;
  }

  // This is to return the size of the Linked list
  size() {
    return this.length;
  }

  tail(){
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    }
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

}
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
