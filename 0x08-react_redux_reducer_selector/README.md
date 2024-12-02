0. Write a basic reducer
mandatory
Reuse the latest dashboard project you worked on in the React course 0x08-React_Redux_action_creator+normalizr
Create the basic state

In a file named reducers/uiReducer.js, define the initial state of the reducer for the UI:

It should have one boolean property isNotificationDrawerVisible
It should have one boolean property isUserLoggedIn
It should have one empty object user
Create the reducer function

In the same file, import all the actions that you created in the file actions/uiActionTypes and create a reducer function named uiReducer:

DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
LOGIN_SUCCESS should set isUserLoggedIn to true
LOGIN_FAILURE should set isUserLoggedIn to false
LOGOUT should set isUserLoggedIn to false
Write the tests

In a file named reducers/uiReducer.test.js, define the test suite for our simple reducer:

Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property.

1. Use Immutable for the UI Reducer
mandatory
Now that you have set up a basic reducer, let’s reuse what we learned in the Immutable module and apply it to that reducer:

Install Immutable.js within the project
Update the uiReducer.js file to use Map from Immutable.js
Update the different part of the reducer function to use set from Map
Update the test suite, so it takes into account the changes
Tips:

You can use the toJS function within your tests for an easy comparison
Remember that Immutable.js always return a new Map after a modification
Requirements:

For better performances, do not use any fromJS, toJS function within the reducer
All the tests in the project should pass

2. Create a load action

In the courseActionTypes file, create a new action corresponding to when the API returns the list of courses. You can name it FETCH_COURSE_SUCCESS

Create the course reducer and default state

In a file courseReducer.js, write a reducer function. The default state should be an empty array.

Define the FETCH_COURSE_SUCCESS action

When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends the list of courses in a data attribute. The action would look like

3. Create a load action

In the notificationActionTypes file, create a new action corresponding to when the API returns the list of notifications. You can name it FETCH_NOTIFICATIONS_SUCCESS

Create the notifications reducer and default state

In a file notificationReducer.js, write a reducer function. The default state should be an object with:

notifications, which will store the list of notifications
filter, which will be the attribute storing which filter is selected
Define the FETCH_NOTIFICATIONS_SUCCESS action

When the action creator sends the action FETCH_NOTIFICATIONS_SUCCESS, it also sends the list of notifications in a data attribute. The action would look like:
