/**
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
 *
 * # 146
 * @link https://leetcode-cn.com/problems/lru-cache
 */

/**
 * @param {number} capacity
 */
export {}

class LRUCache {
  cache: Map<number, number>
  constructor(public capacity: number) {
    this.cache = new Map()
  }
  // 用 key 获取一个值
  get(key: number): number {
    const v = this.cache.get(key)
    if (v === undefined) {
      return -1
    } else {
      this.moveToEnd(key, v)
      return v
    }
  }

  moveToEnd(k: number, v: number) {
    this.cache.delete(k)
    this.cache.set(k, v)
  }

  // 插入一个值
  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }
}

module.exports = LRUCache
