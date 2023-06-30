export class ListNode {
  val: number;
  #next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.#next = next === undefined ? null : next;
  }

  get next() {
    return this.#next;
  }

  set next(node: ListNode | null) {
    this.#next = node;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let result: ListNode | null = null;
  let pointer = head;
  while (pointer) {
    const { next } = pointer;
    pointer.next = result;
    result = pointer;
    pointer = next;
  }

  return result;
}
