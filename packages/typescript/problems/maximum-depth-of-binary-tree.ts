import { TreeNode } from './invert-binary-tree';

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
}
