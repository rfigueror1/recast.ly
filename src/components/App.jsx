class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      data: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.youtubeSearch =window.searchYouTube.bind(this);
  }

  

  handleVideoClick(something) {
    something = Number(something);
    var context = this;
    this.setState(prevState => ({
      done: false,
      currentVideo: context.state.data[something]
    }));
  }  

  handleSearchClick(something) {
    console.log(something);
    this.youtubeSearch(something);
  
    // this.setState(prevState => ({
    //   done: false
    // //Change data here
    // }));
  } 

  render() {
    // this.state.done = true; need to set state to true
    var context = this;
    var arr = [];
    for (var key in context.state.data){
      arr.push(context.state.data[key]);
    }
    return ( 
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchClick={this.handleSearchClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo} handleVideoClick = {this.handleVideoClick.bind(this)}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.data} handleVideoClick = {this.handleVideoClick.bind(this)}/>
          </div>
        </div>
      </div>);
    
  }
  


}



