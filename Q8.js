//Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
  
    while (left <= right) {
      if (height[left] <= height[right]) {
        if (height[left] > leftMax) {
          leftMax = height[left];
        } else {
          totalWater += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] > rightMax) {
          rightMax = height[right];
        } else {
          totalWater += rightMax - height[right];
        }
        right--;
      }
    }
  
    return totalWater;
  }
//You can use the trap function to compute the amount of water trapped for the given elevation maps:
const elevationMap1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const waterTrapped1 = trap(elevationMap1);
console.log(waterTrapped1); // Output: 6

const elevationMap2 = [4, 2, 0, 3, 2, 5];
const waterTrapped2 = trap(elevationMap2);
console.log(waterTrapped2); // Output: 9
