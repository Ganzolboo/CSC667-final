import React, { Component } from 'react';
import './vinicius.css';

class Albums extends Component {

  constructor() {
    super();
    this.state = {
      
    };
  }

  // The DB connection is on ./server/music.js, but I wasn't able to finish integrating everything together

  render() {
    return (
      <div id="main">

        <div class="search-side">
          <h3>Search</h3>
          <form>
            <label>Song:</label>
            <input type="text" name="song" />
            <br />

            <label>Artist:</label>
            <input type="text" name="artist" />
            <br />
            
            <label>Album:</label>
            <input type="text" name="album" />
            <br />

            <input type="submit" value="Search" class="btn" />
          </form> 
        </div>

        <div class="update-side">
          <h3>Update</h3>
          <form>
            <label>Song:</label>
            <input type="text" name="song" />
            <br />

            <label>Artist:</label>
            <input type="text" name="artist" />
            <br />
            
            <label>Album:</label>
            <input type="text" name="album" />
            <br />

            <input type="submit" value="Update" class="btn" />
          </form> 
        </div>

      </div>
    );
  }
}

export default Albums;
