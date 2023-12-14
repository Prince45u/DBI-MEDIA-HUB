import express from 'express'
import generateRandomString from 'util';
import querystring from 'querystring';


var client_id = '0d4b65da51f54b2283931573cbeaf1c7';
var redirect_uri = 'http://localhost:3000/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
