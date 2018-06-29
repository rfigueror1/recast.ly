var Search = (props) => {

  return (<div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick ={() => { props.handleSearchClick(($('.form-control').val())); }}> 
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> );
};
      
//line 5 --> add a curly braces

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
