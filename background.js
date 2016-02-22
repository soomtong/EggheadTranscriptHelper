chrome.webNavigation.onCompleted.addListener(function (tab) {
    if (tab.url.indexOf('egghead.io') > -1) {
        //console.info(tab.url);
        chrome.tabs.executeScript(null, {
            file: "move-transcript.js"
        });
    }
});