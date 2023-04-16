import React, { Component } from "react";
import songs from './services/songs.js';
import Ratings from './components/Ratings.js';
//import SongCard from './components/SongCard.js';

class App extends Component {
  state = {
    songs: []
  };

  componentDidMount() {
    songs().then(data => {
      this.setState({ songs: data });
    });
  }


  sortedByTitle = () => {
    const sortedByTitle = [...this.state.songs].sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);
    this.setState({ songs: sortedByTitle });
  };

  sortedByRating = () => {
    const sortedByRating = [...this.state.songs].sort((a, b) => b.rating - a.rating);
    this.setState({ songs: sortedByRating });
  };

  render() {
    const { songs } = this.state;

    return (
      // <div className="main">
        <div id="super-tunes">
           <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        {/* </div> */}
        <div>
        <button className="st-btn" onClick={this.sortedByTitle}>Sort by Title</button>
        <button className="st-btn" onClick={this.sortedByRating}>Sort by Rating</button>   
        </div>
        {songs.map(song => (

            <div className="song-card" key={song.id}>
               <img src={song.songPic} alt={song.title} className="thumbimg"/>
               <div className="song-title">
                {song.title}  {song.artist} 
                </div> 
            <Ratings data={song.rating}/>
            </div>

          ))}
  
     </div>

    );
  }
}

export default App;