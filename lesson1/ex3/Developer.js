class Developer extends Employee
{
    managerName;

    setManager(manager) {
        this.managerName = manager.name;
        manager.addDeveloper(this);
    }

}