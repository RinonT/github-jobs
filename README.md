# Github Jobs

Creating a job search using an API, and using React to handle the frontend.

Building a website that displays all of the possible jobs open for everyone by fetching data from the github jobs data.
 

![image](./assets/1.png)
![image](./assets/2.png)
![image](./assets/3.png)

- User story: I can see a list of jobs in a city by default
- User story: I can search for jobs with a given keyword
- User story: I can search for jobs with a city name, zip code or other location
- User story: I can select one option from at least 4 pre-defined options
- User story: I can search for a full-time job only
- User story: I can see a list of jobs with their logo, company name, location, and posted time.
- User story: When I select a job, I can see job descriptions and how to apply like the given design.
- User story: When I am on the job details page, I can go back to the search page
- User story (optional): I can see a list of jobs in the closest city from my location by default
- User story (optional): I can see jobs in different pages, 5 items each page

Applying a few concept we learned in class, such as a **reducer** and a global **context**.

**Icon**: https://google.github.io/material-design-icons/ (you can also use the react-icons package)

**API**: https://jobs.github.com/api. Use data from the API to create questions and answers.
 
**Design** : https://www.figma.com/file/gAkVx9CdOqnJcCjJ7nVNkw

**Live app** : https://jolly-heisenberg-20c49e.netlify.app/
 
Template for readme :

<!-- Please update value in the {}  -->

<h1 align="center">Github Jobs</h1>

<div align="center">
  <h3>
    <a href="https://github-jobs-rinon.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/ganamavo/github-jobs">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- My demo:
The demo of my project can be seen by clicking [this netlify link](https://github-jobs-rinon.netlify.app).

- My experience:
I have solidified my knowledge about useReducer, using a few different fetches instead of working with one fetch for the whole project.

- The structure of this project:
 - There are two different context files: one is for the reducer which I named **Reducer** and the **GlobalContext** is providing context to all files.

 - The **Components** folder contains all the components files needed for the **Pages**. That means I have two folders: one is a component folder and the other one is the page folder.

 - I didn't use any filter method but instead, I did different fetches for the searching jobs, which you can see in the *Reducer* and *GlobalContext* files.

-   If I had more time, I would make my code much cleaner and spend more time on the styles. Finishing what I couldn't finish. I would refactor my code and style it much better.

- What I have learned is still about using useEffect, using using reducer and also, manupilating api urls. But something new? Pagination in react that is amazing.

- The most challenging part for me is first waiting for the data from the serve which is very slow. Working with the html in the description's value. Getting the date distance.

- Comment:
This is a delicious project. Challenging but enjoyable. Thank you very much.



### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

## Contact

-   Website [your-website.com](https://{your-web-site-link})
-   GitHub [@your-username](https://{github.com/your-usermame})
