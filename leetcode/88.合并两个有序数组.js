// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 先合并，在排序，不要改变nums1的引用关系。
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    let l = m + n;
    for (let i = 0; i < l - 1; i++) {
        for (let j = i + 1; j < l; j ++) {
            if (nums1[i] > nums1[j]) {
                let temp = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = temp;
            }
        }
    }
};

// 双指针 时间 O(n+m)  空间O(n+m)
var merge2 = function(nums1, m, nums2, n) {
    let nums1Copy = [];
    let p1 = 0, p2 = 0;
    while (p1 < m || p2 < n) {
        let smallNum;
        if (p1 === m) {
            smallNum = nums2[p2++];
        } else if (p2 === n) {
            smallNum = nums1[p1++];
        } else {
            smallNum = nums1[p1] <= nums2[p2] ? nums1[p1++] : nums2[p2++];
        }
        nums1Copy[p1 + p2 -1] = smallNum;
    }

    return nums1Copy
};


// 逆向双指针 时间 O(n+m)  空间O(n+m)
var merge3 = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;
    let tail = m + n -1;
    var cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur =nums1[p1--];
        } else {
            cur =nums2[p2--];
        }
        nums1[tail--] = cur;
    }
};


// merge2(nums1, 3, [2,5,6], 3);


// 找出两个升序数组中的 第 i 小的值 

function findSmall(arr1, arr2, val) {
    let num = 0;
    let p1 = 0;
    let p2 = 0;

    while(p1 < arr1.length || p2 < arr2.length) {
        let flag = 1
        if(p1 === arr1.length) {
            p2++;
            flag = 2;
        } else if (p2 === arr2.length) {
            p1++;
            flag = 1;
        } else {
            if (arr1[p1] > arr2[p2]) {
                p2++;
                flag = 2;
            } else {
                p1++
                flag = 1;
            }
        }
        num++;
        if (num === val) {
            return [flag, flag === 1 ? p1-- : p2 --]
        }
    }
    return 'not found'
}

console.log(findSmall([1,3,5], [2,4,5], 6))

