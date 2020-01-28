class Node {
  constructor(data, next, back) {
    this.data = data;
    this.next = next || null;
    this.back = back || null;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
  }



  insertLast(data) {
    let node = new Node(data);

    if (!this.head) {
      this.current = this.head = node;
    } else {
      let temp = this.head;
      this.head = node;
      temp.next = node;
      node.back = temp;
    }

    this.size++;
  }


  clearList() {
    this.head = null;
    this.size = 0;
  }


  DeleteLastNode() {
    if (this.head && this.head === this.current) {
      this.current = this.head.back;
    }
    if (this.head && this.head.back) {
      this.head = this.head.back;
      this.head.next = null;
    } else {
      this.head = this.current = null;
    }
  }

  Next() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    } 
  }

  moveBack() {
    if (this.current && this.current.back) {
      this.current = this.current.back;
    } 
  }

  printListData() {
    if (this.current)
      return this.current.data;
    else
      return "No Data";
  }

}



let list = new LinkedList();

function addlast() {
  list.insertLast(document.getElementById("value").value);
  document.getElementById('resu').innerHTML = '<audio controls src="mp3/'+list.printListData()+'.mp3"></audio>';
  document.getElementById('value').value = '';
}

function nextVal() {
  list.Next();
  document.getElementById('resu').innerHTML = '<audio controls src="mp3/'+list.printListData()+'.mp3"></audio>';
}

function backVal() {
  list.moveBack();
  document.getElementById('resu').innerHTML = '<audio controls src="mp3/'+list.printListData()+'.mp3"></audio>';
}


function Delete() {
  list.DeleteLastNode();
  document.getElementById('resu').innerHTML = '<audio controls src="mp3/'+list.printListData()+'.mp3"></audio>';
}



function clearall() {
  list.clearList();
  document.getElementById('resu').innerHTML = "";
  document.getElementById('resu2').innerHTML = "";
}

