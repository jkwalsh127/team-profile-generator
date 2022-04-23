const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('Initialization', () => {
        //Positive test
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            //Arrange
            const name = 'Bilbo';

            //Act
            const obj = new Employee(name);
            
            //Assert
            expect(obj.name).toEqual(name);
        });

        //Exception test
        it("should throw an error if not provided a     'name' value", () => {
            //Arrange
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
    });
});