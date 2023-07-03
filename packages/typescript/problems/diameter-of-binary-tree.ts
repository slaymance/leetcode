import { TreeNode } from './invert-binary-tree';

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    const leftMax = 1 + dfs(node.left);
    const rightMax = 1 + dfs(node.right);

    max = Math.max(max, leftMax + rightMax - 2);

    return Math.max(leftMax, rightMax);
  };

  dfs(root);

  return max;
}
