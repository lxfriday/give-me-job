/**
 * UTF-8 编码验证
 * #393
 */

export function validUtf8(data: number[]) {
  let numberOfBytesToProcess = 0
  let mask1 = 1 << 7
  let mask2 = 1 << 6
  for (let i = 0; i < data.length; i++) {
    if (numberOfBytesToProcess === 0) {
      let mask = 1 << 7
      while ((mask & data[i]) !== 0) {
        numberOfBytesToProcess += 1
        mask = mask >> 1
      }
      if (numberOfBytesToProcess === 0) {
        continue
      }
      if (numberOfBytesToProcess > 4 || numberOfBytesToProcess === 1) {
        return false
      }
    } else {
      // 1000 0000, 0100 0000
      // 不是 10 开头
      if (!((data[i] & mask1) !== 0 && (mask2 & data[i]) === 0)) return false
    }
    numberOfBytesToProcess -= 1
  }
  return numberOfBytesToProcess === 0
}
