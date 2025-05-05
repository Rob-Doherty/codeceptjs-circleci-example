const outputDir = `${__dirname}/../output`;

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
    },
    'Mochawesome': {
      'uniqueScreenshotNames': 'true'
    }
  },
  include: {
    I: '../steps_file.js',
    whiteboxHomePage: '../test/pages/WhiteBoxHomePage.js',
    govUKHomePage: '../test/pages/GovUKHomePage.js',
    govUKSearchResultsPage: '../test/pages/GovUKSearchResultsPage.js',
    govUKMOJPage: '../test/pages/GovUKMOJPage.js'
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
