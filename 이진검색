function binarySearchTest(arr,target){
  let start = 0;
  let end = arr.length-1;
  let middle = ~~((start + end) / 2);

  while(arr[middle] !== target && start <= end) {
    if(target < arr[middle]) {
      end = middle - 1;
    }

    if(target > arr[middle]) {
      start = middle + 1;
    }

    middle = ~~((start + end) / 2);
  }

  if(arr[middle] === target) return middle;
  return -1;
}
