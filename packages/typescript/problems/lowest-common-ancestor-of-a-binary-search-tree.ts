import { TreeNode } from './invert-binary-tree';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;
  if (!p) return q;
  if (!q) return p;

  const [minNode, maxNode] = p.val <= q.val ? [p, q] : [q, p];
  let pointer: TreeNode | null = root;

  while (pointer) {
    if (pointer.val >= minNode.val && pointer.val <= maxNode.val)
      return pointer;

    pointer = pointer.val >= maxNode.val ? pointer.left : pointer.right;
  }

  return null;
}
