const axios = require("axios");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

const saltRounds = 10;

const signup = (req, res) => {
  const { first_name, last_name, email, WT } = req.body;
  let sql = "INSERT INTO users (first_name, last_name, email, WT) VALUES (?,?,?,?)";

  // bcrypt.hash(password, saltRounds, function (err, hash) {
    sql = mysql.format(sql, [first_name, last_name, email, WT]);

    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res.status(409).send("email is taken");
        return handleSQLError(res, err);
      }
      return res.send("Sign-up successful");
    });
  // });
};

const login = (req, res) => {
  const { email, first_name } = req.body;

  axios(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: {
      grant_type: "password",
      email: email,
      first_name: first_name,
      audience: process.env.AUTH0_IDENTITY,
      connection: "Username-Password-Authentication",
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
    },
  })
    .then((response) => {
      const { access_token } = response.data;
      res.json({
        access_token,
      });
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = {
  signup,
  login,
};

const { auth } = require("express-openid-connect");

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3000',
//   clientID: 'Mw1tNn6nEnVU7WgKaAE11kHt800Hq6BE',
//   issuerBaseURL: 'https://dev-eqrcop607jl0ywq4.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

// const { requiresAuth } = require('express-openid-connect');

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });
