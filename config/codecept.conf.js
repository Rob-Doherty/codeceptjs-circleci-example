const outputDir = './output';

exports.config = {
  tests: '../test/*_test.js',
  output: outputDir,
  helpers: {
    Puppeteer: {
      url: 'http://www.whiteboxitsolutions.com',
      show: process.env.SHOW_BROWSER || false,  // headless by default to run on CircleCI unix box
      waitForTimeout: 10000,
      waitForAction: 500,
      waitForNavigation: [ 'domcontentloaded', 'networkidle0' ],
      windowSize: '1024x640',
      chrome: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      }
    }
  },
  include: {
    I: '../steps_file.js',
    homePage: '../test/pages/HomePage.js'
  },
  mocha: {
    reporterOptions: {
      reportDir: outputDir,
      reportName: 'test_report',
      reportTitle: 'CodeceptJS Example Test Report',
      inlineAssets: true
    }

  },
  name: 'codeceptjs-example'
};
