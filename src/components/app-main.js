import React, { Component } from 'react';
import SearchBox from './search';
import Card from './card';

class App extends Component {
    constructor(props) {
        super(props)

    this.state = {
            movieID: 157336 // set initital load movie - Interstellar
        }
    }
    render() {
        return (
            <div>
                <SearchBox fetchMovieID={this.fetchMovieID.bind(this)}/>
                <Card data={this.state}/>
            </div>
        )
    } 
}
// END render