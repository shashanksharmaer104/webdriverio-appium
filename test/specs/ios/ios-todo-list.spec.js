const ListScreen = require('../../screenobjects/ios/list.screen');

describe('Todo List', () => {
    it('Create a Todo List', async () => {
        const title = "Things to do today";
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue(title);
        await ListScreen.createBtn.click();

        //assertion
        await driver.pause(2000);
        await expect(await ListScreen.listNameField(title)).toBeExisting();
    });
});