function findGroups(arr) {
  var max = 0;
  var groups = {};
  var res = '';
  for(var i = 0; i<arr.length; i++) {
    var char = arr[i];
    groups[char] = (groups[char] || 0) + 1;
  }

  for (var c in groups) {
    if(groups[c] > max) {max = groups[c]; res = c; }
  }
  return max;
}
