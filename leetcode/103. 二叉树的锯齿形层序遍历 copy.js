/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let ret = [];
    let nodes = []
    if (!root) {
        return []
    }
    nodes.push(root);
    let reversed = false;
    
    while (nodes.length > 0) {
        let tempRet = []
        let tempNodes = [];
        for (var node of nodes) {
            tempRet.push(node.val);
            if (node.left) tempNodes.push(node.left);
            if (node.right) tempNodes.push(node.right);
        }
        nodes = tempNodes;
        if(reversed) tempRet.reverse();
        ret.push(tempRet);
        reversed = !reversed;
    }

    return ret
};