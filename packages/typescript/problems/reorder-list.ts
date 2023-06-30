import { ListNode } from './reverse-linked-list';

function reorderList(head: ListNode | null): void {
  const nodeStack: ListNode[] = [];
  let pointer = head;

  while (pointer) {
    const { next } = pointer;
    pointer.next = null;
    nodeStack.push(pointer);
    pointer = next;
  }

  for (const node of nodeStack) {
    const tail =
      node === nodeStack[nodeStack.length - 1] ? null : nodeStack.pop() ?? null;
    node.next = tail;
  }

  nodeStack.forEach((node, i, src) => {
    if (node.next) node.next.next = src[i + 1] ?? null;
  });
}

function generateTestCase(vals: number[]): ListNode | null {
  let testCase: ListNode | null = null;
  let pointer: ListNode | null = null;
  for (const val of vals) {
    if (!testCase) {
      testCase = new ListNode(val);
      pointer = testCase;
    } else if (pointer) {
      pointer.next = new ListNode(val);
      pointer = pointer?.next;
    }
  }

  return testCase;
}

function parseResult(list: ListNode | null): number[] {
  const result: number[] = [];
  let pointer = list;
  while (pointer) {
    result.push(pointer.val);
    pointer = pointer.next;
  }

  return result;
}

const testCase1 = generateTestCase([1, 2, 3, 4]);
reorderList(testCase1);
console.log(`Expected: 1,4,2,3 : Actual: ${parseResult(testCase1)}`);

const testCase2 = generateTestCase([1, 2, 3, 4, 5]);
reorderList(testCase2);
console.log(`Expected: 1,5,2,4,3 : Actual: ${parseResult(testCase2)}`);
