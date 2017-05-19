import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render(){
    let artist = {
      name: '',
      followers: {
        total: ''
      },
      images: [{ url: '' }],
      genres: []
    }
    artist = this.props.artist !== null ? this.props.artist : artist;
    return(
      <div className="profile">
        <img
          src={artist.images[0].url}
          alt="Profile"
        />
        <div className="info">
          <div className="name">{artist.name}</div>
          <div className="followers">
            {artist.followers.total} followers
          </div>
          <div className="genres">
            {
              artist.genres.map((genre, key) => {
                genre = genre !== artist.genres[artist.genres.length-1]
                              ? ` ${genre},`
                              : ` & ${genre}`;
                return (<span key={key}>{genre}</span>)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
