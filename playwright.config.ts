import { devices, PlaywrightTestConfig } from '@playwright/test'
import path from 'path'

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`

const testDir = path.join(__dirname, '__tests__', 'e2e')
const outputDir = path.join(testDir, 'test-results')

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  // Timeout per test
  timeout: 30 * 1000,
  // Test directory
  testDir: testDir,
  // If a test fails, retry it additional 2 times on CI
  retries: process.env.CI ? 2 : 0,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: outputDir,

  workers: process.env.CI ? 1 : undefined,

  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: 'yarn dev',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  reporter: process.env.CI ? 'github' : [['html', { open: 'never' }]],

  use: {
    // Use baseURL so to make navigation relative.
    // More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
    baseURL,

    // Retry a test if its failing with enabled tracing. This allows you to analyses the DOM, console logs, network traffic etc.
    // More information: https://playwright.dev/docs/trace-viewer
    trace: 'retry-with-trace',

    // All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
    // contextOptions: {
    //   ignoreHTTPSErrors: true,
    // },
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
    // Test against mobile viewports.
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12'],
    },
  ],
}

export default config
