
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

// export const mergeSort = array => {
//     if(array.length === 1) return array;
//     const middleIndex = Math.floor(array.length/2);
//     const firstHalf = mergeSort(array.slice(0, middleIndex));
//     const secondHalf = mergeSort(array.slice(middleIndex));
//     const sortedArray = [];
//     let i=0;
//         j=0;
//     while(i < firstHalf.length && j < secondHalf.length){
//         if(firstHalf[i] < secondHalf[j]){
//             sortedArray.push(firstHalf[i++]);
//         } else{
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while(i<firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while(j<secondHalf.length) sortedArray.push(secondHalf[j++]);
//     return sortedArray;
// }

export function getBubbleSortAnimations(arr){
    const bubbleSortAnimations = [];
          for (let i = 0; i < arr.length; i++) {
              for(let j=0;j<arr.length-i-1;j++){
                if (arr[j] > arr[j + 1]) {
                let index=arr.length-i-j-1;
                bubbleSortAnimations.push([j,j+1])
                bubbleSortAnimations.push([j,j+1])
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                bubbleSortAnimations.push([j,tmp])
                arr[j + 1] = tmp;
                }
            }
          }
          console.log(arr);
    return bubbleSortAnimations
};

// QUICK SORT==============================================

//takes leftIndex Item and swaps it with rightIndex item.
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

export function quickSortFunction(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortFunction(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortFunction(items, index, right);
        }
    }
    return items;
}