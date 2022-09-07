import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo Item', () => {

    before(async () => {
        console.log("BEFORE HOOK !!")
        // Create todo list
        const listName = "Things to do today";
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue(listName);
        await ListScreen.createBtn.click();

        //assertion
        await driver.pause(2000);
        await expect(await ListScreen.listNameField(listName)).toBeExisting();
        await ListScreen.listNameField(listName).click();
    });

    beforeEach(async () => {
        console.log("BEFORE EACH HOOK !!");
    });

    afterEach(async () => {
        console.log("AFTER EACH HOOK !!");
    });

    after(async () => {
        console.log("AFTER HOOK !!");
    });

    it('Create a Todo Item and verify', async () => {
        
        // create todo item
        const itemName = "Grocery list";
        await ItemScreen.createItemBtn.click();
        await ItemScreen.titleInput.addValue(itemName);
        await ItemScreen.dueBtn.click();
        // select date
        await ItemScreen.datePickerBtn.click();
        await ItemScreen.dateToBeSelected("Thursday, September 8").click();
        // go back to main screem
        await ItemScreen.mainWindow.click();
        await ItemScreen.createBtn.click();

        // assertion
        await driver.pause(2000);
        await expect(await ItemScreen.itemNameLbl(itemName)).toBeExisting();
        const dueStatus = await ItemScreen.dueTomorrowLbl;
        await expect(dueStatus).toBeExisting();
    });


    // For testing purpose only
    it('test case 2', async () => {
        console.log("test case 2");
    });

    // For testing purpose only
    it('test case 3', async () => {
        console.log("test case 3");
    });
});