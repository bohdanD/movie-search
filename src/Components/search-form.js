

import React from 'react';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchString: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({searchString: e.target.value});
    }

    handleSubmit(e){
        console.log(this.state.searchString);
        this.setState({searchString: ''});
        e.preventDefault();
    }

    render(){
        return (
            <div className="serch-form">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="searchInput" 
                        placeholder="Input name here"
                        onChange={this.handleChange}
                    />
                    <input type="submit" name="submitBtn" value="Search"/>
                </form>
            </div>
        );
    }
};

export {SearchForm};