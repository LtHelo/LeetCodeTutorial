/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
     不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 示例 1:
     给定数组 nums = [1,1,2],
     函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
     你不需要考虑数组中超出新长度后面的元素
 * 示例 2:
     给定 nums = [0,0,1,1,1,2,2,3,3,4],
     函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
     你不需要考虑数组中超出新长度后面的元素。
 * @param {number[]} nums
 * @return {number}
 */
let nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
  let count  = 0;
  nums.forEach((ele,idx)=>{
    if(nums[count] !== ele){
      count ++
      nums[count] = ele
    }
  })
  return ++count
};

console.log(removeDuplicates(nums))

//结题思路是这样的，设置一个count常量，该常量用来计算数组中有多少个元素是不重复的。
//每次遍历的时候，若nums[count] = ele，则是重复的，count不计数，只有重复才计数，相当于，不重复的判断是一个trigger，而count便是结果。
//这时再进行赋值操作 nums[count] = ele，因为是有序数组，所以前面的元素不需要再计算，nums[count]相当于插值进入了做一个标记，然后再进行以下的计算，直到所有的结果都能计算出来

