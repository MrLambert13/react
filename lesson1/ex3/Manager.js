class Manager extends Employee
{
    arrayOfDevelopers = [];

    addDeveloper(develop) {
        if (develop instanceof Developer && this.arrayOfDevelopers.indexOf(develop) == -1) {
            this.arrayOfDevelopers.push(develop);
            develop.setManager(this);
        }

    }
}