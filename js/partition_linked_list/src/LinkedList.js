
import LinkedListNode from './LinkedListNode.js';

class LinkedList {
    constructor() {
        // 1->4->3->2->5->2
        // 重构链表 头节点 尾节点
        this.head = null;
        this.tail = null;
    }
    // 添加节点
    append(value) {
        // 链表由节点构成 节点 构成树  
        const newNode = new LinkedListNode(value);
        if (!this.head) {//空链表
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.append = newNode;
            this.tail = newNode;
        }
        // 如何实现链式调用
        return this;

    }
    // 把节点放到array下 
    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString() {
        return this.toArray().map(node => node.val);
    }
}
// 构建抽象链表
export default LinkedList;