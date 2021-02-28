// set the singleton to an immediately invoked function expression
const Singleton = (function () { 
  // put any object constructor for any of the objects that we want to limit

  function ProcessManager() {
    this.numProcess = 0;

  }

  // store the only one instance to the ProcessManager
  let pManager;

  // create this instance
  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => { 
      if (!pManager) { 
        // if pManager is null create a new instance
        pManager = createProcessManager();
        return pManager;
      }
      else {
        return pManager;
      }
    }
  }
})();


// create new instance of our processManager
const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);