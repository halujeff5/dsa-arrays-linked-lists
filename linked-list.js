/** Node: node for a singly linked list. */

const { UNSAFE_convertRouteMatchToUiMatch } = require("@remix-run/router");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
    /** _get(idx): retrieve node at idx. */

    _get(idx) {
      let cur = this.head;
      let count = 0;
  
      while (cur !== null && count != idx) {
        count += 1;
        cur = cur.next;
      }
  
      return cur;
    }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head= node
      this.tail= this.head
    }
    if (this.head) {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      let temp = this.head
      this.head = node
      this.head.next = temp
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    let node = new Node()
    if (this.head == this.tail) return null
    
   if (this.length > 1){
    if (this.tail != this.head){
    let temp = this.tail.val
    this.tail=null
    this.tail= this.head
    this.length--
    return temp
    } else {
    this.head= this.tail
    let temp1 = this.head.val
    this.length--
    return temp1
  }
    

    }}

    

  /** shift(): return & remove first item. */

  shift() {
  //   if (this.length < 1) {return 'the linked list is empty.'}

  //   else {
  //   let temp = this.head.val
  //   let temp2 = this.head.next
  //   this.head=null
  //   temp2 = this.head
  //   this.length--
  //   return temp 
  // }

}

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length || idx < 0 ) return 'index out of range'
    let ans = this._get(idx).val
    return ans
 

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length || idx < 0 ) return 'index out of range'
      let index=this._get(idx)
      index.val= val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0 ) return 'index out of range'
    if (this.length>1 ){
    let index = this._get(idx-1)
    index.val = val
    
    this.length++
  }
    if (idx === 0 && this.length==0){
      this.head.val = val
      this.length++
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || idx < 0 ) return 'index out of range'
    let ele = this._get(idx)
    ele.val = null
    if (this.length = 1){
      this.head=null
      this.tail = null
      return this.length--
      
    }


  }

  /** average(): return an average of all values in the list */

  average() {
  if (!this.head) {return 0}
  if (!this.tail){
      let node = new Node
      node = this.head.val
      node = this.head.next.val
      let sum = node.val
      sum+= node.next.val
      if (this.tail) {let ans = sum+=this.tail.val/this.length} 
      return ans
    }
    
}
}

module.exports = LinkedList;
