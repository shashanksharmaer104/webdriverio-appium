const EditNotePage = require("../../screenobjects/android/edit-note.page");
const DeleteNotePage = require("../../screenobjects/android/delete-note.page");

describe('Delete note', () => {

    it('Delete note, trash it and verify uder trash section', async () => {

        // skip tutorial
        await EditNotePage.skipTutorial();

        // create new note
        await EditNotePage.addNote("WWE Title", "Undertaker\nKane\nStone Cold");

        // go back to dashboard
        DeleteNotePage.navigateToDashboard();

        // get latest note title
        const noteTitle = await DeleteNotePage.firstNote.getText();
        await DeleteNotePage.firstNote.click();

        // delete the note
        await DeleteNotePage.menuBtn.click();
        await DeleteNotePage.deleteOption.click();
        await DeleteNotePage.confirmAlert();

        // navogate to Trash Can section
        await DeleteNotePage.hamburgerMenu.click();
        await DeleteNotePage.trashCanBtn.click();

        // assertion
        await expect($('//*[@text="'+noteTitle+'"]')).toBeDisplayed();

        // delete note permanently
        await DeleteNotePage.deleteIcon.click();
        await DeleteNotePage.menuBtn.click();
        await DeleteNotePage.permanentDeleteOption.click();
        await DeleteNotePage.confirmAlert();
    });
});