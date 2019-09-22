import { ListNode, isPalindromeLinkedList } from './palindromeLinkedList'

/**
 * 链表创建器
 * @param numarr
 */
function linkedListCreator(numarr: number[]) {
  if (!numarr.length) return null
  const head = new ListNode(numarr[0], null)
  let prev: ListNode = head
  for (let i = 1; i < numarr.length; i++) {
    const next = new ListNode(numarr[i], null)
    prev.next = next
    prev = next
  }
  return head
}

test('#234 回文链表', () => {
  expect(isPalindromeLinkedList(linkedListCreator([1, 2, 3]))).toBe(false)
  expect(isPalindromeLinkedList(linkedListCreator([1, 2, 1]))).toBe(true)
  expect(isPalindromeLinkedList(linkedListCreator([]))).toBe(true)
  expect(isPalindromeLinkedList(linkedListCreator([1, 2, 3, 4, 4, 3, 2, 1]))).toBe(true)
})
