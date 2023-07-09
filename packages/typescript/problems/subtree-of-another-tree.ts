import { TreeNode } from './invert-binary-tree';

function buildTreeQueue(root: TreeNode | null): (TreeNode | null)[] {
  const queue = [root];

  function recurse(node: TreeNode | null): void {
    if (!node) return;

    queue.push(node.left);
    recurse(node.left);

    queue.push(node.right);
    recurse(node.right);
  }

  recurse(root);

  return queue;
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const rootQueue = buildTreeQueue(root);
  const subQueue = buildTreeQueue(subRoot);

  for (let i = 0; i < rootQueue.length; i++) {
    if (rootQueue[i]?.val === subQueue[0]?.val) {
      if (
        subQueue.every((node, j) => {
          const rootNode = rootQueue[i + j];
          if (!node && node !== rootNode) return false;
          if (node?.val !== rootNode?.val) return false;
          return true;
        })
      )
        return true;
    }
  }

  return false;
}
