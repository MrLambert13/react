class Developer extends Employee
{
    /**
     * Установить/сменить менеджера(и вызвать добавление у менеджера тоже)
     * @param manager {object} - экземпляр класса Developer
     */
    setManager(manager) {
        if (manager instanceof Manager && this.mainManager != manager) {
            //Если уже есть менеджер, то нужно сначала от него удалить разработчика
            if (this.mainManager) {
                this.mainManager.delDeveloper(this);
            }
            //Теперь меняем менеджера и добавляем ему нашего разработчика
            this.mainManager = manager;
            manager.addDeveloper(this);
        }
    }

    delManager(manager) {
        if (manager instanceof Manager) {
            this.mainManager = null;
            manager.delDeveloper(this);
        }
    }

    displayInfo() {
        return (this.mainManager)
          ? super.displayInfo()
          + "Ваш менеджер: "
          + this.mainManager.name
          : super.displayInfo();
    }
}