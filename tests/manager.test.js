const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        //Positive test
        it("should create an object with a name, id, email, and office if given valid inputs", () => {
            //Arrange
            const name = 'Frodo';
            const id = 2;
            const email = 'Frodo@gmail.com';
            const officeNumber = 127;
            const role = 'Manager';

            //Act
            const obj = new Manager(name, id, email, officeNumber);

            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
        });

        //Exception test
        it("should throw an error if not provided a valid 'name' value", () => {
            //Arrange
            const cb = () => new Manager(1, 2, 'Frodo@gmail.com', 127);
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'id' value", () => {
            //Arrange
            const cb = () => new Manager('Frodo', 'asf', 'Frodo@gmail.com', 127);
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'email' value", () => {
            //Arrange
            const cb = () => new Manager('Frodo', 2, 3, 127);
            const err = new Error(
                "Expected parameter 'email' to be a non empty string in email format"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'officeNumber' value", () => {
            //Arrange
            const cb = () => new Manager('Frodo', 2, 'Frodo@gmail.com', 'asf');
            const err = new Error(
                "Expected parameter 'officeNumber' to be a non-negative number"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
    });
});