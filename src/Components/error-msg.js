

import React from 'react';

class ErrorMsg extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="error-msg">
                <h2>{this.props.Message}</h2>
            </div>
        );
    }
}

export {ErrorMsg};