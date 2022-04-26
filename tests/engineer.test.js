const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        //Positive test
        it("should create an object with a name, id, email, and github if give valid inputs", () => {
            //Arrange
            const name = 'Sam';
            const id = 4;
            const email = 'sam@gmail.com';
            const github = 'samwise';
            const role = 'Engineer';

            //Act
            const obj = new Engineer(name, id, email, github);

            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
            expect(obj.getRole()).toEqual(role);
            expect(obj.getGitHub()).toEqual(github);
        });
        //Exception test
        it("should throw an error if not provided a valid 'name' value", () => {
            //Arrange
            const cb = () => new Engineer(1, 4, 'sam@gmail.com', 'samwise');
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'id' value", () => {
            //Arrange
            const cb = () => new Engineer('Sam', 'asf', 'sam@gmail.com', 'samwise');
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'email' value", () => {
            //Arrange
            const cb = () => new Engineer('Sam', 4, 3, 'samwise');
            const err = new Error(
                "Expected parameter 'email' to be a non empty string in email format"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'github' value", () => {
            //Arrange
            const cb = () => new Engineer('Sam', 4, 'sam@gmail.com', 1);
            const err = new Error(
                "Expected parameter 'github' to be a non empty string"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
    });
});