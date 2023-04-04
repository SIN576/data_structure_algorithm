# Linked List

Linked Lists is the data structure that have some important point:
1. head ---> is the first item
2. tail ---> is the last item
3. each item have point to next item (the last item or tail has point to null )

---

Now we talk detail about Linked List

1. Class (OOP)
    - Node(class & contructor)
    - LinkedList(class & contructor)
2. Built in function of Linked List
    - push
    - pop
    - unshift
    - shift
    - get
    - set
    - insert
    - remove
    - reverse

## Class (OOP)

### Node

Node is a class refer to object of each Linked List item that have two property like:
- value : for store value
- next : is a pointer for point to next item

```
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
```

### LinkedList

LinkedList is a class refer to object of LinkedList that have 3 property like: 
- head : the first item
- tail : the last item
- length : number of LinkedList

```
class LinkedList{
    contructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
}
```

## Built in function of LinkedList

### Push
push() is a function for add a new item to the last. For condition in this function such as:
- create new Node object
- if LinkedList is empty
- if LinkedList is not empty
- increment length
- return the LinkedList

```
class LinkedList{
    contructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // push function
    push(value){

        // create new Node object
        const newNode = new Node(value);
        if (!this.head){

            // if LinkedList is empty
            this.head = newNode;
            this.tail = newNode;
        } else{

            // if LinkedList is not empty
            this.tial.next = newNode;
            this.tail = newNode;
        }

        // increment length
        this.length++;

        // return the LinkedList
        return this;
    }
}
```

### Pop
pop() is a function that get & remove that last item. For condition in this function such as:
- if LinkedList empty
- find prev item of tail
- remove tail
- decrement length
- if has only one item
- return the last item
```
class LinkedList{
    contructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // push function
    push(value){

        // create new Node object
        const newNode = new Node(value);
        if (!this.head){

            // if LinkedList is empty
            this.head = newNode;
            this.tail = newNode;
        } else{

            // if LinkedList is not empty
            this.tial.next = newNode;
            this.tail = newNode;
        }

        // increment length
        this.length++;

        // return the LinkedList
        return this;
    }

    // pop function
    pop(){

        // if LinkedList empty
        if (this.length === 0) return undefined;

        // find prev item of tail
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        // remove tail
        this.tail = pre;
        this.tail.next = null;

        // decrement length
        this.length--;

        // if has only one item
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // return the last item
        return temp;
    }
}

```