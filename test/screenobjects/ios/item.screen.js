class ItemScreen {

    get createItemBtn() {
        return $('//*[@value="Create item"]');
    }

    get titleInput() {
        return $('//*[@value="Title"]');
    }

    get dueBtn() {
        return $('//*[@value="Due"]');
    }

    get datePickerBtn() {
        return $('~Date Picker');
    }

    dateToBeSelected(date) {
        return $(`~${date}`);
    }

    get mainWindow() {
        return $('//XCUIElementTypeWindow[@index="2"]');
    }

    get createBtn() {
        return $('~Create');
    }

    get dueTomorrowLbl() {
        return $('~Due Tomorrow');
    }

    itemNameLbl(item) {
        return $(`${item}`);
    }

}

module.exports = new ItemScreen();