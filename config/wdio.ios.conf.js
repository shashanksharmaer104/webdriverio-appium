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
        "appium:app": path.join(process.cwd(),"./app/ios/MVCTodo.app")
    }
];

exports.config = config;