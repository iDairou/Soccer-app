# Soccer App

## Overview 🔍

![](./my-app/src/animation/Animation.gif)

# Project: Ekstraklasa Data Visualization from Sportradar API

**Description:**

This project is an interactive web application that fetches data from the Sportradar API concerning the Polish Ekstraklasa (top-tier football league). The application allows users to browse detailed information about matches from the last three seasons, with the ability to select a specific season.

**Features:**

*   **Season Selection:** Users can choose the Ekstraklasa season from which they want to display data.
*   **Loaders:** While data is being retrieved from the API, loaders (loading animations) are displayed, informing the user that the data is being processed. This provides a better user experience and prevents the impression that the application has frozen.
*   **Match Results Table:** Match results are presented in a clear and readable table.
*   **Adjustable Rows per Page:** Users can customize the number of matches displayed on a single page of the table.
*   **Dynamic Pagination:** The results table features dynamic pagination, allowing easy browsing of results from multiple matchdays.
*   **Match Details:** Upon selecting a specific match, the user is presented with a detailed timeline of the match, containing key events such as goals, player substitutions, cards, etc.

**Future Enhancements:**

*   Addition of team and individual player statistics.
*   Expansion of data scope to include other football leagues.
*   Implementation of a match search function.
*   Improvements to the user interface.

# API - https://developer.sportradar.com/io-docs


## Built with 🔧
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CB3837?style=for-the-badge&logo=react-router&logoColor=61DAFB)
![Material UI](https://img.shields.io/badge/Material_UI-243763?style=for-the-badge&logo=mui&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Styled Components](https://img.shields.io/badge/Styled_components-FF9E9E?style=for-the-badge&logo=styled-components&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![REST API](https://img.shields.io/badge/REST%20API-4f736d?style=for-the-badge&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## Installation and configuration 💾

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/), follow the steps below to be able to use the application.

- Install all npm packages using command:
````
npm i
````

- To start develope mode use command:

````
npm start
````
- To access the api you must put the key in the file below with following structure
- temporary key: gbtPlIEHLjRb8iCAyOrav5wa9ldT5qfWCGyIZUcs
````
src\API\api_key.js

export const API_KEY = gbtPlIEHLjRb8iCAyOrav5wa9ldT5qfWCGyIZUcs;

````

## CORS requests solution
API is not intended to be called from a client application. To avoid it it's enough to install plugin to your browser which allows you to send cross-domain requests. For chrome it would be Moesif Origin & CORS Changer (https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc).
After installing this plugin just set your plugin ON (on your icon at the top), reload the page and everything should work fine.

## Author 🔥
* Linkedin - [AndrejKaczanowski](https://www.linkedin.com/in/andrej-kaczanowski-frontend/).
