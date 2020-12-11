<!-- User's Manual -->

# User's Manual

<!-- User Manual TABLE OF CONTENTS -->

## Table of Contents

- [User Introduction ](#user-manual-introduction )
- [Navigation Bar](#navigation-bar)
- [Side Bar](#side-bar)
- [Home Page](#home-page)
- [About](#about)
- [Crime Map](#crime-map)
- [Statistics](#statistics)
- [Documentation](#documentation)

## User Manual Introduction 

Welcome to the user’s manual for the Prince George’s County Crime Map Web API (PGC Crime Map). In this document you’ll find out what the site does and how to best utilize it for your needs. You’ll also find any of the bugs consistently found in the project and what to do if you encounter them. 

## Navigation Bar
	
The navigation bar is located at the top of the page and will remain with you as you scroll down and up the page. The bar allows you to switch between pages without having to scroll to them, giving you quick and easy access to pages and limiting the chances you’ll get lost. When at the very top of the website in the home page, the navigation bar will be clear, but it will turn a dark blue when scrolling down to the other sections of the website. 

The sections of the website are listed in order from left to right, those being: Home, About, Crime Map, Statistics, and Documentation. The bottom of the navbar of the page you’re on is highlighted at all times in a lighter blue than the one used for the navbar itself. 



## Side Bar 

The sidebar mainly pops up automatically when the window is sufficiently small, either due to being on a smaller device (e.g. a phone) or decreasing the size of your browser window. The icon for the sidebar will appear as three solid white lines in the upper right corner of the page. Clicking on it will open a menu with all of the pages of the web app. Clicking any of these pages will bring you to the appropriate page. 

## Home Page

The homepage is the first page you should see when the CrimeSurge webpage is opened. It has a dynamic visual of traffic and a city skyline that replays indefinitely. The home page is the main page of the website and users can either utilize the scroll bar or navigation bar to go to other parts of the website. There is a link in the center of the homepage labeled “View Crime Heatmap” that serves as an additional link to the CrimeMap page. 


## About

The about page has three sections: “Our Goal”, “About Our Dataset”, and “What the Dataset Will Tell Us”. Each section has background information for the project, such as the dataset used and what the data should reveal to us and the users. The “Our Goal” section reveals what we hope to achieve with this dataset and website. The “About Our Dataset” section describes where we got our data from and the key data points used. The “What the Dataset Will Tell Us” portion describes what data our source gives us, such as the location and frequency of crimes. This can serve as useful background information for what the data actually is meant to show and if you may find this information personally relevant and useful. 


### Crime Map

The Crime Map is a dynamic page on our site that utilizes a heatmap. It generates points on the map using latitude and longitude data and indicates where a crime has occured. When many points are in the same location the heat map registers a red area. When a low amount of crime occurs in an area the color is green.

The map is laid over a Google Map-like structure, and has similar controls to a Google Map as a result. When you scroll over the map, the map image will darken and you will be given a prompt to control the map’s current location by holding down a button and using the mouse. Holding down this button and pushing up/back or scrolling up and down will zoom the map out and in respectively for better visualization of specific parts or the entirety of the map. (Left) Clicking the map and holding the cursor down will allow you to move the map from left to right and up and down by moving your mouse in a direction. Heat map points may become less “concentrated” when zoomed in, i.e. red and yellow spots may not display with said colors and you may have to zoom out to see the actual areas where crime is concentrated.



### Statistics

The statistics page shows crime statistics for the PG County area. It includes dynamic graphs that update as new data is added to the dataset. This page is useful to any user looking for specific statistics on crime rates in PG county. 

Clicking on the button “Crimes Revealed” will display the current data the map has, and clicking on the button again will “refresh” the graph with any data added between clicks. The graph displays crimes by categories, unveiling how often each crime is committed in the PG County area. Future functionality will likely add more graphs that users can shift between with arrows on the left and right of the graph. 



### Documentation

The documentation page guides users to important pages related to Crime Surge. There are three links: “View Source Code”, “User Manual”, and “Developer Manual”. The “View Source Code” link takes the user to our Github page with all the source code to show people how the site was constructed. The User Manual (what you’re currently viewing) describes how to utilize the website and what it’s for. The Developer Manual gives developers insight on how to work with the Crime Surge site and more information about our dataset. It also shows how the site works and how to work with the application on their local machines, from installing the necessary packages to running the site locally.