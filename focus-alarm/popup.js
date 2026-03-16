const tabsContainer = document.getElementById("tabsContainer");
const startBtn = document.getElementById("startTimer");
const cancelBtn = document.getElementById("cancelTimer");
const countdown = document.getElementById("countdown");

let timerInterval;

// Load all open tabs
chrome.tabs.query({}, function(tabs){

    tabs.forEach(tab => {

        const div = document.createElement("div");
        div.className = "tabItem";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = tab.id;

        const label = document.createElement("label");
        label.textContent = tab.title;

        div.appendChild(checkbox);
        div.appendChild(label);

        tabsContainer.appendChild(div);

    });

});

// Start Timer
startBtn.addEventListener("click", () => {

    const minutes = parseInt(document.getElementById("minutes").value);

    if(!minutes || minutes <= 0){
        countdown.textContent = "Enter valid time";
        return;
    }

    let selectedTabs = [];

    document.querySelectorAll("#tabsContainer input:checked").forEach(tab=>{
        selectedTabs.push(parseInt(tab.value));
    });

    chrome.storage.local.set({
        keepTabs: selectedTabs
    });

    let time = minutes * 60;

    chrome.storage.local.set({
        endTime: Date.now() + time * 1000
    });

    chrome.alarms.create("focusAlarm", {
        delayInMinutes: minutes
    });

    startCountdown();

});

// Countdown function
function startCountdown(){

    clearInterval(timerInterval);

    timerInterval = setInterval(()=>{

        chrome.storage.local.get("endTime", (data)=>{

            if(!data.endTime) return;

            let remaining = Math.floor((data.endTime - Date.now()) / 1000);

            if(remaining <= 0){
                countdown.textContent = "Time Over!";
                clearInterval(timerInterval);
                return;
            }

            let minutes = Math.floor(remaining / 60);
            let seconds = remaining % 60;

            countdown.textContent =
                `Remaining: ${minutes}:${seconds.toString().padStart(2,"0")}`;

        });

    },1000);

}

// Cancel Timer
cancelBtn.addEventListener("click", ()=>{

    chrome.alarms.clear("focusAlarm");

    chrome.storage.local.remove(["endTime","keepTabs"]);

    clearInterval(timerInterval);

    countdown.textContent = "Timer Cancelled";

});

// Resume countdown if popup reopened
chrome.storage.local.get("endTime", (data)=>{
    if(data.endTime){
        startCountdown();
    }
});