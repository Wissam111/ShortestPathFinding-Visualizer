function MinHeap() {
  this.data = [];
}

export default MinHeap;

MinHeap.prototype.insert = function (val) {
  this.data.push(val);
  this.bubbleUp(this.data.length - 1);
};

MinHeap.prototype.bubbleUp = function (index) {
  while (index > 0) {
    var parent = Math.floor((index + 1) / 2) - 1;
    if (this.data[parent].value > this.data[index].value) {
      var temp = this.data[parent];
      this.data[parent] = this.data[index];
      this.data[index] = temp;
    }

    index = parent;
  }
};

MinHeap.prototype.extractMin = function () {
  var min = this.data[0];
  this.data[0] = this.data.pop();
  this.bubbleDown(0);

  return min;
};

MinHeap.prototype.bubbleDown = function (index) {
  while (true) {
    var child = (index + 1) * 2;
    var sibling = child - 1;
    var toSwap = null;
    if (
      this.data[child] != null &&
      this.data[index].value > this.data[child].value
    ) {
      toSwap = child;
    }
    if (
      this.data[sibling] != null &&
      this.data[index].value > this.data[sibling].value &&
      (this.data[child] == null ||
        (this.data[child] !== null &&
          this.data[sibling].value < this.data[child].value))
    ) {
      toSwap = sibling;
    }

    if (toSwap == null) {
      break;
    }

    var temp = this.data[toSwap];
    this.data[toSwap] = this.data[index];
    this.data[index] = temp;

    index = toSwap;
  }
};
