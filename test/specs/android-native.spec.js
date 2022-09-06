describe('Android Native Feature Tests', () => {
    it('Access an activity directly', async () => {
        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //pause for 3 sec
        await driver.pause(3000);

        // assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialogue Boxes', async () => {
        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        // click on button
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // accept alert box
        //await driver.acceptAlert();

        // dismiss alert box
        await driver.dismissAlert();

        await driver.pause(2000);

        // assert - alert box is not showing
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        await driver.pause(2000);

        // scroll to the end (not stable - if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrollIntoView (more stable)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        //await $('~Secure Surfaces').click();

        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal scrolling', async () => {
        await $('~Views').click();
        await $('~Gallery').click();
        await $('//android.widget.TextView[@content-desc="1. Photos"]').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(2000);
    });

    it.only('Scrolling exericse', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");

        // get current date as text
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = date.getText();

        // click on 'change the date' button
        await $('~change the date').click();

        // scroll forward to next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // select date '10 of Sep'
        await $('//android.view.View[@content-desc="10 September 2022"]').click();
        await driver.acceptAlert();

        //get updated date as text
        const updatedDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

        console.log("Current date -----> " + currentDate);
        console.log("Updated date -----> " + updatedDate);

        // assertion
        //await expect(updatedDate).toHaveTextContaining("-10-2022");
        await expect(updatedDate).not.toEqual(currentDate);
    });
});