import { ListNode } from './reverse-linked-list';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || !head.next) return null;

  let pointer1 = head;
  let pointer2 = head;

  let count1 = 0;
  let count2 = 0;

  while (pointer2 && pointer2.next) {
    pointer2 = pointer2.next;
    count2++;

    if (count2 - count1 > n) {
      pointer1 = pointer1.next as ListNode;
      count1++;
    }
  }

  if (count2 - count1 < n) {
    return pointer1.next;
  } else {
    pointer1.next = pointer1?.next?.next ?? null;
    return head;
  }
}
