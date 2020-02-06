# UDOU - Built to Fit

## Furniture ecommerce site with product configuration

### Set Up Instructions

all source code in ./src

To run the local dev environment:

-   in the root level of the backend folder in the terminal use the commands

```
npm install
npm run server
```

-   in the root level of the frontend folder run the commands

```
yarn
yarn start
```

### Deployed Website

[Deployed Website](https://amazing-sinoussi-09e10d.netlify.com/)

### GitHub

During the project we had setup a continuous deployment through Heroku only. This worked great up until the last day where we had to merge two brances together containing cypress and jest. As we had set up our project with nested package.json files, when we attempted to merge them together we had a lot of issues and was unable to run our prject on multiple machines.

We decided on the last day to redo the repository's on GitHub and redeploy our site to Netlify for the front end and Heroku for the backend. For the below links, the first link (All Commits) contains all the commits from the three weeks until we rebuilt the repos. The other two links (frontend and backend) contain the write source code for the finished project but does not have the commits for the whole project duration.

[All Commits](https://github.com/udou-furniture/MERN-Part-B)

[frontend](https://github.com/udou-furniture/frontend)

[backend](https://github.com/udou-furniture/backend)

### Powerpoint Presentation

[Powerpoint Presentation](https://docs.google.com/presentation/d/1AWXHOzukEEGTWtdAxAUhuPlrw2NzfE6eTwi1j07RYpw/edit?usp=sharing)

### Development Testing

[Testing](https://docs.google.com/spreadsheets/d/11FjiKOItbOdADng6T_R-3igUlFfuq5cdFLl0jFLSYrQ/edit?usp=sharing)

### Cypress Testing Coverage Report

![Coverage Report](docs/coverage-report.png)

### Dependencies

#### Back-end

```JSON
"dependencies": {
    "bcrypt": "^3.0.7",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.8.7",
    "mongoose-unique-validator": "^2.0.3",
    "nodemon": "^2.0.2"
  },
  "devDependencies": {
    "jest": "^25.1.0",
    "supertest": "^4.0.2"
  }
```

For authentication we used 'bcrypt' to hash passwords for storing in the database, and 'jsonwebtoken' for signing and verifying tokens.

For testing out epxress app we used 'jest' with 'supertest' for the async endpoint functions.

we used 'nodemon' during development to contiuously refresh the server, and we used 'mongoose' to build schemas for our mongoDB.

#### Front-end

```JSON


"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.26",
    "@fortawesome/free-solid-svg-icons": "^5.12.0",
    "@fortawesome/react-fontawesome": "^0.1.8",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.3.0",
    "react-sliding-pane": "^4.0.1",
    "react-transition-group": "^4.3.0",
    "redux": "^4.0.5",
    "redux-form": "^8.2.6",
    "three": "^0.112.1",
    "three-mtl-loader": "^1.0.2",
    "three-obj-loader": "^1.1.3",
    "three-orbit-controls": "^82.1.0"
  }
```

we used 'font awesome' for svg incons.

we stored the state of our front end app using 'redux', and used 'redux-form' for building forms, and 'react-redux'.

'react-sliding-pane' was used to build the cart modal, and 'react-transition-group' was to build the drop-down product category menu.

'react-router-dom' was used to build the front end URLs.
'react-dom' was for interfacing between the DOM and react.

'react-scripts' was used in development to create the front end app.

'three' is a libary to render 3D scenes using WebGL.

'three-mtl-loader' and 'three-obj-loader' allow OBJ 3d models to be uploaded to the 3D scene.

'three-orbit-controls' adds the ability to use the mouse to orbit the camera in the 3D scene.

### Purpose

We are building a full stack web application to function as a one-way ecommerce platform for our client to sell user-configurable furniture items directly to consumers.

### Contributors

| [![Melissa Bykersma](docs/contributors/mel-b-70x70.png)](https://github.com/MelB-24) | [![Kyle Smith](docs/contributors/kyle-s-70x70.png)](https://github.com/Kyle46220) | [![Mark Tomlinson](docs/contributors/mark-t-70x70.png)](https://github.com/mark-tomlinson-dev) |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Melissa Bykersma                                                                      | Kyle Smith                                                                         | Mark Tomlinson                                                                                  |

### Functionality/Features

The website will be a one page application, with several dynamically rendered pages. Each will have several main components. There will be landing page with an image display carousel to display images with a call to action and button. There will also be a two column component to display information and images, as well as a card display carousel to display products and customer reviews.

There will be a top nav bar across all pages with page links to the main pages with a drop down secondary menu of furniture type categories. This menu will contain thumbnail images to illustrate the categories.

Each category will have its own index page displaying the products in this category. There is a reactive form taking inputs to filter the results. The results are displayed as cards.

Each product page will have a form taking inputs for product configuration (height, width, colour). There will be a dynamic representation of the cabinet that is updated as changes are made. If there is time, we would like to add other customisations, such as placement of drawers, or shelf position and quantity.

The product page will have a button to purchase the product once it has been configured and the user will then be directed to sign up or login, before going to a cart, and then to checkout which will at least have an order request button that will save the order to the database. If there is time there will be a stripe payment gateway.

Once a purchase has been made, the user will be able to leave a review for their product through a form.

### Target audience

The client for this project serves end consumers in a residential domestic market. The target user for the web app is the lead purchaser in a household who rents or owns their own home.

### Tech stack

The tech stack used to build the application will be the MERN stack. A MERN stack application consists of the following four technologies:

-   **MongoDB** (M): MongoDB is a NoSQL, document-orientated database. Its purpose is to bridge the gap between key-value stores (which are fast), and relational databases (which are rich in functionality). Rather than store data in rows and columns as in a relational database, MongoDB stores documents in collections using flexible schemas. UDOU's database will reside on a MongoDB Atlas server. The application will access MongoDB through Mongoose, an Object Data Modeling (ODM) JavaScript library that will allow us to define objects within schemas and then map those objects to a MongoDB document. It will also allow us to provide custom validations.
-   **Express.js** (E): Express is a backend web application framework that will run as a module within our Node.js environment. Used for building web applications, web servers, and APIs, Express greatly simplifies the handling and routing of HTTP requests and responses. It parses the request URL, headers, and parameters for us with very little explicit specification required. An important part of Express is middleware. Middleware functions are functions that execute during the lifecyle of a request to the Express server. Each middleware has access to the HTTP request and response for each route it's attached to. It’s often used to edit the request or response objects, or terminate the request given a certain condition or conditions.[^1] In this particular project, for example, middleware will be used to intercept certain requests to check for an authorisation token.
-   **React** (R): React is a JavaScript library for building user interfaces. It creates views rendered in HTML. It is there to render something onto the screen and re-render it whenever something changes. In that way, React apps are highly _reactive_. They are made of 'components' that manage their own 'state'. Without a library such as React, every time data changed on a site (think of Facebook with its many and varied components always being updated (e.g. friend requests, messages, status updates, news, and so on)), the page would have to reload - that is, make a request to the server, be rendered on the server, and sent back. With React, the necessary re-rendering is done on the client-side. This is possible via the virtual DOM that React apps keep in memory. React's dynamic nature will make it the perfect tool for generating the many dynamic UI components that the UDOU ecommerce web application requires.
-   **Node.js** (N): Node is a JavaScript environment that executes JavaScript outside of the browser. On this project, Node will be used in conjuction with express to develop the server-side application, the API, and to facilitate interaction with the database.

# Application Architecture Diagram

![Home Page](docs/application-architecture-diagram-1.png)

# Data Flow Diagram

![Data Flow Diagram](docs/data-flow-diagram.png)

# User stories

#### Some typical user personas

#### Clara and Nick

Mid 30’s defacto couple.
Clara is a graphic designer and Nick runs a printing studio.
They both have basic computer literacy and several devices each.
They are professional, have no kids, are balanced between career and social lives.
They have some discretionary cash, more so through wise spending rather than high income. Their household income is \$130K per year.
They rent an apartment, do not own a car, and have two dogs.

#### Maria

Late 30’s.
Has young family and is working part time.
Setting up a home in the house she and her partner recently bought in the suburbs.  
Money isn’t super abundant but she appreciates quality and the value of organisation and design and will invest in things that last.

#### Brendan

Early 30’s single professional.
Owns an apartment. Lives by himself, no kids.
Has recently started to see acceleration in his career and finds himself with lots of spare income.
Likes gadgets, collectables, music, and design.

Is enjoying his own life and filling it up with things he needs a place for.

#### User Stories

As Clara and Nick, we want to easily visualise a custom furniture option, so we can be confident designing/configuring it ourselves, without spending too much time.

As Maria, I know exactly what I need and I want to be able to specify this, so I can make a good investment into improving my home.

As Brendan, I want to specify some uniquely shaped shelving, so that I can fit my collection of things.



# Wireframes

## Home Page

![Home Page](docs/Home.png)

## Home Page Mobile

![Home Page Mobile](docs/Home-Mobile.png)

## Home Page Collection Dropdown

![Home Page Dropdown](docs/Home-Dropdown.png)

## Collection

![Collection](docs/Collections.png)

## Collection Mobile

![Collections Mobile](docs/Collections-Mobile.png)

## Individual Product

![Individual Product](docs/Individual-Product-Page.png)

## Login

![Login](docs/Login.png)

## Login Mobile

![Login Mobile](docs/Login-Mobile.png)

## Register

![Register](docs/Register.png)

## Register Mobile

![Register Mobile](docs/Register-Mobile.png)

## Reviews

![Reviews](docs/Reviews.png)

## Reviews Mobile

![Reviews Mobile](docs/Reviews-Mobile.png)

## Shopping Cart

![Shopping Cart](docs/Shopping-Cart.png)

## Shopping Cart Mobile

![Shopping Cart Mobile](docs/Shopping-Cart-Mobile.png)

# Part A Screenshots

## Tasks assigned

![Tasks Assigned](docs/screenshots/Trello-2-tasks-assigned.png)

## Checklist created

![Checklist Created](docs/screenshots/Trello-3-creating-checklist.png)

## Progress

![Checklist Created](docs/screenshots/Trello-5-progress-2.png)

## Task Updated

![Task Updated](docs/screenshots/Trello-6-task-update-1.png)

## Checklist in Action

![Checklist Created](docs/screenshots/Trello-9-checklist-in-action-2.png)

## More Progress

![Checklist Created](docs/screenshots/Trello-10-progress-4.png)

## Task Updated Again

![Task Updated Again](docs/screenshots/Trello-11-task-update-2.png)

## Done 🎉

![Checklist Created](docs/screenshots/Trello-12-done.png)

# Part B Screenshots

![Trello](docs/screenshots-partb/trello-bugs-mounting-up-1.png)

![Trello](docs/screenshots-partb/trello-checklist-1.png)

![Trello](docs/screenshots-partb/trello-git-evidence-1.png)

![Trello](docs/screenshots-partb/trello-git-evidence-2.png)

![Trello](docs/screenshots-partb/trello-git-evidence-3.png)

![Trello](docs/screenshots-partb/trello-progress-0.png)

![Trello](docs/screenshots-partb/trello-progress-1.png)

![Trello](docs/screenshots-partb/trello-progress-2.png)

![Trello](docs/screenshots-partb/trello-progress-3.png)

![Trello](docs/screenshots-partb/trello-progress-4.png)

![Trello](docs/screenshots-partb/trello-progress-5.png)

![Trello](docs/screenshots-partb/trello-progress-6.png)

![Trello](docs/screenshots-partb/trello-progress-7.png)

![Trello](docs/screenshots-partb/trello-progress-8.png)

![Trello](docs/screenshots-partb/trello-progress-9.png)

![Trello](docs/screenshots-partb/trello-progress-done.png)


[^1]: https://flaviocopes.com/express/