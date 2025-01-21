import bubbleSort from "./sorting.js";
import { linearSearch as ls, binarySearch } from "./searching.js";

// const { linearSearch, binarySearch } = require("./searching.js");

const arr = [2, 32, 32, 4, 23, 23, 52, 32, 42];

bubbleSort(arr);
console.log(arr);
console.log(ls(arr, 2));
console.log(binarySearch(arr, 2));
