// my_test.js

// testing the log function
log("Hello from my_test.js!");

// create a simple loging system for me, the developer
function log(message) {
    console.log(message);
}

// create a simple test class that logs and accepts arguments to test as well
class Test {
    constructor(name) {
        this.name = name;
    }

    test(arg1, arg2) {
        log(`Testing ${this.name}`);
        // equality test
        if (arg1 === arg2) {
            log(`Test passed!`);
        } else {
            log(`Test failed!`);
        }
    }
}