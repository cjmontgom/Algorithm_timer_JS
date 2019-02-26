function AlgorithmTimer () {
    this.reverseData = [];
    this.sortData = [];
};

AlgorithmTimer.prototype.createRandArray = function(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * Math.floor(100)))
  };
  return arr;
};

AlgorithmTimer.prototype.average = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  };
  var avg = total / array.length;
  return avg
}

AlgorithmTimer.prototype.timeReverse = function(array) {
  var t0 = performance.now();
  array.reverse();
  var t1 = performance.now();
  console.log("Call to 'reverse' took " + (t1 - t0) + " milliseconds.");
  this.dealWithData('reverseData', t1 - t0);
  return (t1 - t0)
};

AlgorithmTimer.prototype.timeSort = function(array) {
  var t0 = performance.now();
  array.sort();
  var t1 = performance.now();
  console.log("Call to 'sort' took " + (t1 - t0) + " milliseconds.");
  this.dealWithData('sortData', t1 - t0);
  return (t1 - t0)
};

AlgorithmTimer.prototype.dealWithData = function(dataName, timeTaken) {
  console.log(timeTaken); // unless it's zero.
  dataName === 'sortData' ? this.sortData.push(timeTaken) : this.reverseData.push(timeTaken);
};
