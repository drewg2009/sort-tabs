let frequencyOfSort = 1000
let currentTabTitles = []

// start sorting interval from initial state
createInterval();

function createInterval() {
    interval = setInterval(function () {
        sortTabs()
    }, frequencyOfSort)
}

// A function to extract value as an array and compare them
function equalsCheck(arrayA, arrayB) {
    // check the length
    if (arrayA.length != arrayB.length) {
        return false;
    } else {
        // comparing each element of array 
        for (let i = 0; i < arrayA.length; i++) {
            if (arrayA[i] !== arrayB[i]) {
                return false;
            }
        }
        return true
    }
}

async function moveTab(tabs, index) {
    let tab = tabs[index]
    if (tab != null) {
        let tabId = tabs[index].id

        if (tabId != null) {

            try {
                await chrome.tabs.move(tabId, { index: index });
                console.log("Success.");
            } catch (error) {
                if (error == "Error: Tabs cannot be edited right now (user may be dragging a tab).") {
                    setTimeout(() => moveTab(tabs, index));
                } else {
                    console.error(error);
                }
            }
        }
        else {
            console.log('tab id null')
        }
    }else {
        console.log('tab null')
    }
}

function moveTabs(tabs) {
    for (let index = 0; index < tabs.length; index++) {
        moveTab(tabs, index)
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

chrome.tabs.onMoved.addListener(function () {
    console.log('moved tab...')
})

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "updateConfiguration") {
            updateConfiguration(request)
            sendResponse("updated configuration");
        }
        if (request.action === "getFrequency") {
            sendResponse({ frequency: frequencyOfSort })
        }
    }
);

function recreateInterval() {
    clearInterval(interval)
    createInterval()
}

function updateConfiguration(request) {
    frequencyOfSort = request.frequency
    recreateInterval()
}