function selectionSort(arr) {
  let sorted = []

  while (arr.length > 0) {
    const minVal = Math.min(...arr)
    remove(arr, minVal)
    sorted.push(minVal)
  }

  return sorted
}

function remove(array, item) {
  let index = array.indexOf(item)
  if (index !== -1) {
    array.splice(index, 1)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
