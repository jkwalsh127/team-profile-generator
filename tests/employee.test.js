const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        //Positive test
        it("should create an object with a name, id, and email if provided valid arguements", () => {
            //Arrange
            const name = 'Bilbo';
            const id = '1';
            const email = 'Bilbo@gmail.com';
            const role = 'Employee';

            //Act
            const obj = new Employee(name, id, email);

            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
        });
        //Exception test
        it("should throw an error if not provided a 'name' value", () => {
            //Arrange
            const cb = () => new Employee(1, 2, 'bilbo@gmail.com');
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        //Exception test
        it("should throw an error if not provided a valid 'id' number", () => {
            //Arrange
            const cb = () => new Employee('bilbo', 'asf', 'bilbo@gmail.com');
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        //Exception test
        it("should throw an error if not provided a appropriate 'email' value", () => {
            //Arrange
            const cb = () => new Employee('bilbo', 2, 3);
            const err = new Error(
                "Expected parameter 'email' to be a non empty string in email format"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
    });
});