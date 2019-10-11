"use strict";
exports.__esModule = true;
function rotateArray1(arr, target) {
    var lo = 0;
    var hi = arr.length - 1;
    while (lo < hi) {
        var mid = lo + ((hi - lo) >> 1);
        if (Number(arr[0] > target) ^ Number(arr[0] > arr[mid]) ^ Number(target > arr[mid])) {
            lo = mid + 1;
        }
        else
            hi = mid;
    }
    return lo === hi && arr[lo] === target ? lo : -1;
}
exports.rotateArray1 = rotateArray1;
function rotateArray(arr, target, lo, hi) {
    var low = lo === undefined ? 0 : lo;
    var high = hi === undefined ? arr.length - 1 : hi;
    var mid = low + ((high - low) >> 1);
    if (low > high)
        return -1;
    if (arr[mid] === target)
        return mid;
    else if (arr[mid] > arr[0]) {
        // arr[mid] > target >= arr[0]
        if (arr[mid] > target && target >= arr[0]) {
            return rotateArray(arr, target, low, mid - 1);
        }
        else {
            return rotateArray(arr, target, mid + 1, high);
        }
    }
    else {
        // arr[mid] < arr[0]
        if (arr[mid] < target && target <= arr[high])
            return rotateArray(arr, target, mid + 1, high);
        return rotateArray(arr, target, low, mid - 1);
    }
}
exports.rotateArray = rotateArray;
// Number(arr[0] > arr[mid]) 表示 mid 左侧被拆开了
// Number(arr[0] > target)
