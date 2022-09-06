describe('Android elements tests', () => { //group of all test cases
    it('Find element by accessibility id', async () => { //single test case
        // find element by accessibility id
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');

        // assertion
        await expect(className).toHaveText('API Demos');
    });

    it('Find element by Xpath', async () => {
        // find element by class name
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        // find element by resource-id
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        // find by class - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find element by UIAutomator', async () => {
        // find element by UIAutomator
        await $('android=new UiSelector().textContains("Alert")').click();

    });

    it('Find elements scenario', async () => {
        const expectedList = ["API Demos","Access'ibility","Accessibility",
        "Animation","App","Content","Graphics","Media","NFC","OS","Preference",
        "Text","Views"];
        const actualList = [];

        // find all element by class name
        const textList = await $$('android.widget.TextView');

        // loop through element to get text of each element
        for(const element of textList) {
            actualList.push(await element.getText()); 
        }

        // asert list
        await expect(actualList).toEqual(expectedList);
    });

    it('Working with text field', async () => {
        // find and click Views option
        await $('~Views').click();

        // find and click Auto Complete option
        await $('~Auto Complete').click();

        // find and click Screen top option
        await $('~1. Screen Top').click();

        // type country name
        const textField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]');
        textField.addValue("India");

        // assertion 
        //await expect(await textField.getText()).toEqual("India");
        await expect(textField).toHaveText("India");
    });

});