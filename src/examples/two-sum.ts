// two-sum.ts — example: interview-style problem
// Run: Ctrl+Shift+B
export {};

function twoSum(nums: number[], target: number): [number, number] | null {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(nums[i]!, i);
  }
  return null;
}

// --- tests ---
const cases: [number[], number, [number, number] | null][] = [
  [[2, 7, 11, 15], 9,  [0, 1]],
  [[3, 2, 4],      6,  [1, 2]],
  [[3, 3],         6,  [0, 1]],
  [[1, 2],         99, null],
];

for (const [nums, target, expected] of cases) {
  const result = twoSum(nums, target);
  const pass = JSON.stringify(result) === JSON.stringify(expected);
  console.log(`${pass ? "✓" : "✗"} twoSum([${nums}], ${target}) => ${JSON.stringify(result)}`);
}
