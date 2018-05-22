import React, { Component } from 'react';
import {keys, filter} from 'lodash';
import './App.css'
import Login from './Components/Login'
import Playlists from './Components/Playlists'
import Tracks from './Components/Tracks';
// let gpm = new require('playmusic');

class App extends Component {
  playlists = ['playlist1', 'playlist2', 'playlist3', 'playlist4', 'playlist5', 'playlist1', 'playlist2', 'playlist3', 'playlist4', 'playlist5']
  tracks = Array(50).fill({
    albumArt: 'https://i.scdn.co/image/e61b4ab1d05a00889ff8d30abcfed5510cdf6ee7',
    title: "trackName1234"
  });
  state = {
    login_status: undefined,
    playlists: undefined,
    tracks: undefined
  }
  
  getPlaylists = (e) => {
    e.preventDefault();
    console.log('fetching playlists from back-end');
    // const api_call = 
    fetch('http://localhost:8080/get-playlist-entries')
      .then(res => {
        console.log(res)
        return res.json()
      })
.then(res => {
        console.log(res)
        this.setState({
          login_status: true,
          playlists: keys(res),
          tracks: filter(res.pop.tracks, function (o) {
            return o.title
          })
        });
      })
      .catch(err => {console.log(err)})
    // console.log(api_call)
    // const songs = await api_call.json();
    // console.log(JSON.stringify(songs, null, 4));
    
  }

  getPlaylistTracks = async (pl, e) => {

  }

  render() {
    // if (!this.state.login_status) return (<Login getPlaylists={this.getPlaylists}/>);
    return (
      <div className="wrapper">
        <div className="container-fluid">
        <div className="row row-no-padding">
            <div className="col-md-3 nopadding">
              <div className="sidebar">
                <section id="search" className="alt">
                  <form method="get" action="#">
                    <input type="text" name="search" id="search-bar" placeholder="Search..."/>
                  </form>
                </section>
                {/* <Playlists playlists={this.state.playlists} getPlaylistTracks={this.getPlaylistTracks}/> */}
                <Playlists playlists={this.playlists} getPlaylistTracks={this.getPlaylistTracks}/>
              </div>
            </div>

            <div className="col-md-9 nopadding">
              <div className="main">
                {/* <Tracks tracks={this.state.tracks} /> */}
                <Tracks tracks={this.tracks} />
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-md-12">
              <h6>I am a col , that spans the entire 12 coloumbs that this row had to offer , by now you should know that if you want to create another coloumb , you have to go create another "row" class</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;