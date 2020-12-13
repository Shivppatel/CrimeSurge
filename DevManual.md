<!-- Developer's Manual -->

# Developer's Manual

<!-- Developer Manual TABLE OF CONTENTS -->

## Table of Contents

- [Developer Manual Introduction ](#developer-manual-introduction)
- [Installation](#developer-installation)
- [Running the Application ](#running-the-application)
- [Running Tests](#running-tests)
- [API](#api)
- [Get](#get)
- [Post](#post)
- [Put](#put)
- [Delete](#delete)
- [Known Bugs and Future Development](#known-bugs-and-future-development)

## Developer Manual Introduction

Welcome to the developer’s manual for the Prince George’s County Crime Map Web API (PGC Crime Map). In this document you’ll find how to install and run this application in addition to the API requests used to make the application work. You’ll also find any of the bugs consistently found in the project, how they were dealt with, and any plans for future development.

## Developer Installation

Run “npm install” in a new terminal window to download the basic parts of the package.json file. This will install said file into the local node_modules folder, which may be necessary to run the application. If the application cannot run but there’s no error in your code, you may just have to run “npm install”, especially if you just installed another package.

After this, run “npm install --save node-fetch”. This will allow you to retrieve external data into your server.js file or anything similar to it.

The application is made using React, a single-page web application. In order to install/start a new React project, you must input “npx create-react-app [app-name]” into the terminal of your window. Doing so will provide you with a basic react project with the standard functionalities installed, including a “src” folder that will hold all of the components to make the application.
After doing this, create folders for your components, page, video, and images. The components will hold the individual “pages” of the application, including the home page, about, and documentation pages. The “pages” folder will hold the basic structure of the page in an “index.js” file, including the header, footer, and individual pages such as the homepage, about, and documentation. The images and videos folders will hold the images and videos (or link to them) used for the web page.
The components folder will hold an individual folder for each component’s page structure called “index.js” and a styling file named “component_name.js” that the index.js will be linked to (or rather import the styling from). The index.js file will function much like a regular HTML page with the exception that you’ll be using capitalized letters for any class names you make in the styling js file (header will become “Header” so the rules from the styling file can be applied in the index.js file). Keep in mind that for each index.js file, you’ll need to type “import React from ‘react’” at the top of the file, and import any other necessary libraries as well such as “import GoogleMapReact from ‘google-map-react’”.

<!-- The final component you’ll need to install is the sqlite functionality. Sqlite can be used to store data in a local database on the server, and can retrieve this data from APIs. In order to install sqlite on your local machine, run both “npm install --save sqlite3” and “npm install --save sqlite”. Note that you may also need to run “ “npm install sqlite sqlite3 --save”, but the first two commands should be enough.
After installing the sqlite libraries, the setup for your application should be completed. Next you may want to run the program to ensure that it works. -->

## Running the Application

To run the program after everything is installed, first move into the “Clients” directory with “cd Clients”. Type “npm start” into the terminal in this directory to begin running the front end of the application. If everything has been installed correctly, this command should open up a new local instance of server 3000 (although if that server is currently running, you will be prompted to use another server). Your local instance should open up as a new tab in your browser, but if it doesn’t, type “localhost:[current local host number]” to navigate to the local instance of the application.

After you have confirmed the front end has begun running correctly, move back into the main directory with “cd ..” and run “npm start” again. This will start the back end that utilizes API calls such as get, post, and put.

If that doesn’t work, the other options may resolve the problem, but if they don’t, make sure to pull any changes made to the main branch if you’re working in a group. The version differences between branches may resolve the problem. If pulling or merging branches does not work, uninstalling and reinstalling the project may fix the issue. Reinstallation should solve the problem and wipe out any mistakes made during the initial installation process, but if the problem persists after reinstallation, additional research may be needed.

## Running Tests

The PGC Crime Map API technically does not have any official tests to run to test its functionality such as Cypress. There are, however, several visual ways to test the application, much like any application.

The first is to make sure the web page has opened and displayed its contents correctly. Any differences between the expectation and reality of factors such as placement, color, and text size should be noted and fixed in the code if possible.

Second, the heat map should display hues of green, yellow, and red on the imported Google map that show where crimes (or other activities) are concentrated the most. If this isn’t true, the data points may have been retrieved incorrectly or the link to the API may be broken.

Third, if the statistics aren’t shown to be similar to the tableau version of the data, the get or post requests likely faltered, the SQL script has an error in it, or the link to the API is broken.

## API

The application mainly utilizes the get, post, and put endpoints to retrieve and post the data from the PG County API along with adding and updating crime incidents in the database. There is an additional delete endpoint that helps to delete particular incidents from the database. These endpoints can be found primarily in server.js, and utilize mongoose to build a database. 

### GET

The get endpoint is meant to retrieve data from the PG County API database, with said data usually being in the form of JSON. The get endpoint also sends a JSON representation of the database’s crime incidents. In the get endpoint, a statement such as “Hello, welcome to CrimeSurge's API” is output if the get request is valid. If the request is invalid, an error is thrown. The url endpoint for the get endpoint is “/api/incident-data”. 

### POST

The post endpoint sends data to our server to update the database we have created, allowing said database to be updated automatically or manually if need be. Whenever something utilizes the post endpoint, a message is sent in the form of the new data added to the database. The endpoint also outputs a few messages to the log to ensure the post request is working, such as the body of the request (req.body). Just like the get endpoint, an invalid request generates an error message. The url endpoint for the post endpoint is “/api/report-incident”. 

### PUT

The put request updates an incident in the database, allowing crimes that may have been misinput to be updated without deleting them through a put request. Whenever a put request is submitted, a message is sent in the form of the data that was updated. The console also generates a  statement of the query that updated the data and what the update is. It will also generate an error if the request is invalid. The url endpoint for the put endpoint is “/api/update-incident”. 

### DELETE

The delete endpoint deletes incidents in the database that may have been invalid upon their input. It will delete the input that matches the request body, and returns a message containing what was deleted. Like the other endpoints, it will output an error message for invalid requests. The url endpoint for the delete endpoint is “/api/delete-incident”. 

## Known Bugs and Future Development

There are several potential bugs in the application that still need to be resolved. The heat map’s data points, when zoomed out a bit, can become blob-like and indistinguishable from each other. This bug does not occur often, but it does exist and can make identifying crime hotspots difficult. In the future this will be remedied by looking at the styling choices of the heatmap and if there is a way to keep hotspots more distinct from each other even when zoomed a certain distance away.

Another bug is with the statistics page’s main chart for crime by category. Sometimes when the button the push the crime is used, the statistics don’t reset and instead add onto the existing crime counts by category. This may be a bug with the Sqlite code and how the data is imported and deleted (or not deleted) between button presses. Future development will focus on deleting the sql database entirely between calls if necessary to ensure this stacked data does not appear.

Additional future development will focus on importing more graphs and increasing user interaction. One way to combine the two would be to have all of the graphs available on the statistics page via arrows that allow a user to switch to graphs. For example, a crime by location graph could be added, and users could swap between graphs with the push of an arrow button on the left and right of the graphs.
