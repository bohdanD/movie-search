

import React from 'react';
import {Film} from './film';

class FilmList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        var filmList;
        if(this.props.Films){
            filmList = this.props.Films.Search.map(function(film, i){
                return <Film Film={film} key={i.toString()}/>;
            });
        }

        return (
            <div className="film-list">
               {filmList}
            </div>
        );
    }
}

export {FilmList};