# Focus Alarm Pro ⏰

A productivity Chrome Extension that helps users control their browsing habits by automatically closing distracting tabs after a timer finishes while keeping selected tabs open.

## 🚀 Features

* ⏳ Set a timer for entertainment or break time
* 📑 Select multiple tabs to keep open
* ❌ Automatically closes all other tabs when time runs out
* ⏱ Live countdown timer
* 🛑 Cancel timer anytime
* 🎨 Clean and simple user interface
* 💾 Uses Chrome storage to preserve timer state
* 🔒 Lightweight and privacy-friendly (no external data collection)

## 📸 How It Works

1. Open the extension popup.
2. Select the tabs you want to **keep open**.
3. Enter the number of minutes for your timer.
4. Click **Start Timer**.
5. When the timer finishes, all other tabs will close automatically.

This helps eliminate distractions like social media, videos, or gaming sites while keeping your important work tabs active.

## 📂 Project Structure

```
focus-alarm-pro
│
├── manifest.json        # Chrome extension configuration
├── popup.html           # Extension popup UI
├── popup.js             # Popup logic and timer
├── background.js        # Handles closing tabs when timer ends
├── style.css            # UI styling
│
└── icons
    ├── icon16.png
    ├── icon32.png
    └── icon128.png
```

## 🛠 Installation (Developer Mode)

1. Clone this repository:

```
git clone https://github.com/yourusername/focus-alarm-pro.git
```

2. Open Google Chrome and go to:

```
chrome://extensions/
```

3. Enable **Developer Mode** (top right).

4. Click **Load unpacked**.

5. Select the project folder.

The extension will now appear in your browser.

## 🧑‍💻 Technologies Used

* HTML
* CSS
* JavaScript
* Chrome Extension API (Manifest V3)

## 🎯 Use Cases

* Students studying online
* Developers who want to avoid distractions
* Productivity and focus sessions
* Time-limited entertainment browsing

## 🔮 Future Improvements

* Notification warning before tabs close
* Website auto-detection (YouTube, Netflix, etc.)
* Focus statistics and productivity reports
* Dark mode UI
* Pomodoro timer mode

## 📜 License

This project is open-source and available under the MIT License.

## ⭐ Support

If you like this project, consider giving it a **star on GitHub** to support development.
