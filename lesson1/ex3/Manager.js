class Manager extends Employee
{
    constructor(...args) {
        super(args[0], args[1], args[2], args[3], args[4]);
        this.arrayOfDevelopers = [];
    }

    /**
     * Добавить разработчика в массив к менеджеру (и вызвать добавление у раздаботчика тоже)
     * @param develop {object} - экземпляр класса Developer
     */
    addDeveloper(develop) {
        if (develop instanceof Developer && this.arrayOfDevelopers.indexOf(develop) === -1) {
            this.arrayOfDevelopers.push(develop);
            develop.setManager(this);
        }
    }

    /**
     * Удалить разработчика из массива менеджера (и вызвать удаление у раздаботчика тоже)
     * @param develop {object} - экземпляр класса Developer
     */
    delDeveloper(develop) {
        let idx = this.arrayOfDevelopers.indexOf(develop);
        if (develop instanceof Developer && idx !== -1) {
            this.arrayOfDevelopers.splice(idx, 1);
            develop.delManager(this);
        }
    }

    /**
     * Вывод всей информации об объекте.
     * @return {string} Вся информация об объекте
     */
    displayInfo() {
        const arrDevName = this.arrayOfDevelopers.map((elem) => elem.name);
        return (this.arrayOfDevelopers.length > 0)
          ? super.displayInfo()
            + "Ваши разработчики: "
            + arrDevName.join(', ')
          : super.displayInfo();
    }
}