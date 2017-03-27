

import React from 'react';
import {SearchForm} from './Components/search-form';
import {FilmList} from './Components/film-list';
import Url from './Constants/OMDBUrl';
import getXmlHttp from './Constants/getXmlHttp';

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: '', error: ''};

        this.searchFilms = this.searchFilms.bind(this);
    }

    searchFilms(searchStr){
        var urlSrt = Url + 's=' + searchStr;
        var request = getXmlHttp();
        request.open('GET', urlSrt, true);
        request.onreadystatechange = () =>{
            if(request.readyState == 4){
                if(request.status == 200){
                    var data = JSON.parse(request.response);
                    console.log(data);
                    if(data.Response == "False"){
                        this.setState({data: '', error: data.Error});
                    }else{
                        this.setState({data: data});
                    }
                }else{
                    this.setState({data: '', error: 'Check you connection. Status:' 
                        + request.statusText});
                }
            }
        }
        request.send(null);
    }

    render(){
        return (
            <div>
                <SearchForm SearchMethod={this.searchFilms}/>
                <FilmList Films={this.state.data} Message={this.state.error}/>    
            </div>
            );
    }
}

export {Container};