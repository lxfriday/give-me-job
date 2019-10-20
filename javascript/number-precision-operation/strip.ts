/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
export function strip(num: number, precision = 12): number {
  // (0.09999999999999998).toPrecision(12) => "0.100000000000"
  // parseFloat("0.100000000000") => 0.1
  return +parseFloat(num.toPrecision(precision))
}
