function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let result = null;
  let pointer1 = list1;
  let pointer2 = list2;
  let pointerResult;

  while (pointer1 || pointer2) {
    let insert;
    if ((pointer1?.val ?? Infinity) <= (pointer2?.val ?? Infinity)) {
      insert = pointer1;
      pointer1 = pointer1?.next ?? null;
    } else {
      insert = pointer2;
      pointer2 = pointer2?.next ?? null;
    }

    if (!result) {
      result = insert;
      pointerResult = result;
    } else {
      pointerResult.next = insert;
      pointerResult = pointerResult.next;
    }
  }

  return result;
}
