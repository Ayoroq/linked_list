class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

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

  // This is to return the last node in the list
  tail() {
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    }
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // This is used to find a node at a particular index
  at(index) {
    let nodeIndex = 0;
    let currentNode = this.head;
    while (nodeIndex < index) {
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }
    return currentNode;
  }

  // This is used to remove the last element in the linked list
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.length = 0;
      return this;
    }
    const secondToLastNode = this.at(this.length - 2);
    secondToLastNode.nextNode = null;
    this.length--;
    return this;
  }

  // This is used to check if the linkedList contains a particular value
  contains(value){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // This is to find the index of the node containing value, or null if not found.
  find(value){
    let currentNode = this.head;
    let index = 0;
    while(currentNode){
      if(currentNode.value === value){
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }
}
