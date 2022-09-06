describe('iOS Find Elements', () => {
    it('Find element bu Accessibility id', async() => {
        await $('~Alert Views').click();
        await $('~Simple').click(); 

        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('Find by tag name', async () => {
        console.log(await $('XCUIElementTypeStaticText').getText());

        const textElmts = await $$('XCUIElementTypeStaticText');

        for (const element of textElmts) {
            console.log(await element.getText());
        }
    });

    it('Find element by XPath', async() => {
        await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click(); 

        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('Find element by Class Chain', async() => {
        const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click(); 

        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('Find element by Predicate String', async() => {
        const alertText = 'label == "Alert Views"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click(); 

        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it.only('Search and verify text', async() => {
        await $('~Search').click();
        await $('~Default').click();

        const textField = 'type == "XCUIElementTypeSearchField"'; // va;ue for field
        const textFieldElmnt = await $(`-ios predicate string:${textField}`);
        textFieldElmnt.addValue('I love this course!');

        await $('~Clear text').click();

        await expect(await textFieldElmnt).not.toHaveAttr("value"); // attribute 'value' is missing
    });
});