const { sayHello, addToAnyArray } = require("../functions/ourFunctions");
const { expect } = require("chai");

describe("Your tests for our functions", function () {
  describe("Function sayHello Tests", function () {
    //Here you will write tests for the sayHello function
    it("sayHello should return 'Name must be a string' if the argument passed is not a string", function () {
      const result = sayHello(23)
      expect(result).to.equal('Name must be a string')
    });

    it("sayHello should return a template literal with the format of `hello ${name}`", function () {
      const greetingMessage = sayHello('Bobby')
      expect(greetingMessage).to.equal('hello Bobby')
    });
  });

  describe("Function addToAnyArray Tests", function () {
    //Here you will write tests for the addToAnyArray function
    it("function addToAnyArray should return the array being passed as an argument", function () {
      const starterArray = [1, 2, 3, 4, 5, 6]
      expect(addToAnyArray(starterArray, 9)).to.equal(starterArray)
    });

    it("calling the function once with an empty input array should return an array with a length of 1", function () {
      expect(addToAnyArray([], 6)).to.have.lengthOf(1)
    });

    it("calling the function once with an empty input array should return an array with a one element, the element passed through as an arugment", function () {

      expect(addToAnyArray([], 9)).to.deep.equal([9])
    });

    it("calling the function with an input should return an array where the last element is the element that was passed as an argument", function () {
      //For example
      //addToAnyArray("one")
      //addToAnyArray("two")
      //addToAnyArray("three")
      //The last element in the array should be "three" (["one", "two", "three"])
      const arrayToAddTo = []
      addToAnyArray(arrayToAddTo, 1)
      addToAnyArray(arrayToAddTo, 2)
      addToAnyArray(arrayToAddTo, 3)
      expect(arrayToAddTo[2]).to.equal(3)
    });
  });
});
