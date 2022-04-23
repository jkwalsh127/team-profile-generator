const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        if (isNaN(officeNumber) ||  officeNumber < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }
            this.officeNumber = officeNumber
    }
}

module.exports = Manager;