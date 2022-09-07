const { config } = require('./wdio.shared.conf');
const path = require('path');

// ====================
// Runner Configuration
// ====================
config.port = 4723;

// ==================
// Specify Test Files
// ==================
config.specs = [
    './test/specs/android/add-note*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'Android',
        "appium:platformVersion": "11",
        "appium:deviceName": 'Pixel 3',
        "appium:automationName": 'UIAutomator2',
        "appium:app": path.join(process.cwd(),"./app/android/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true
    }
];

exports.config = config;