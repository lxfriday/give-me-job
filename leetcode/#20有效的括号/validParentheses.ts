/**
 * 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * #20
 */

type leftParenthese = '(' | '{' | '['
type rightParenthese = ')' | '}' | ']'
type coupeType = {
  [key in leftParenthese]: rightParenthese
}

export function isValidParentheses1(str: string): boolean {
  const stack: leftParenthese[] = []
  const couple: coupeType = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    if (['(', '{', '['].includes(c)) {
      stack.push(<leftParenthese>c)
      continue
    }

    if ([')', '}', ']'].includes(c)) {
      if (!stack.length) return false
      const l = stack.pop()
      if (couple[<leftParenthese>l] !== c) return false
    }
  }

  // 判断数组有没有剩余，有的话肯定是没有匹配完
  if (stack.length) return false
  return true
}
