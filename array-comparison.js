function maxInArray(number) {
  let largest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log(element);
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const height = [156, 135, 148, 168, 150, 161, 173, 166];
const tallest = maxInArray(height);
console.log("tallest person", tallest);
