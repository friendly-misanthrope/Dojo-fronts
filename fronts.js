class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head
  }

  // 1.) Write a method that accepts a value and create a new node, assign it to the list head,
  // and return a pointer to the new head node.
  addFront(data) {
    // Safety check - if no head exists then we don't have a list, so we create one and terminate the function.
    if (this.head === null){
      this.head = new Node(data)
      return;
    }
      // if a head and therefore a list does exist, store it's current value in a temporary variable,
      // create a new node with the passed in data,
      // and return a pointer to the new node.
      const temp = this.head
      this.head = new Node(data)
      this.head.next = temp
      return this.head
  }

  // 2.) Write a method to remove the head node and return the new head node.
  // If the list is empty, return `null`.
  removeFront() {
    // Safety check, making sure list exists. If it doesn't, return null.
    if (this.head === null){
      return null
    }
    // If a head does exist, store its value in a temp variable.
    let temp = this.head
    // Reassign the head to the next node
    this.head = temp.next
    // Reassign temp variable to null, effectively removing the previous head.
    // Return the new head.
    temp = null
    return this.head
  }

  // 3.) Write a method to return the value (not the node itself) at the head of the list.
  // If the list is empty, return `null`.
  returnFront() {
    // Saftey check, make sure list exists.
    // If it doesn't, return `null`
    if (this.head === null){
      return null
    }
    // Return value stored in head node.
    return this.head.data
  }

  // 4.) Create display() that uses a while loop and a runner to return a string
  //     containing all list values.
  display() {
    
    // Safety check, make sure there are nodes in the list
    if (!this.head) {
      return "List is empty!"
    }

    // create a variable to store our string, initialized as an empty string
    let listValues = ''

    // Add the head's value to our listValues string
    listValues += this.head.data

    // Initialize a runner pointing the next node
    let nextNode = this.head.next

    // while loop to iterate through list, terminates when runner reaches list tail
    while (nextNode) {
      // append runner value to our string
      listValues += " " + nextNode.data

      // update runner to point at next node
      nextNode = nextNode.next
    }
    return `Linked list values: ${listValues} `
  }
}

//! Tests
let myList1 = new LinkedList()
myList1.addFront(33)
myList1.addFront(42)
myList1.addFront(69)
myList1.removeFront()
console.log(myList1.returnFront())
console.log(myList1)

console.log(myList1.display())