# Hooly // Food truck reservation management

A small test SPA frontend in Angular 15

## How to run the project ?

### Back-end

This project needs a backend to be fully fonctionnal. You can find a mock backend here:
https://github.com/CptConi/hooly-backend.
Follow instructions in read-me then come back here.

### Front-end

Once your small back-end mock is running, clone this project, then run:

```
yarn install
```

or

```
npm install
```

to install every needed dependencies.

Once every dependencies are downloaded and installed, you can run the project:

```
npm run start
```

or

```
yarn start
```

The app is now running, you can find it here: http://localhost:4200/

## What is inside ?

This application contains two fairly similar pages consisting of a list and a form. The first one, a reservations page, allows you to view a list of reservations made in the past for food trucks as well as a form for creating new reservations. The second one shows the list of existing food trucks and offers the possibility to add brand new ones.

I have tried to provide clean, reusable, and maintainable code to the best of my ability, without going overboard.

I have segmented the modules to avoid loading everything when opening the app. Same for routing. I also have implemented ngrx for store management. I have emulated the reception of a DTO for reservations and reconstructed it on the front-end using the handy selector system of ngrx.
