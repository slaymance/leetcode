import { TreeNode } from './invert-binary-tree';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const pQueue: (TreeNode | null)[] = [p];
  const qQueue: (TreeNode | null)[] = [q];

  for (let i = 0; i < pQueue.length; i++) {
    const pNode = pQueue[i];
    const qNode = qQueue[i];

    if (pNode?.val !== qNode?.val) return false;
    if (pNode) pQueue.push(pNode.left, pNode.right);
    if (qNode) qQueue.push(qNode.left, qNode.right);
  }

  return true;
}
