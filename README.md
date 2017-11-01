# FeedReader

Open the index.html file.
You will be able to see an application pass a number of tests.


## What to expect?

1. See that Feeds are defined with correct URLs and names
2. The menu will remain hidden until clicked
3. The menu will hide when cliked again
4. Page will load content when feed is clicked
5. Every feed has its own content


## Test Suites

Jasmine__TopLevel__Suite
    `RSS Feeds`
        are defined
        URL is defined and not empty
        name is defined and not empty
    `The Menu`
        menu element is hidden by default
        menu changes visibility when the menu icon is clicked
    `Initial Entries`
        when loadFeed is done, .feed container has a .entry element
    `New Feed Selection`
        the content actually changes