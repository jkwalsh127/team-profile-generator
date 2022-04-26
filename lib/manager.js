const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        // if (isNaN(officeNumber) ||  officeNumber < 0) {
        //     throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        // }
            this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;