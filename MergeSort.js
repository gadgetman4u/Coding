function helper (A, start, end) {
  console.log("start = " + start + ", end = " + end);
  
  // leaf worker
  if (start == end) return
  
  else {
    // internal node worker
    mid = (start + end + 1) / 2
    // delegate to two subordinate workers
    aux = []
    console.log("Left");
    helper(A, start, mid-1);
    //start1 = start;
    console.log("Right");
    helper(A, mid, end);
  }
    
  // merge the two sorted halves
  console.log("Merging two sorted halves");
  i = start;
  j = mid;
  
  while (i < mid && j <= end) {
    if (A[i] <= A[j]) {
      aux.push(A[i]);
      i++;
    }
    else {
      aux.push(A[j]);
      j++;
    }
  }
  //console.log(aux);

  // gather phase, if one of the pointers has dropped off 
  while (i < mid) {
    aux.push(A[i]);
    i++;
  }

  while (j < end) {
    aux.push(A[j]);
    j++
  }

  //console.log(aux);
  //return aux;
}

function mergeSort (A) {
  //const aux = [];
  helper(A, 0, A.length-1);
  console.log("helper (A, 0, " + A.length-1);
  //return aux;
}

const A = [3, 1, 8, 6, 5, 2, 4, 7];
console.log(A);
sorted_A = mergeSort(A);
console.log(sorted_A);