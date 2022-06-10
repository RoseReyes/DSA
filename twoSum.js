// // brute force time coding plus testing the code is 45 mins
// // time complexity is o(n^2)

// const twoSum = (nums, target) => {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// twoSum([2,3,4,5,11], 7); // output: [1,2]
// twoSum([2,3,4,5,11], 9); // output [2,3]
// twoSum([3,2,4], 6); // output [1,2]
// twoSum([2,2], 4); // output [0,1]


// // optimized by using hashmap/object/dictionary
// // time complexity O(n)and space complexity of O(1)

// const twoSumOptimized = (nums, target) => {
//     let hashmap = {};

//     for(let o = 0; o < nums.length; o++) {
//         let currentValue = nums[o];
//         let complement = target - currentValue;

//         if (hashmap[complement] !== undefined)
//             return [hashmap[complement], o];
//         else 
//             hashmap[nums[o]] = o;
//     }
// }

// console.log(twoSumOptimized([2,3,4,5,11], 9));

// using two-pointer approach
const twoSumTwoPointer = (nums, target) => {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    
    while (leftPointer < rightPointer) {
        if (nums[leftPointer] + nums[rightPointer] === target) {
            return [leftPointer, rightPointer];
        } 
        else if (nums[leftPointer] + nums[rightPointer] > target) {
            rightPointer--;    
        }
        else if (nums[leftPointer] + nums[rightPointer] < target) {
            leftPointer++;
        }
    }
}

console.log(twoSumTwoPointer([6,7,8,9,10,11], 16));
