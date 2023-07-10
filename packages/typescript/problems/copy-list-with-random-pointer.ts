class ListNode {
  val: number;
  next: ListNode | null;
  random: ListNode | null;
  constructor(val?: number, next?: ListNode, random?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: ListNode | null): ListNode | null {
  const nodeMap = new Map();

  let pointer = head;
  while (pointer) {
    nodeMap.set(pointer, new ListNode(pointer.val));
    pointer = pointer.next;
  }

  pointer = head;
  while (pointer) {
    const newNode = nodeMap.get(pointer);
    newNode.next = nodeMap.get(pointer.next) ?? null;
    newNode.random = nodeMap.get(pointer.random) ?? null;
    pointer = pointer.next;
  }

  return nodeMap.get(head) ?? null;
}
