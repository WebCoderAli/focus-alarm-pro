chrome.alarms.onAlarm.addListener((alarm) => {

    if (alarm.name !== "focusAlarm") return;

    chrome.storage.local.get("keepTabs", (data) => {

        let keepTabs = data.keepTabs || [];

        chrome.tabs.query({}, (tabs) => {

            tabs.forEach(tab => {

                if (!keepTabs.includes(tab.id)) {

                    chrome.tabs.remove(tab.id);

                }

            });

        });

    });

});