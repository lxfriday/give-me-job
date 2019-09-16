/**
 * 回文链表
 * # 234
 */
export class ListNode {
  constructor(public val: number, public next: ListNode | null) {}
}

// 先将链表数据提取出来成为数组，然后判断数组是不是回文数组
export function isPalindromeLinkedList(head: ListNode | null): boolean {
  if (head === null || head.next === null) return true
  const arr: number[] = []
  let current: ListNode | null = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) return false
  }
  return true
}
