

import React from 'react';
import ReactDOM from 'react-dom';

class MainContainer extends React.Component{
    render(){
        return (<h1>Hello dev branch</h1>);
    }
}


ReactDOM.render(<MainContainer />, document.getElementById('root'));