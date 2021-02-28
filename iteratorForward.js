// create our collection, i.e. array

const items = [1, "Khairul", true, 2.34];

// create the iterator

function Iterator(items) {
  this.items = items;
  this.index = 0; // where to start
}

// create methods for our iterator

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },

  next: function () {
    return this.items[this.index++];
  }
}

// create new instance of iterator
const iter = new Iterator(items);
while (iter.hasNext()) {
  console.log(iter.next());
}