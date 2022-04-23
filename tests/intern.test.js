const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        //Positive test
        it("should create an object with a name, id, email, and school if given valid inputs", () => {
            //Arrange
            const name = 'Pip';
            const id = 3;
            const email = 'pip@gmail.com';
            const school = 'Shire University';

            //Act
            const obj = new Intern(name, id, email, school);

            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });
        //Exception test
        it("should throw an error if not provided a valid 'name' value", () => {
            //Arrange
            const cb = () => new Intern(1, 3, 'pip@gmail.com', 'Shite University');
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'id' value", () => {
            //Arrange
            const cb = () => new Intern('Pip', 'asf', 'Pip@gmail.com', 'Shire University');
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'email' value", () => {
            //Arrange
            const cb = () => new Intern('Pip', 3, 3, 'Shire University');
            const err = new Error(
                "Expected parameter 'email' to be a non empty string in email format"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
        it("should throw an error if not provided a valid 'school' value", () => {
            //Arrange
            const cb = () => new Intern('Pip', 3, 'Pip@gmail.com', 1);
            const err = new Error(
                "Expected parameter 'school' to be a non empty string"
            );

            //Assert
            expect(cb).toThrowError(err);
        });
    });
});