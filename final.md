<!-- Final Report -->

# Final Report: Prince George's County Crimesurge

Team Members: Francisco Contreras, Angad Dhillon, Conner Owen, Shiv Patel, Cross Zeigler

<!-- Final Report TABLE OF CONTENTS -->

## Table of Contents

- [Heroku Link](#heroku-link)
- [Information Problem](#information-problem)
- [Stakeholders and Target Browsers](#stakeholders-and-target-browsers)
- [Data Chosen](#data-chosen)
- [Strategies and Solutions](#strategies-and-solutions)
- [Technical System Decision Rationale](#technical-system-decision-rationale)
- [Challenges Faced](#challenges-faced)
- [Did the Final System Address the Problem?](#did-the-final-system-address-the-problem?)
- [Possible Future Work](#possible-future-work)


## Heroku Link
- [Crimesurge](https://crimesurge.herokuapp.com/)

## Information problem

Our goal was to find out what crimes occur the most in Prince George’s County (PG County) and where, and then create an app or website that will highlight these crime hotspots so people can avoid them and policy can be drafted by local governments to reduce these crimes. We wanted to spread awareness of these crimes so individuals can take more personal precautions, and then hopefully influence policy so local leaders may make these places safer for people to traverse. Overall, we wanted to reduce crime by first reducing potential victims with forewarning, and then implement a more permanent solution by giving suggestions to elected officials on the site on where to focus crime-reduction efforts and what steps they could take. 

## Stakeholders and Target Browsers

One target audience/stakeholders would be individuals in communities who may want or need to avoid certain areas. People would likely want to know this information to keep themselves and others safe, aiding in our crime reduction goal by minimizing potential victims. Another audience we’ll target is government officials for the aforementioned crime policies they could draft. If they knew what areas were hit the hardest by crimes, they could target these areas and possibly pour more funding into decreasing incidents in these locations. 

Our main target browsers are iOS devices such as MacBooks and iPhones due to their prevalence and popularity. We will aim to make the interface of the application friendly to both devices, specifically in regards to screen size. If possible, we may target other browsers such as Android devices. 

## Data Chosen

We used “Prince George’s County Open API”, specifically the categories concerning crime labelled public safety. We were a bit unsure about our project topic at first and decided to look through multiple APIs to browse their data, and proposed several project topics based on the datasets we found. This included our crime project. After talking about a realistic project in terms of time, scope, and data, we settled on our crime topic and the PG County API because they seemed easy to understand but complex and interesting enough to be good research projects. PG County was also one of the few APIs given that gave us any sort of crime data, so even if we did decide to use another API, there may not have been any data that suited our needs. 

The specific dataset we focused on was “Crime Incidents February 2017 to Present”, which gave us a glimpse into the most relevant crimes for the past three years. Our columns of interest were clearnace_code_inc_type (what type of crime is committed), PGPD Sector (the district the crime occurred in), and street number and street address (the street it was committed on). All of this data told us where a crime was committed and what type of crime occurred, making our hotspots more accurate and useful to our audience. We also tried to include dates so we know when crimes occur most often throughout the year (like during any particular season).

## Strategies and Solutions

Our primary strategy to solve this problem was to build a webpage that allowed users to access crime data easily, with the visitors being able to understand said data in a short amount of time. To achieve this goal, we decided to create a heat map and statistics pages to display the data in a familiar and readable manner. The heat map would highlight where crimes occur the most, with the redder colors indicating higher concentrations of crime in an area and green lower concentrations. We also wanted to make it possible to filter crime data in the heat map, such as by date and type of crime, but our main goal was creating a heat map with the given data regardless of when and what crime took place. 

Our other solution to the problem came in the form of graphs, mainly bar and line graphs meant to represent the exact type of crimes taking place and when. This could compensate for if the heat map didn’t have a filtering option, and would be better to show to any government officials who wanted to know what types of crimes were taking place so they knew what policies to push when discussing criminal reform. Additionally, the type of crime and when may make people more at ease for their safety if they did get caught up in a crime, but still cautious enough to take personal and community-wide steps to reduce their chances of being victimized. 

## Technical System Decision Rationale

For our project, we primarily utilized HTML, CSS, and JS due to their familiarity and the plethora of information surrounding these languages. HTML is an easy language to use for making websites and is usually the code you’re looking at whenever on a webpage. CSS is also easy to use (or at least learn) and is usually the go-to styling language for HTML pages. It helped with the presentation of the website and making it more mobile-friendly with media-screen options. Javascript allowed us to give users more interactivity with the website, and provide a server for utilizing our given dataset such as retrieving the data and displaying it for site visitors. 

Our original website wasn’t going to utilize a single-page web application system, but we decided to use React in development due to the benefits single-page web applications afford their users (e.g. ease of use for visitors and possibly being more mobile-friendly) and to practice with React for this project. We learned that specific libraries usually needed to be used with React in place of the libraries we had been using throughout the semester, which gave us more insight into how React operated. 

Speaking of libraries, we utilized several to make working the project easier. One of them was MongoDB used in place of SQLite. The people working on the back-end wanted to use MongoDB to practice with it more and because we had trouble implementing SQLite functionality. MongoDB helped us create a dynamic database we could update with API calls. Another library we utilized was Node.js and Express framework to run the back-end of the API, specifically in making our server.js functional. Node.js is usually a standard library we’ve come to download in class after working with servers, so we figured that Node.js should be the library we use for our server most if not all of the time. 

We used Google Maps API as well in place of Leaflet.js due to our familiarity with it and its ease of use. With it, we crafted the heat map with data points from the PG County API, and also tried to add functionality for looking at specific points of crime. Finally, we used Apexcharts to style the charts on the statistics page. 
	
## Challenges Faced

We faced several challenges over the course of development. One of our first challenges was deciding on how to implement the heat map into the site. While our initial implementation used leaflet.js, we found it a bit too difficult to learn and work with in a short frame of time, and resolved to use the Google Maps API in its place. The Google Maps API was easy to use for people on the front and back-end of development, and some people were already familiar with it giving it another advantage over leaflet.js. 

Another challenge we faced was actually pulling coordinates directly from the site. Unfortunately we couldn’t figure out how to pull longitude and latitude from the PG County API for the heat map in time, so we resolved to instead store them as strings with Python as a solution to this issue. 

A third challenge we faced was utilizing SQLite to store crime data on our end so we could have a database to pull from and update if needed. This impeded us from making the chart with the PG County API as well. To resolve this, we used mongoose (MongoDB) to create a database on our end we could update, delete, and retrieve data from, and used apexcharts to make and style the bar graphs on the statistics page. 

Our final major problem was getting everyone to meet consistently and communicate properly. Some people had trouble attending meetings due to personal reasons, and to remedy this issue we did two things. One, we scheduled meetings much further in advance, sometimes a week ahead of time, so there would be enough time to reschedule or at least know if people couldn’t make it to the meeting. Two, we began to provide updates via GroupMe on what meetings were about, what we solved, and what our next steps for the project would be. This helped to keep people in the loop regardless of whether they attended the meeting or not. 
 

## Did the Final System Address the Problem?

It’s arguable as to whether we solved one of our problems or not. While we did provide a heat map of crime that pinpointed where crime hotspots were and produced at least one chart that revealed what crimes were committed the most, it’s debatable whether these solutions could reduce crime or not. The heat map could help people navigate through areas with higher crime rates, but politicians may not be interested in using this representation of the heat map with its current functionality. We may not have been able to solve the actual issue of crime in the PG County area and reduce it, at least directly. 

In terms of using charts and the heat map to improve visualizations of crime, we can consider it a success. The data has now been formatted into a much more readable form friendly to the eyes of individuals, communities, and legislators. The heat map allows people to pinpoint where crimes occur the most, which can help legislators choose areas for criminal reform and for resource allocation. The bar chart on types of crime reveals what types of crimes to look out for and what types of reforms may be needed in terms of community and resources. While we may not have reduced crime directly, we still helped to provide graphics for quick use by communities and their governments. 

## Possible Future Work

We encountered several bugs and design faults when designing the webpage, mainly concerning the heat map and statistics page. For the heat map, the data points can become blob-like and indistinguishable from each other when zoomed out, and harm the heat map’s readability. This does not occur often, but it happens enough that identifying crime hotspots can be difficult due to it. In the future we will attempt to style the map in such a way that the hotspots can stay distinct enough and not meld into each other. 

Another minor bug is that when clicking on separate hotspots and exiting out of the specific crimes highlighted, the page will move down. The shift is notable enough that after clicking on approximately a dozen hotspots, exiting from all of them will shift the user to the next page. We’re unsure why this occurs, but in the future, perhaps we’ll add code that keeps the user’s current view centered on the page after exiting a specific crime. 

In the future we would like to import more graphs and increase user interaction by adding a crime by location graph. We will also focus on making the statistics page more interactive by having arrows that can switch between graphs and allow people to export the data, possibly in the form of a CSV, png, or another file format. 

Making the heat map similar to this is another possible objective, such as allowing users to filter for crimes on the heat map by time or crime type so people could see when crimes were committed the most in what locations and when. This could help improve visualizations for when crimes are committed in a physical sense, and notify people of when they’re most likely to be a victim. 
