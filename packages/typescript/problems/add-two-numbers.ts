import { ListNode } from './reverse-linked-list';

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let pointer1 = l1;
  let pointer2 = l2;
  let resultPointer = result;
  let carry = 0;

  while (pointer1 || pointer2) {
    const val1 = pointer1?.val ?? 0;
    const val2 = pointer2?.val ?? 0;
    const nextVal = val1 + val2 + carry;
    carry = Math.floor(nextVal / 10);
    resultPointer.next = new ListNode(nextVal % 10);

    pointer1 = pointer1?.next ?? null;
    pointer2 = pointer2?.next ?? null;
    resultPointer = resultPointer.next;
  }

  if (carry > 0) {
    resultPointer.next = new ListNode(carry);
  }

  return result.next;
}
