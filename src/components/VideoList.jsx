var VideoList = (props) => {
  console.log(props);
  var a = "hola";
  return (<div className="video-list">
    <div><h5><em> {props.videos[0].snippet.title} </em> <img src = {props.videos[0].snippet.thumbnails.default.url}/></h5></div>
    <div><h5><em> {props.videos[1].snippet.title} </em> <img src = {props.videos[1].snippet.thumbnails.default.url}/></h5></div>
    <div><h5><em> {props.videos[2].snippet.title} </em> <img src = {props.videos[2].snippet.thumbnails.default.url}/> </h5></div>
    <div><h5><em> {props.videos[3].snippet.title} </em> <img src = {props.videos[3].snippet.thumbnails.default.url}/></h5></div>
    <div><h5><em> {props.videos[4].snippet.title} </em> <img src = {props.videos[4].snippet.thumbnails.default.url}/></h5></div>
  </div>);
};





// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
