/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }
    // insert at head
    insertAtHead(val) {
        this.head = new Node(val, this.head)
        this.size++
    }
    // print all vals of list
    printList() {
        console.log("Printing the list")
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val)
            currentNode = currentNode.next
        }
    }
    addNode(val) {
        let currentNode = this.head
        currentNode.next = new Node(220)
    }
}

const l1 = new LinkedList();
l1.insertAtHead(4)
console.log(l1.head.next)
l1.addNode(8)
console.log(l1.head.next)
