class Employee extends Human
{
    salary;
    department;

    constructor(props, salary, department ) {
        super(props);
        this.salary = salary;
        this.department = department;
    }


    displayInfo() {
        return super.displayInfo()
            + " Зарплата: " + this.salary + "."
            + " Отдел: " + this.department + ".";
    }
}