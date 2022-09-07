require('dotenv').config()
const { config } = require('./wdio.shared.conf');

// ====================
// Browserstack Credentials
// ====================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

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
        "appium:platformVersion": "10.0",
        "appium:deviceName": 'Google Pixel 3',
        "appium:automationName": 'UIAutomator2',
        "appium:app": "bs://367e4e6b78f6d513800fc5515291569dd192c853",
        "appium:autoGrantPermissions": true
    }
];

// ============
// Test runner services
// ============
config.services = ['browserstack'],

exports.config = config;