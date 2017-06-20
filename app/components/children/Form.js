// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return {search: { term: "" ,number:" ",start:" ",end:" "}};
  },

  // This function will respond to the user input
  changeTerm: function(event) {
    const search = this.state.search;
    search.term = event.target.value;
    this.setState({ search: search });

  },

    changeNumber: function(event) {
    const search = this.state.search;
    search.number = event.target.value;
    this.setState({ search: search });

  },

    changeStart: function(event) {
    const search = this.state.search;
    search.start = event.target.value;
    this.setState({ search: search });

  },

    changeEnd: function(event){
    const search = this.state.search;
    search.end = event.target.value;
    this.setState({ search: search });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.search);
    //console.log(this.state.search)
    this.setState({search: { term: "" ,number:" ",start:" ",end:" "}});
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Parameters</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search Term:</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.search.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.changeTerm}
                required
              />
            {/*second form*/}

              <h4 className="">
                <strong>Number of Records to Retrieve:</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.search.number}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.changeNumber}
                required
              />
            {/*third form*/}

              <h4 className="">
                <strong>Start Year (Optional - YYYYMMDD):</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.search.start}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.changeStart}
                required
              />

            {/*fourth form*/}

              <h4 className="">
                <strong>End Year (Optional - YYYYMMDD):</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.search.end}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.changeEnd}
                required
              />

              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
