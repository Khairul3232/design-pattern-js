function Subject() {
  
  // observers that are watching
  this.observers = []; // an array of functions
}

// add methods to our Subject
Subject.prototype = {
  // method that takes in function fn, fn is the observer function, that wants to subscribe to this subject. 
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter(fn => { 
      if (fn !== fnToRemove)
        return fn;
    });
  },

  // function that will notify every observer that are subscribed to the Subject
  trigger: function () {
    this.observers.forEach(fn => {
      fn.call()
    });
  }
}

// Test it out
const subject = new Subject();

function Observer1() {
  console.log("Observer 1 Firing!");
}

function Observer2() {
  console.log("Observer 2 Firing!");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.trigger();
subject.unsubscribe(Observer2);
subject.trigger();