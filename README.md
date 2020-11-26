# university search project

This project uses the following technologies:

- [React](https://reactjs.org) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the
  backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management
  between React components

## Configuration

Make sure to add your own `MONGOURI` from your database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret",
};
```

## Quick Start

First install node module for back end in root directory

```javascript
npm install
or
yarn
```

Run back end

```javascript
npm start
or
yarn start
```

And install node module for front end in client directory

```javascript
npm install
or
yarn
```

Run front end

```javascript
npm start
or
yarn start
```
