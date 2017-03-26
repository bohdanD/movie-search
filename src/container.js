

import React from 'react';
import {SearchForm} from './Components/search-form';
import {FilmList} from './Components/film-list';

class Container extends React.Component{

    render(){
        return (
            <div>
                <SearchForm />
                <FilmList />    
            </div>
            );
    }
}

export {Container};