import React from 'react';
import axios from 'axios';
import Card from './card';

export default class Films extends React.Component {
    state = {
        films: [],
        totalElements: 0
    }

    componentDidMount () {
        axios.get('https://swapi.co/api/films').then(res => {
            const responseData = res.data;
            this.setState({films: responseData.results, totalElements: responseData.count})
        })
    }

    render() {
        const cards = [];
        for(let i = 0; i < this.state.films.length; i++) {
            const film = this.state.films[i];
            cards.push(<Card title={film.title} releaseDate={film['release_date']} director={film.director} />)
        }

        return (
            <div className="films-container">
                {cards}
            </div>
        );
    }
}