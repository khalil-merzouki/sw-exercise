import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h1 className="card__title">{this.props.title}</h1>
                <p className="card__release-date">{this.props.releaseDate}</p>
                <p className="card__release-date">{this.props.director}</p>
            </div>
        )
    }
}