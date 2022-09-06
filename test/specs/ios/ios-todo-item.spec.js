import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo Item', () => {
    it('Create a Todo Item and verify', async () => {
        // Create todo list
        const listName = "Things to do today";
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue(listName);
        await ListScreen.createBtn.click();

        //assertion
        await driver.pause(2000);
        await expect(await ListScreen.listNameField(listName)).toBeExisting();
        await ListScreen.listNameField(listName).click();

        // create todo item
        const itemName = "Grocery list";
        await ItemScreen.createItemBtn.click();
        await ItemScreen.titleInput.addValue(itemName);
        await ItemScreen.dueBtn.click();
        // select date
        await ItemScreen.datePickerBtn.click();
        await ItemScreen.dateToBeSelected("Wednesday, September 7").click();
        // go back to main screem
        await ItemScreen.mainWindow.click();
        await ItemScreen.createBtn.click();

        // assertion
        await driver.pause(2000);
        await expect(await ItemScreen.itemNameLbl(itemName)).toBeExisting();
        const dueStatus = await ItemScreen.dueTomorrowLbl;
        await expect(dueStatus).toBeExisting();
    });
});