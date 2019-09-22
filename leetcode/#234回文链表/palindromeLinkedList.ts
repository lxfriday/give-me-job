/**
 * 回文链表
 * # 234
 */
export class ListNode {
  constructor(public val: number, public next: ListNode | null) {}
}

// 先将链表数据提取出来成为数组，然后判断数组是不是回文数组
export function isPalindromeLinkedList(head: ListNode | null): boolean {
  // 两个边界条件，都属于是回文链表
  if (head === null || head.next === null) return true
  // arr 存储所有节点中的 val
  const arr: number[] = []
  // 遍历链表时的临时节点
  let current: ListNode | null = head
  // 一直遍历链表, 用 current = current.next ，直到 current 不指向任何节点
  while (current) {
    // 把节点的值存到 arr
    arr.push(current.val)
    // 更换当前遍历的节点
    current = current.next
  }
  // 判断节点值得数组是否满足对称的特性
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false
  }
  // 遍历完成，没有不等的情况，判断是一个回文链表
  return true
}
