const AddNotePage = require("../../screenobjects/android/add-note.page");

class EditNoteScreen {

    async skipTutorial() {
        await AddNotePage.skipBtn.click();
        await expect(AddNotePage.addNoteTxt).toBeDisplayed();
    }

    async addNote(title, body) {
        await AddNotePage.addNoteTxt.click();
        await AddNotePage.textOption.click();
        await expect(AddNotePage.textEditing).toBeDisplayed();

        // add note title
        await AddNotePage.noteHeading.addValue(title);

        // add note body
        await AddNotePage.noteBody.addValue(body);

        // save the changes
        await AddNotePage.saveNote();

        // assertions (verify changes)
        await expect(AddNotePage.editBtn).toBeDisplayed();
        await expect(AddNotePage.viewNote).toHaveText(body);
    }
}

module.exports = new EditNoteScreen();