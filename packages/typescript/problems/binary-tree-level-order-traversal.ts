import { TreeNode } from './invert-binary-tree';

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const traversal = [[root]];

  for (const level of traversal) {
    const nextLevel: TreeNode[] = [];

    for (const node of level) {
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    if (nextLevel.length) traversal.push(nextLevel);
  }

  return traversal.map((level) => level.map((node) => node.val));
}
