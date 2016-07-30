/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This first test suite contains a related set of tests.
    * This suite is all about the RSS feeds definitions,
    *  the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it ensures that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url are defined and are not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined and is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
                expect(typeof allFeeds[i].name).toBe('string');

            }
        });
    })
    /* The second test suite tests menu functionality */
    describe('The menu', function() {
        /* This test ensures that the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(document.body.className).toContain('menu-hidden');
        });
         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked. It
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* The third test suite named "Initial Entries" */
    describe ('Initial Entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Because loadFeed function is asynchronous, this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            });
        });

        it('loadFeed function is called and completes its work', function() {
            expect($('.feed .entry').length).toBeGreaterThan('');
        });
    });

    /* The fourth test suite named "New Feed Selection" ensures
     * that each feed is different. It ensures that when a new feed
     * is loadedb by the loadFeed function, the content actually changes.
     */
    describe ('New Feed Selection', function() {
        /* Defining the different loads of feeds */
        var feed_0,
            feed_1;
        /* Loading a feed and storing the data*/
         beforeEach(function(done) {
            loadFeed(0, function() {
                feed0 = $('.feed').children().text();
                done();
            });
        });
         /* Loading another feed and storing the data.
          * Compare feed_1 to feed_0 and making sure  that
          * they are different
          */

        it('content changes', function(done) {
            loadFeed(1, function() {
                feed_1 = $('.feed').children().text();
                expect(feed_1).not.toEqual(feed_0);
                done();
            });
        });
    });
}());