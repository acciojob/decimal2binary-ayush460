function decimalToBinary(decimalNum) {
  let binaryNum = ''; // Initialize an empty string for the binary number
  let quotient = decimalNum; // Initialize the quotient to the decimal number

  while (quotient !== 0) {
    let remainder = quotient % 2; // Get the remainder of dividing the quotient by 2
    binaryNum = remainder + binaryNum; // Add the remainder to the left of the binary number string
    quotient = Math.floor(quotient / 2); // Divide the quotient by 2 and round down
  }

  return binaryNum; // Return the binary number as a string
}