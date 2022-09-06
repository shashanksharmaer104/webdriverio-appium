class DeleteNoteScreen {

    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get menuBtn() {
        return $('//*[@content-desc="More"]');
    }

    get deleteOption() {
        return $('//*[@text="Delete"]');
    }

    async confirmAlert() {
        await driver.acceptAlert();
    }

    get hamburgerMenu() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get deleteIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/type_image"]');
    }

    get trashCanBtn() {
        return $('//*[@text="Trash Can"]');
    }

    get permanentDeleteOption() {
        return $('//*[@text="Permanently delete"]');
    }

    async navigateToDashboard() {
        await driver.back();
    }
}

module.exports = new DeleteNoteScreen();