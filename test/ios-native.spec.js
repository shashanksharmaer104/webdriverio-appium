describe('iOS Native Feature', () => {
    it('Working with alertbox', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        // click OK button
        await $('~OK').click();

        // or use driver.dismiss/acceptAlert() command

        //assertion
        await expect(await $('~OK')).not.toExist();
    });

    it('Working with scrollable elements', async () => {
        // easiest scroll
        //await driver.execute("mobile: scroll", {direction: "down"});
        //await driver.execute("mobile: scroll", {direction: "up"});

        await $('~Picker View').click();

        // if there are multiple scrollable elements in the view 
        const redElement = await $('~Red color component value');
        const blueElement = await $('~Blue color component value');
        await driver.execute("mobile: scroll", {element: redElement.elementId, direction: "down"});
        await driver.execute("mobile: scroll", {element: blueElement.elementId, direction: "up"});
        await driver.pause(2000);
    });

    it.only('Working with scrollable elements (Specific elemet)', async () => {
        
        await $('~Picker View').click();

        const redElement = await $('~Red color component value');
        const greenElement = await $('~Green color component value');
        const blueElement = await $('~Blue color component value');

        // set purple value RGB (125,0,125)
        await redElement.addValue("125");
        await greenElement.addValue("0");
        await blueElement.addValue("125");

        await driver.pause(2000);
    });
});