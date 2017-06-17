// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">

    <div className="jumbotron">
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    </div>

          <div className="container">

            {/* Added this.props.children to dump all of the child components into place */}
            {/*this.props.children*/}

          </div>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;