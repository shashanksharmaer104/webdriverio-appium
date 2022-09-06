const AddNotePage = require("../../screenobjects/android/add-note.page");

describe('Add note', () => {
    it('Skip the tutorial', async () => {
        await AddNotePage.skipBtn.click();
        await expect(AddNotePage.addNoteTxt).toBeDisplayed();
    });

    it('add a note, save it and the verify it', async () => {
        await AddNotePage.addNoteTxt.click();
        await AddNotePage.textOption.click();
        await expect(AddNotePage.textEditing).toBeDisplayed();

        // add note title
        await AddNotePage.noteHeading.addValue("WWE title");

        // add note body
        await AddNotePage.noteBody.addValue("Undertake\nKane\nStone Cold");

        // save the changes
        await AddNotePage.saveNote();

        // assertions (verify changes)
        await expect(AddNotePage.editBtn).toBeDisplayed();
        await expect(AddNotePage.viewNote).toHaveText("Undertake\nKane\nStone Cold");
    });
});