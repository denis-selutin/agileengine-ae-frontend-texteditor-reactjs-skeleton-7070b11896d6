function getSelectedText() {
    var selectedText = '';

    // window.getSelection
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    }
    // document.getSelection
    else if (document.getSelection) {
        selectedText = document.getSelection().toString();
    }
    // document.selection
    else if (document.selection) {
        selectedText =
            document.selection.createRange().text;
    }
    // To write the selected text into the textarea
    return selectedText;
}

module.exports = getSelectedText;