
// 线性链表
// 将数字的每一位编程ListNode的实例
// 既不是字符串也不是数值 而是采用一个线性表数据结构
function ListNode(val){

    this.val = val;
    // 指针
    this.next=null;

}
let number = 1234567890;
let n1= new ListNode(1);
console.log(n1);

let n2 = new ListNode(2);
n1.next= n2;
console.log(n2);

let n3= new ListNode(3);
n2.next=n3;
console.log(n3);

//遍历链表 travel 一下

let node = n1;
while(node){
    console.log(node.val);
    node = node.next;
   
    

}
