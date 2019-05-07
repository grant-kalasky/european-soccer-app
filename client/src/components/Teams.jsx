import React from 'react';
import Client from "../Client.js";

export default class Teams extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      teamResults: []
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this._isMounted) {
      this._isMounted = true;
    }
  }
  
  handleChange(e) {
    const newSearchValue = e.target.value;
    this.setState({
      search: newSearchValue
    });

    if (this._isMounted) {
      this.getTeams(this.state.search);
    }
    // if (this.state.search === "") {
    //   this.setState({
    //     teamResults: []
    //   });
    // } else {
    //   Client.searchTeams(this.state.search)
    //     .then(results => this.setState({ teamResults: results }));
    // }
  }

  getTeams(query) {
    fetch(`http://localhost:3001/teams`)
      .then(res => res.json())
      .then(teams => this.setState({ teamResults: teams }))
  }

  render() {
    return(
      <div className="teams-container">
        <h2>Welcome to the Teams page</h2>
        <div className="ui icon input">
          <input 
            type="text" 
            placeholder="Search for team..."
            value={this.state.search}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
}

