'use strict';
//change NODE ? EDITS
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last){
      this.last = null;
    }

    return node.value;

  }

  show() {
    return this.first.value;
  }

  all() {
    let Array = [];
    let currentNode = this.first;

    while (currentNode) {
      Array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    return Array;
  }
}

module.exports = Queue;
