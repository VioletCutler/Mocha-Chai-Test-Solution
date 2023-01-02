const functions = require("../functions/ourFunctions");
const { expect } = require("chai");

describe("Your tests for our functions", function () {
  describe("Function sayHello Tests", function () {
    //Here you will write tests for the sayHello function
    xit("sayHello should return 'Name must be a string' if the argument passed is not a string", function () {});

    xit("sayHello should return a template literal with the format of `hello ${name}`", function () {});
  });

  describe("Function addToAnyArray Tests", function () {
    //Here you will write tests for the addToAnyArray function
    xit("function addToAnyArray should return the array being passed as an argument", function () {});

    xit("calling the function once with an empty input array should return an array with a length of 1", function () {});

    xit("calling the function once with an empty input array should return an array with a one element, the element passed through as an arugment", function () {});

    xit("calling the function with an input should return an array where the last element is the element that was passed as an argument", function () {
      //For example
      //addToAnyArray("one")
      //addToAnyArray("two")
      //addToAnyArray("three")
      //The last element in the array should be "three" (["one", "two", "three"])
    });
  });
});
