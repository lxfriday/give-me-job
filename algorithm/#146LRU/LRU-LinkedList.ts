// 列表节点
class LinkedListNode {
  key: number
  value: number
  prev: LinkedListNode | null
  next: LinkedListNode | null
  constructor(key: number = 0, value: number = 0) {
    this.key = key
    this.value = value
    this.prev = null // 当前节点指向的前一个节点
    this.next = null // 当前节点指向的下一个节点
  }
}

type NumObj = {
  [k: number]: LinkedListNode
}

export default class LRUCache {
  // 头部节点
  head: LinkedListNode
  // 尾部节点
  tail: LinkedListNode
  // 可以理解为缓存存放的地方
  cache: NumObj
  // LRU 的容量
  capacity: number
  // LRU 当前的大小
  size: number

  constructor(capacity: number) {
    this.cache = {}
    this.capacity = capacity
    this.size = 0
    this.head = new LinkedListNode() // 初始化头结点
    this.tail = new LinkedListNode() // 初始化尾结点

    // 初始情况下只有头结点和尾结点
    this.head.next = this.tail // 头结点的 next 指向尾结点
    this.tail.prev = this.head // 尾结点的 prev 指向头结点
  }

  // 把节点易懂到双向链表的头部（最近使用）
  private moveToHead(node: LinkedListNode) {
    this.removeNode(node)
    this.addNode(node)
  }

  /**
   * 添加一个节点，默认添加到头结点后面，表示最近使用
   * @param node {LinkedListNode}
   */
  private addNode(node: LinkedListNode) {
    // 先把 node 的 prev 、next 建立好
    node.prev = this.head
    node.next = this.head.next

    //把原来的第一个节点的前一个节点指向 node (这里要在 head.next 更改指向之前先让原来的第一个节点指向 node)
    this.head.next!.prev = node
    // 最后把 head 的 next 重新指向 node
    this.head.next = node
  }

  /**
   * 删除一个节点
   * @param node {LinkedListNode}
   */
  private removeNode(node: LinkedListNode) {
    // 把当前节点的 prev、next 都存起来
    const prev = node.prev as LinkedListNode
    const next = node.next as LinkedListNode

    // 将前一个节点指向 node 的后一个节点
    node.prev!.next = next
    // 把后一个节点的 prev 指向 node 的前一个节点
    next!.prev = prev
  }

  /**
   * 删除尾部节点
   */
  private popTail(): LinkedListNode {
    const res = this.tail.prev as LinkedListNode
    // 删除节点
    this.removeNode(res)
    return res
  }

  /**
   * 获取一个值
   * @param k {number}
   */
  get(k: number): number {
    const node = this.cache[k]
    if (node) {
      // 如果有这个节点，则把这个节点移动到 head
      this.moveToHead(node)
      return node.value
    }
    return -1
  }

  // 插入一个值
  put(k: number, v: number) {
    const node = this.cache[k]
    if (!node) {
      // 没找到节点，则要新插入一个节点
      const newNode = new LinkedListNode(k, v)
      this.cache[k] = newNode
      this.addNode(newNode)
      this.size += 1
      // 判断 size 是否查过了 capacity ，超过了则删除尾部节点
      if (this.size > this.capacity) {
        const popNode = this.popTail()
        delete this.cache[popNode.key]
        this.size -= 1
      }
    } else {
      // 找到了，则在链表里面先删除这个节点再把这个节点添加到 head
      this.removeNode(node)
      node.value = v
      this.addNode(node)
    }
  }
}
