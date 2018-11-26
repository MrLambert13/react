class Manager extends Employee
{
    arrayOfDevelopers = [];

    addDeveloper(develop) {
        this.arrayOfDevelopers.push(develop);
        develop.setManager(this);
    }
}