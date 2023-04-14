const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
function hasKey(key) {
  if (typeof key !== "string") {
    throw new Error("Key must be a string");
  }

  return key in this;
}

// function hasKey(key) {
//   //   write your code here
// }

// // Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));
