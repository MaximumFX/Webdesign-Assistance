function selectText(dis) {
    if(document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText($(dis)[0]);
        range.select();
    }
    else if(window.getSelection) {
        var range = document.createRange();
        range.selectNode($(dis)[0]);
        window.getSelection().addRange(range);
    }
}
