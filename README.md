## Feed Reader Testing
This project is part of the Front End Web Developer Nanodegree at Udacity. Project consist of four test suites that include different sets of specifications.

## Project Requirements / Features

1. The first test suite about the RSS feeds definitions contains a related set of tests.
  * Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
  * Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
2. Second test suite "The menu" tests menu functionality.
  * Write a test that ensures the menu element is hidden by default.
  * Write a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
3. The third test suite "Initial Entries" ensures that when the loadFeed function is called and completes its work. Because loadFeed function is asynchronous, this test requires the use of Jasmine's beforeEach and asynchronous done() function.
  * Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
4.  The fourth test suite "New Feed Selection" ensures that each feed is different.
  * Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
5. Other requirements
  * No test should be dependent on the results of another.
  * Callbacks should be used to ensure that feeds are loaded before they are tested.
  * Implement error handling for undefined variables and out-of-bound array access.
  * When complete - all of your tests should pass.

## How to View This Project
* Download the source code from my repo at GitHub: https://github.com/otsop110/frontend-nanodegree-feedreader and open /index.html in your browser.

## Helpful Resources
* [Jasmine, Behaviour-Driven JavaScript documentation](http://jasmine.github.io/)
* [Testing DOM Events Using jQuery and Jasmine 2.0](http://www.htmlgoodies.com/beyond/javascript/js-ref/testing-dom-events-using-jquery-and-jasmine-2.0.html)
* [Udacity - JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549?_ga=1.43628450.669191639.1441099840)
* [Using Jasmine 2.0's New done() Function to Test Asynchronous Processes](http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html)

## References
Following Udacity Forum discussion have been of great help:
* [Are my tests really testing what they’re supposed to?](https://discussions.udacity.com/t/are-my-tests-really-testing-what-theyre-supposed-to/47524)
* [Async tests – why the second done() call?](https://discussions.udacity.com/t/async-tests-why-the-second-done-call/40751)
* [New Feed Changes Content Test](https://discussions.udacity.com/t/new-feed-changes-content-test/47601/1)