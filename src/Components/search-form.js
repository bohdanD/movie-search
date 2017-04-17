

import React from 'react';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchString: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componenDidMount(){
      $(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

    }

    handleChange(e){
      if (e.target.value === null){
        Materialize.toast("You must type something!");
      }
      else{
        this.setState({searchString: e.target.value});
    }
  }

    handleSubmit(e){
        console.log(this.state.searchString);
        this.setState({searchString: ''});
        this.props.SearchMethod(this.state.searchString);
        e.preventDefault();
    }

    render(){
        return (
          <div className="wrapper">
            <video id="bgvid" playsInline autoPlay muted loop>
            <source src="src/stylesheets/media/OldFashionedFilmLeaderCountdownVidevo.mov" type="video/mp4" />
            </video>
            <div className="serch-form">
                <form onSubmit={this.handleSubmit}>
                  <h1>Movie Finder</h1>
                  <div className="input-field col s6">
                    <input
                        id="email"
                        type="text"
                        name="searchInput"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="film">Type a movie name</label>
                  </div>
                  <button className="btn waves-effect waves-light black" type="submit" name="submitBtn" value="Search"><a href="#ex1"><i className="material-icons right">send</i></a>Find</button>
                </form>
            </div>
          </div>
        );
    }
};

export {SearchForm};
