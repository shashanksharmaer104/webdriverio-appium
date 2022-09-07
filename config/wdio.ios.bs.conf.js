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
    './test/specs/ios/ios-todo-item*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        platformName: 'ios',
        "appium:platformVersion": "14.5",
        "appium:deviceName": 'Custom iPhone 12 Pro',
        "appium:automationName": 'XCUITest',
        "appium:app": "bs://abcpath"
    }
];

// ============
// Test runner services
// ============
config.services = ['browserstack'],

exports.config = config;