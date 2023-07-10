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
  const oldList: [ListNode, number | null][] = [];
  const newList: ListNode[] = [];

  let pointer = head;
  while (pointer) {
    oldList.push([pointer, null]);
    newList.push(new ListNode(pointer.val));
    pointer = pointer.next;
  }

  for (const pair of oldList) {
    pair[1] = pair[0].random
      ? oldList.findIndex(([node]) => node === pair[0].random)
      : null;
  }

  for (let i = 0; i < newList.length; i++) {
    const randomIndex = oldList[i][1];
    newList[i].next = newList[i + 1] ?? null;
    newList[i].random = randomIndex !== null ? newList[randomIndex] : null;
  }

  return newList[0] ?? null;
}
