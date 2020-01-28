class NNode {
  constructor(data, next, back) {
    this.data = data;
    this.next = next || null;
    this.back = back || null;

  }
}

class file {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
  }



  insertLast(data) {
    let node = new NNode(data);

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
    this.current = null;
    this.size = 0;
  }


  DeleteLastNode() {
    let curr = this.head;
    if (this.size === 1){
      this.head=null;
      this.current=null;

    }else {

    while (curr.back && curr.back.back){
      curr= curr.back;
    } 
    
    curr.back = null;
    this.current = curr;
  }
    this.size--;

    // if (this.current && this.current.next && !this.current.back){
     
    // this.current = this.current.next;
    // this.current.back = null ;
    // }
    //  if (this.current && !this.current.next){
    //   this.current = null;
    // }
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
    if (this.current){
      return this.current.data;
    } else {
      return "No Data";
    }
  }

}



let COL = new file();

function queue() {
  COL.insertLast(document.getElementById("data").value);
  document.getElementById('resu2').innerHTML = '<audio controls src="mp3/'+COL.printListData()+'.mp3"></audio>';
  document.getElementById('data').value = '';
}

function nextData() {
  COL.Next();
  document.getElementById('resu2').innerHTML = '<audio controls src="mp3/'+COL.printListData()+'.mp3"></audio>';
}

function backData() {
  COL.moveBack();
  document.getElementById('resu2').innerHTML = '<audio controls src="mp3/'+COL.printListData()+'.mp3"></audio>';
}


function dequeue() {
  COL.DeleteLastNode();
  document.getElementById('resu2').innerHTML = '<audio controls src="mp3/'+COL.printListData()+'.mp3"></audio>';
}



function clearall() {
  COL.clearList();
  document.getElementById('resu').innerHTML = "";
  document.getElementById('resu2').innerHTML = "";
}