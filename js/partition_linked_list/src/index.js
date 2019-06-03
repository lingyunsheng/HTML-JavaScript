import LinkedList from './LinkedList';
// 实现一个链表
const partition = (head, x) => {
    // 分成两个2个节点
    let cur = head,
        next,
        preHead,//小于的
        preTail,
        afterHead,//大于或等于链表
        afterTail;
    if (head === null) {
        return null;
        while (cur) {
            next = cur.next;
            cur.next=null;//打掉以前的关系
            if (cur.val < x) {
                if (!preHead) {//空链表
                    preHead = cur;
                    preTail = cur;
                } else {
                    preTail.next = cur;
                    preTail = cur;
                }
            } else {
                if (!afterHead) {//空链表
                    afterHead = cur;
                    afterTail = cur;
                } else {
                    afterTail.next = cur;
                    afterTail = cur;
                }

            }
            cur = next;
        }
    }
}
const list = new LinkedList();
list
    .append(1)
    .append(4)
    .append(3)
    .append(2)
    .append(5)
    .append(2)
console.log(list.toString());