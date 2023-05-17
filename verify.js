function verify(text) {
  let open = "([<",
    close = ")]>";
  let pairs = { ")": "(", "]": "[", ">": "<" };
  var checkArray = [];
  for (let i of text) {
    let char = i;
    if (open.indexOf(char) >= 0) checkArray.push(char);
    else if (close.includes(char) && checkArray.pop() !== pairs[char]) return 0;
  }
  if (checkArray.length === 0) {
    return 1;
  }
}

console.log(verify("<>(<>)''"));
