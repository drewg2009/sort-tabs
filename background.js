let frequencyOfSort = 1000
let currentTabTitles = []

setInterval(function () {
    sortTabs()
}, frequencyOfSort)

// A function to extract value as an array and compare them
function equalsCheck(a, b) {
    // check the length
    if (a.length != b.length) {
        return false;
    } else {
        // comparing each element of array 
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true
    }
}

function moveTabs(tabs) {
    for (let i = 0; i < tabs.length; i++) {
        chrome.tabs.move(tabs[i].id, { index: i });
    }
}

function sortTabs() {
    chrome.tabs.query({}).then(tabs => {

        // only sort when the tab order has changed

        let tabTitles = tabs.map(tab => tab.title)
        var same = equalsCheck(currentTabTitles, tabTitles)

        if (!same) {
            currentTabTitles = tabTitles

            console.log('sorting tabs...')

            const collator = new Intl.Collator();
            tabs.sort((tabA, tabB) => collator.compare(tabA.title, tabB.title));

            moveTabs(tabs)
        }
    });

}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.action === "updateConfiguration"){
            updateConfiguration(request)
        }
        sendResponse("updated configuration");
    }
);

function updateConfiguration(request) {
    frequencyOfSort = parseInt(request.frequency)
}