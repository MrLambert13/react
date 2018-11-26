/**
 *
 */
class Human
{
    name;
    age;
    dateOfBirth;

    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    setName(value) {
        this.name = value;
    }

    getName() {
        return this.name
    }

    displayInfo() {
        return 'Имя: ' + this.name + '.'
            + ' Возраст: ' + this.age + '.'
            + ' Дата рождения: ' + this.dateOfBirth + '.';
    }
}