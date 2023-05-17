function originalFn(s, a, b) {
  var match_empty = /^$/;
  if (s.match(match_empty)) {
    return -1;
  } else {
    var i = s.length - 1;
    var aIndex = -1;
    var bIndex = -1;

    while (aIndex == -1 && bIndex == -1 && i >= 0) {
      if (s.substring(i, i + 1) == a) aIndex = i;
      if (s.substring(i, i + 1) == b) bIndex = i;

      i--;
    }

    if (aIndex != -1) {
      if (bIndex == -1) return aIndex;
      else return Math.max(aIndex, bIndex);
    } else {
      if (bIndex != -1) return bIndex;
      else return -1;
    }
  }
}

function optimized(s, a, b) {
  if (s === "") {
    return -1;
  }

  var aIndex = s.lastIndexOf(a);
  var bIndex = s.lastIndexOf(b);

  if (aIndex === -1 && bIndex === -1) {
    return -1;
  } else {
    return Math.max(aIndex, bIndex);
  }
}

console.log( "original func" , originalFn("abgub", "a", "b"));
console.log( "optimized func" ,optimized("abgub", "a", "b"));
