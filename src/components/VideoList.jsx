var VideoList = (props) => (
  <div className="video-list">
    <VideoListEntry video = {props.videos[0]} id ='0'  handleVideoClick = {props.handleVideoClick}/>
    <VideoListEntry video = {props.videos[1]} id = '1' handleVideoClick = {props.handleVideoClick}/>
    <VideoListEntry video = {props.videos[2]} id = '2' handleVideoClick = {props.handleVideoClick}/>
    <VideoListEntry video = {props.videos[3]} id = '3' handleVideoClick = {props.handleVideoClick}/>
    <VideoListEntry video = {props.videos[4]} id = '4' handleVideoClick = {props.handleVideoClick}/>
  </div>
);
//




// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
