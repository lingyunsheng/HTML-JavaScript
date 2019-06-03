import LinkedListNode from './LinkedListNode.js'
class LinkedList {
    constructor() {
        // 1->4->->2->5
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new LinkedListNode(value);
        // 如果head为空
        if (!this.head) { // 空链表
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // 如何实现链式调用
        // 
        return this;
    }
    toArray () {
        const nodes = [];
        let currentNode = this.head;
        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString() {
        // 前面不是数组所以map出错
        return this.toArray().map(node=>node.val);
    }
}
// 构建抽象链表
export default LinkedList;
