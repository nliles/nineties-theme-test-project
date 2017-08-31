# Nineties Theme Test Project

## Guidelines
* Setup project with Angular CLI and store in public Github repo.
* Create an app that has a button that activates 90s theme styling when clicked.
* Use @ngrx/store for state storage and actions.
* Create an end-to-end test using Angular CLI's built in Protractor support to verify the implemented behavior.


## Instructions:

1. Run 'ng serve'.

2. Navigate to 'http://localhost:4200/'. 

3. Click on the 'Toggle Style' button to display 90s styling.

4. Click on the 'Toggle Style' button again to display 2017 styling.


## Running e2e tests:

1. Run 'ng serve'.

2. Run 'webdriver-manager start'.

3. Run 'protractor protractor.conf.js'.



## Explain any decision you had to make when architecting the application 

I divided my application into three components: header, footer, and homepage with the homepage component subscribing to the store. I saw various ways to organize and setup ngrx/store but I ultimately chose to dispatch an action from my homepage component rather than create an injectable actions class since it was such a simple application. I created an actions folder where I defined my action types and a reducers folder to store my style reducer.


## How I found working with Angular and ngrx.

Overall, I found the learning curve with Angular to be steeper than with React. However, I really enjoyed using Angular CLI and found it to be a very easy and convenient way to create an Angular application. The setup process was so simple and the folder structure was so organized. It was great for someone new to Angular to see how everything should be setup and organized according to best practices. I did find ngrx/store to be a bit tricky at first but I watched some great instructional videos which cleared things up. I found it to be similar to Redux in terms of setup and organization. Overall, I enjoyed the experience and felt like I learned a lot.



