function combineStrings(str1: string | number, str2: string | number): string {
  return String(str1) + String(str2);
}

let combined = combineStrings(123, "456"); // No Error
console.log(combined); // Output: "123456"

let combined2 = combineStrings("123", 456); // No Error
console.log(combined2); // Output: "123456"