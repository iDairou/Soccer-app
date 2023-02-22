# Soccer App

## Overview 🔍

![](./my-app/src/animation/Animation.gif)

The project is an application built using Javascript along with the React library. The main goal is to retrieve and visualize data from the database according to the selected Ekstraklasa* season.

_Ekstraklasa - is the highest class in the hierarchy of men's league football in Poland_

## API - https://developer.sportradar.com/io-docs


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
- temporary key: e49z2ru2g8huc43xke7qe6p9
````
src\API\api_key.js

export const API_KEY = e49z2ru2g8huc43xke7qe6p9;

````

## CORS requests solution
API is not intended to be called from a client application. To avoid it it's enough to install plugin to your browser which allows you to send cross-domain requests. For chrome it would be Moesif Origin & CORS Changer (https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc).
After installing this plugin just set your plugin ON (on your icon at the top), reload the page and everything should work fine.

## Author 🔥
* Linkedin - [AndrejKaczanowski](https://www.linkedin.com/in/andrej-kaczanowski-frontend/).
