var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video = {window.exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList videos = {window.exampleVideoData}/>
      </div>
    </div>
  </div>
);




// class App {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 offset-md-3">
//             <div><h5><em>search</em> view goes here</h5></div>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <div><h5><em>videoPlayer</em> view goes here</h5></div>
//           </div>
//           <div className="col-md-5">
//             <div><h5><em>videoList</em> view goes here</h5></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// }

// App.prototype.render = () => {
//   var $container = $('<div>');
//   $container.append(${this});
//   return $container[0];
// };

//
//
//

// var app = new App();
// console.log(app);
// app.render();

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


 //Important stuff we need to remember

//**************************** Classes ***********************************************
//                            class Rectangle {
//                              constructor(height, width) {
//                                this.height = height;
//                                this.width = width;
//                              }
//                            }

//**************************** Arrow Functions ****************************************

//console.log(materials.map(material => material.length));
//Basic Syntax:

  //                    (param1, param2, …, paramN) => { statements } 
  //                    (param1, param2, …, paramN) => expression
  //                     equivalent to: => { return expression; } 

//**************************** Object Initializer ****************************************

//                       var object1 = {a: 'foo', b: 42, c: {}};

//**************************** Template Literals  ****************************************

//                      `string text ${expression} string text`