// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 复杂
var spiralOrder = function (matrix) {
    let m = matrix.length;     // 行数
    let n = matrix[0].length;  // 列数

    let res = [];
    let direction = 'right';
    let p1 = 0; // 列index
    let p2 = 0;

    let border = {
        right: n,
        left: -1,
        up: -1,
        down: m
    };

    for (let i = 0; i < m * n; i++) {
        handler();
        function handler() {
            if (direction === 'right') {
                if (p2 < border.right) {
                    res[i] = matrix[p1][p2];
                    p2++;
                } else {
                    p2--;
                    p1++;
                    direction = 'down'
                    border.up++;
                    handler();
                }
            } else if (direction === 'down') {
                if (p1 < border.down) {
                    res[i] = matrix[p1][p2];
                    p1++;
                } else {
                    p1--;
                    p2--;
                    direction = 'left'
                    border.right--;
                    handler();
                }
            } else if (direction === 'left') {
                if (p2 > border.left) {
                    res[i] = matrix[p1][p2];
                    p2--;
                } else {
                    p1--;
                    p2++;
                    direction = 'up'
                    border.down--;
                    handler();
                }
            } else if (direction === 'up') {
                if (p1 > border.up) {
                    res[i] = matrix[p1][p2];
                    p1--;
                } else {
                    p1++;
                    p2++;
                    direction = 'right'
                    border.left++;
                    handler();
                }
            }
        }
    }

    return res;
};


// copy 记录位置，每次判断下次方向是否改变。判断依据 出界 || 已经访问过
var spiralOrder2 = function (matrix) {
    let rows = matrix.length;     // 行数
    let cols = matrix[0].length;  // 列数

    let res = [];
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let directionIndex = 0
    let matrixCopy = new Array(rows).fill(0).map(_ => new Array(cols).fill(false));
    let row = 0; // 行index
    let col = 0; // 列index

    for (let i = 0; i < rows * cols; i++) {
        res[i] = matrix[row][col];
        matrixCopy[row][col] = true;

        let nextrow = row + direction[directionIndex][0];
        let nextcol = col + direction[directionIndex][1];
        console.log(matrixCopy);
        if (
            nextrow < 0 ||
            nextrow >= rows ||
            nextcol < 0 ||
            nextcol >= cols ||
            matrixCopy[nextrow][nextcol]) {
            directionIndex = ++directionIndex % 4;
        }
        row = row + direction[directionIndex][0];
        col = col + direction[directionIndex][1];
    }
    return res;
};

// 洋葱模型

var spiralOrder2 = function (matrix) {
    
    let rows = matrix.length;     // 行数
    let cols = matrix[0].length;  // 列数

    let top = 0, left = 0, right = cols -1, bottom = rows - 1;

    while(bottom > top && right > left) {



    }
};


/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let matrix = new Array(n).fill(0).map(_ => new Array(n).fill(0));
    let row = 0;
    let col = 0;

    let dirextion = [[0, 1], [1, 0], [0 , -1], [-1, 0]];
    let dirextionIndex = 0;
    for (let i = 0; i < n*n; i++) {
        matrix[row][col] = i + 1;

        let NextRow = row + dirextion[dirextionIndex][0];
        let NextCol = col + dirextion[dirextionIndex][1];
        if (NextRow < 0 || NextRow >= n || NextCol < 0 || NextCol >= n || matrix[NextRow][NextCol]) {
            dirextionIndex = ++dirextionIndex % 4;
        }

        row = row + dirextion[dirextionIndex][0];
        col = col + dirextion[dirextionIndex][1];
        console.log(matrix);
    }
    return matrix;
};

