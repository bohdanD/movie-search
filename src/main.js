

import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from './container';

class MainContainer extends React.Component{
    render(){
        return <Container />
    }   
};


ReactDOM.render(<MainContainer />, document.getElementById('root'));