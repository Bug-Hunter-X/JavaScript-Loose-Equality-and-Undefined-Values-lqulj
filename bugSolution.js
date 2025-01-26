function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values
  }

  // ... rest of the function
} 

//Alternative using typeof
function foo(a, b) {
  if (typeof a === 'undefined' || typeof b === 'undefined') {
    return 0; // Handle null and undefined values
  }

  // ... rest of the function
}