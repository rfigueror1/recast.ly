var searchYouTube = function (options) { 
  var context = this;
  console.log(context);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options,
      maxResults: 5,
      type: 'video',
      embedable: true,
      key: window.YOUTUBE_API_KEY 
    },
    success: function(data) {
      console.log(data);
      context.state.data = data.items;
      console.log('asdohfoasidhfo');
      context.setState(prevState => ({
        done: false
      }));
      console.log(context.state.done);
    },
    error: function (errorData) {
      console.log("error: ", errorData);
    },
  });

};

window.searchYouTube = searchYouTube;
