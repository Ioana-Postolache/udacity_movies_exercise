import React, { Component } from 'react';

class FavouriteMovies extends Component{
  render(){
    console.log('Props', this.props)
    return(
    <ul className='movies-list'>
      {this.props.profiles.map(profile => 
       <li key={profile.id}>{this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}</li>
       )
    }    
    </ul>)
  }
}

export default FavouriteMovies;