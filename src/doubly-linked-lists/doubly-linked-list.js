class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
console.log(myDoublyLinkedList);
console.log("======================");
console.log("Push");
console.log("======================");

myDoublyLinkedList.push(2);
console.log(myDoublyLinkedList);
console.log("======================");
console.log("Pop");
console.log("======================");

myDoublyLinkedList.pop();
// myDoublyLinkedList.pop();
// myDoublyLinkedList.pop();
console.log(myDoublyLinkedList);
console.log("======================");
console.log("Unshift");
console.log("======================");

myDoublyLinkedList.unshift(3);
myDoublyLinkedList.unshift(4);
myDoublyLinkedList.unshift(5);
console.log(myDoublyLinkedList);
console.log("======================");
console.log("Shift");
console.log("======================");

myDoublyLinkedList.shift();
// myDoublyLinkedList.shift();
// myDoublyLinkedList.shift();
// myDoublyLinkedList.shift();
console.log(myDoublyLinkedList);
console.log("======================");
console.log("Get");
console.log("======================");

myDoublyLinkedList.get(2);
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.get(2));
console.log(myDoublyLinkedList.get(1));
console.log(myDoublyLinkedList.get(0));

console.log(myDoublyLinkedList);
console.log("======================");
console.log("set");
console.log("======================");

console.log("before: ", myDoublyLinkedList.get(2).value);
myDoublyLinkedList.set(2, 5);
console.log("after: ", myDoublyLinkedList.get(2).value);

console.log("======================");
console.log("insert");
console.log("======================");

console.log("before: ", myDoublyLinkedList.get(2).value);
myDoublyLinkedList.insert(2, 6);
console.log("after: ", myDoublyLinkedList.get(2).value);

console.log("======================");
console.log("remove");
console.log("======================");

console.log("before: ", myDoublyLinkedList.length);
myDoublyLinkedList.remove(2, 6);
console.log("after: ", myDoublyLinkedList.length);
