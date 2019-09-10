export {}

class LinkedListNode {
  key: number
  value: number
  prev: LinkedListNode | null
  next: LinkedListNode | null
  constructor(key: number = 0, value: number = 0) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

type NumObj = {
  [k: number]: LinkedListNode
}

class LRUCache {
  head: LinkedListNode
  tail: LinkedListNode
  cache: NumObj
  capacity: number
  size: number

  constructor(capacity: number) {
    this.cache = {}
    this.capacity = capacity
    this.size = 0
    this.head = new LinkedListNode()
    this.tail = new LinkedListNode()

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  private moveToHead(node: LinkedListNode) {
    this.removeNode(node)
    this.addNode(node)
  }

  private addNode(node: LinkedListNode) {
    node.prev = this.head
    node.next = this.head.next

    this.head.next!.prev = node
    this.head.next = node
  }

  private removeNode(node: LinkedListNode) {
    const prev = node.prev as LinkedListNode
    const next = node.next as LinkedListNode
    prev!.next = next
    next!.prev = prev
  }

  private popTail(): LinkedListNode {
    const res = this.tail.prev as LinkedListNode
    this.removeNode(res)
    return res
  }

  // 用 key 获取一个值
  get(k: number): number {
    const node = this.cache[k]
    if (node) {
      this.moveToHead(node)
      return node.value
    }
    return -1
  }

  // 插入一个值
  put(k: number, v: number) {
    const node = this.cache[k]
    if (!node) {
      const newNode = new LinkedListNode(k, v)
      this.cache[k] = newNode
      this.addNode(newNode)
      this.size += 1
      if (this.size > this.capacity) {
        const popNode = this.popTail()
        delete this.cache[popNode.key]
        this.size -= 1
      }
    } else {
      this.removeNode(node)
      node.value = v
      this.addNode(node)
    }
  }
}

module.exports = LRUCache
