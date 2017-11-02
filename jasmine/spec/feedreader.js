/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
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
        it ('URL is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
            });           
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it ('name is defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeTruthy();                 
            }); 
        });

    });


    describe('The Menu', function(){

        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function(){
            expect(document.body.classList).toContain('menu-hidden');
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu changes visibility when the menu icon is clicked', function(){
            //show when clicked
            $(".menu-icon-link").click();
            expect(document.body.classList).not.toContain('menu-hidden');
            //hide when clicked again
            $(".menu-icon-link").click();
            expect(document.body.classList).toContain('menu-hidden');
        });
    });


    describe ('Initial Entries', function(){

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function (){
                done();
            });            
        }); 

        it('when loadFeed is done, .feed container has a .entry element', function(){
            expect($('.feed .entry').length).not.toBe(0);
        });
    });


    describe('New Feed Selection', function(){

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let initcontent, 
        finalcontent;
        
        beforeEach(function(done) {
            loadFeed(0, function (){
                initcontent = $('.feed').html();
                done();                
            });
       });          
   
        it('the content actually changes', function(done){
            //make sure current content is different than previous content
            loadFeed(1, function (){
                finalcontent = $('.feed').html();
                expect(initcontent).not.toBe(finalcontent);
                done();
            }); 
       });
    });
}());
