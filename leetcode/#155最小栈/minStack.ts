/**
 * 最小栈
 * #155
 * @link https://leetcode-cn.com/problems/min-stack/
 */

export class MinStack {
  stack: number[]
  min: number | undefined
  constructor() {
    this.stack = []
    this.min = undefined
  }
  push(num: number) {
    this.stack.push(num)
    if (this.min === undefined || num < this.min) {
      this.min = num
    }
  }
  pop() {
    this.stack.pop()
    this.min = this.stack.reduce((prev: undefined | number, cur) => {
      if (prev === undefined) {
        return cur
      } else {
        return cur < prev ? cur : prev
      }
    }, undefined)
  }
  top() {
    return this.stack.slice(-1)[0]
  }
  getMin() {
    return this.min
  }
}

// /**
//  * 双向链表节点
//  */
// class Node {
//   val: number | null
//   prev: Node | null
//   next: Node | null
//   constructor(val: number | null, prev: Node | null, next: Node | null) {
//     this.val = val
//     this.prev = prev
//     this.next = next
//   }
// }

// export class MinStack1 {
//   stack: Node[]
//   head: Node
//   tail: Node
//   constructor() {
//     this.stack = []
//     this.head = new Node(null, null, null)
//     this.tail = new Node(null, null, null)

//     // 连接 head 和 tail
//     this.head.next = this.tail
//     this.tail.prev = this.head
//   }
//   /**
//    * 添加节点自动排序
//    */
//   private addNode(node: Node) {
//     // 要做一次自动排列， head => tail 从小到大
//     let current: Node | null = this.head.next
//     if (current === this.tail) {
//       this.insertNode(node, this.head, this.tail)
//     } else {
//       while (current) {
//         if (<number>node.val <= <number>current!.val || current === this.tail) {
//           this.insertNode(node, <Node>current!.prev, <Node>current)
//           break
//         }
//         current = current!.next
//       }
//     }
//   }

//   private insertNode(node: Node, prev: Node, next: Node) {
//     prev.next = node
//     next.prev = node

//     node.prev = prev
//     node.next = next
//   }

//   private removeNode(node: Node) {
//     const prev = <Node>node.prev
//     const next = <Node>node.next

//     prev.next = next
//     next.prev = prev
//   }

//   push(num: number) {
//     const node = new Node(num, null, null)
//     this.stack.push(node)
//     this.addNode(node)
//   }
//   pop() {
//     if (this.stack.length) {
//       const node = <Node>this.stack.pop()
//       this.removeNode(node)
//     }
//   }
//   top(): number | null {
//     return this.stack[this.stack.length - 1]!.val
//   }
//   getMin(): number | null {
//     return this.head.next!.val
//   }
// }
