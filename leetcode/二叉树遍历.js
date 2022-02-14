// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/che-di-chi-tou-er-cha-shu-de-qian-zhong-hou-xu-d-2/
// 递归算法的三要素
// 1. 确定递归函数的参数 和 返回值
// 2. 确定终止条件
// 3. 确定单层递归逻辑

//         5
//       /   \
//      4     6
//    /  \   /  \
//   1    2 7    8
// 前序结果： 5, 4, 1, 2, 6, 7, 8 中 左 右
// 中序结果： 1, 4, 2, 5, 7, 6, 8 左 中 右
// 后序结果： 1, 2, 4, 7, 8, 6, 5 左 右 中


//         5
//       /   \
//      4     6
// 前序结果： 5, 4, 6 中 左 右
// 中序结果： 4, 5, 6 左 中 右
// 后序结果： 4, 6, 5 左 右 中
// 前序递归
 function inorderTraversal(root) {
    
    let result = [];

    function traversal(node,res = []) {
        if(!node) return;
        // res.push(node.val); 前序
        traversal(node.left, res);
        // res.push(node.val); 中序
        traversal(node.right, res);
        // res.push(node.val); 后序

    }

    traversal(root, result);
    return result;
 }


