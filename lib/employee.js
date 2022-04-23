class Employee {
    constructor(name, id, email) {
        if (typeof name !== 'string' || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
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