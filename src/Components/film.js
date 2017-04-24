import React from 'react';

class Film extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="film">
                <div className="title">
                    <h2>{this.props.Film.Title}</h2>
                </div>
                <div className="poster">
                    <img src={this.props.Film.Poster} alt="" />
                </div>
                <div className="type">
                    <h3>Type: {this.props.Film.Type}</h3>
                </div>
                <div className="year">
                    <h3>Year: {this.props.Film.Year}</h3>
                </div>
                <div className="divider">
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export {Film};
