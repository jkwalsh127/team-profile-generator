class Employee {
    constructor(name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
        }
        if (isNaN(id) ||  id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
        if (typeof email !== 'string' || !email.trim().length || email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
            throw new Error("Expected parameter 'email' to be a non empty string in email format");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }
    getId() {

    }
    getEmail() {

    }
}

module.exports = Employee;