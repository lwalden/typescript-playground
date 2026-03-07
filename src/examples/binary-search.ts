// binary-search.ts — example: classic algorithm
// Run: Ctrl+Shift+B
export {};

function binarySearch(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid]! < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

const sorted = [1, 3, 5, 7, 9, 11, 13, 17, 23];
console.log("Array:", sorted.join(", "));

const targets = [7, 1, 23, 4, 11];
for (const t of targets) {
  const idx = binarySearch(sorted, t);
  console.log(`  search(${t}) => index ${idx} ${idx === -1 ? "(not found)" : `(value: ${sorted[idx]})`}`);
}
