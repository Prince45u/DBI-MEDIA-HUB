import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import '../index.css'
import axios from 'axios';
import Buffer from 'buffer/'
// import { getToken } from '../Components/spotify-auth';



function Home() {
    const [Data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const client_id = '0d4b65da51f54b2283931573cbeaf1c7';
    const client_secret = 'bfb127e426fa4576a053d35c873aecbb';

    const Buffer = require('buffer').Buffer;

    
    const [accessToken, setAccessToken] = useState('');

    // var authOptions = {
    //   url: 'https://accounts.spotify.com/api/token',
    //   headers: {
    //     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   form: {
    //     grant_type: 'client_credentials'
    //   },
    //   json: true
    // };

    //  axios.post(authOptions, function(error, response, body) {
    //   if (!error && response.statusCode === 200) {
    //     var token = body.access_token;
    //     console.log(token);
    //   }
    // });




    // const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '5f10632fd2msha36bd659e5e229dp12a895jsnac91239a54b1',
    //     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    //   }
    // };

    // useEffect(() => {
      
    //   fetch(url, options)
    // .then(response => response.json())
    // .then(response => setData(response.data))
    // .then(console.log(Data))
    // .then(setIsLoading(false))
    // .catch(error => console.log(error));

    // })
    

    
    return (
      <div>

        <h1>Song</h1>

        <audio controls="controls" name="media" className='song-widget'>
            <source src="https://cdns-preview-0.dzcdn.net/stream/c-04c2c479846725eec24a3f40e837d35e-16.mp3" type="audio/mpeg"/>

        </audio>

        <Card />

        <a href="https://accounts.spotify.com/authorize?client_id=$0d4b65da51f54b2283931573cbeaf1c7&redirect_uri=$localhost:3000&response_type=$token">spotify login</a>

      </div>
  )
}

export default Home